// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// CONSTANTS
/** These are the prefixes to be used in style definitions to declare what type of selector an object is representing.
 * If an object is not representing a selector, then it must be a container of objects that are representing selectors. **/
const PREFIXES = {
    CLASS: "c",
    ID: "i",
    UNIVERSAL: "u",
    TAG: "t",
    CONTAINER: "o"
};
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
/** A type that allows for making and accessing elements associated with a provided style definition.
 * When a style is made, selectors and stylers are made from the definition.
 * These stylers can be used during events to apply styles onto elements when they are made, and one can use
 * the apply() method to mass apply all the styles held in a definition across an entire page.
 *
 * The Style type helps with automating style switching, ensuring that selectors used in the HTML match with
 * what's present in a style definition, and with organizing a site that plans to use multiple styles.**/
export class Style {
    style_definition;
    selectors;
    stripped_selectors;
    styler;
    constructor(definition) {
        this.style_definition = definition ?? {};
        this.selectors = this.make_selectors();
        this.stripped_selectors = this.make_stripped_selectors();
        this.styler = this.make_stylers();
    }
    make_selectors(definition = this.style_definition) {
        const selectors = {};
        for (const child_key in definition) {
            const child = definition[child_key];
            // PREVENTS READING LEAF NODES IN TEMPLATE TREE
            // If the child is an object, proceed with the iteration.
            // If the child is not an object, skip this iteration.
            if (is_object(child)) {
                const child_name = child_key.slice(1).toLowerCase();
                const child_prefix = child_key[0];
                const selector_character = get_selector_character(child_prefix);
                // Universal and tag selectors are special cases since they don't have a character that proceeds their contents inside CSS.
                // They are their own contents.  In the case of universal, it is just called by its selector_character.
                // In the case of tags, they are selected by the tag name (the child_name in this case).
                switch (child_prefix) {
                    case PREFIXES.CONTAINER:
                        break;
                    case PREFIXES.UNIVERSAL:
                        selectors[child_name] = selector_character;
                        break;
                    case PREFIXES.TAG:
                        selectors[child_name] = child_name;
                        break;
                    default:
                        selectors[child_name] = `${selector_character}${child_name}`;
                        break;
                }
                process_selectors(child, child_name, selectors);
            }
        }
        return selectors;
    }
    make_stripped_selectors(selectors = this.selectors) {
        const stripped = {};
        for (const key in selectors) {
            const selector = selectors[key];
            let has_selector_character = false;
            switch (selector[0]) {
                case ".":
                case "#":
                case "*":
                    has_selector_character = true;
                    break;
            }
            // If a selector character is present, remove it.  Otherwise, return the selector.
            stripped[key] = has_selector_character ? selector.slice(1) : selector;
        }
        return stripped;
    }
    make_stylers(definition = this.style_definition, selectors = this.selectors) {
        const stylers = {};
        for (const child_key in definition) {
            const child = definition[child_key];
            if (is_object(child)) {
                const child_name = child_key.slice(1).toLowerCase();
                process_functions(definition, selectors, child, child_name, stylers, [child_key]);
            }
        }
        return stylers;
    }
    /** Used to apply a style definition to a page.**/
    apply() {
        for (const selector_key in this.styler) {
            const selector = this.selectors[selector_key];
            // We check to see if the selector is present before applying a style since
            // parent stylers can exist (parent stylers have no selectors).  Parent stylers don't have selectors since they
            // act as containers for readability purposes.  Hence, we don't want to style something that doesn't exist.
            if (selector) {
                this.styler[selector_key]();
            }
        }
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// HELPER FUNCTIONS
/** Returns the associated selector character that corresponds with the provided prefix.  We must do this since objects
 * can't start without the selector characters themselves without using string object names and I refuse to work with string
 * object names because I'm stubborn and don't like how it looks.**/
function get_selector_character(prefix) {
    switch (prefix) {
        case PREFIXES.CLASS:
            return ".";
        case PREFIXES.ID:
            return "#";
        case PREFIXES.UNIVERSAL:
            return "*";
        case PREFIXES.TAG:
            return "";
        case PREFIXES.CONTAINER:
            return "";
        default: throw new Error(`get_selector_character: unrecognized prefix "${prefix}"`);
    }
}
/** Will return a boolean during runtime based on if the passed value is an object or not.
 *
 * Will tell TypeScript what datatype the parameter "value" is during compile time based on the boolean result.
 *
 * "value is Record<String, unknown>" is made as the datatype if value is an object and not null.
 *
 * "unknown" is made as the datatype otherwise.
 *
 * The function's purpose is to help with determining if recursing through an object is necessary or not depending on
 * if there is another object within said object.  Prevents leaves in the definition tree from becoming selectors. **/
function is_object(value) {
    const is_an_object = typeof value === "object";
    const is_not_null = value !== null;
    return is_an_object && is_not_null;
}
/** Since I'm using query selection over id/class selection, 3 different results can be returned using this type of selection.
 *
 * For classes, NodeListOf<HTMLElement> is always returned; in the scenario that the class isn't being used an empty NodeList will be returned.
 *
 * For ids, either HTMLElement or null will be returned based on if an id is being utilized or not.
 *
 * This function's purpose is to apply styles based on the type that is returned from a query selection.**/
function for_each_value(value, style_to_apply) {
    // Null Scenario
    if (value === null)
        return;
    // ID Scenario
    if (value instanceof HTMLElement) {
        style_to_apply(value);
        return;
    }
    // Class Scenario
    // @ts-ignore
    for (const element of value) {
        style_to_apply(element);
    }
}
/** Queries the DOM based on the provided selector string.
 *
 * Returns different types based on the selector prefix:
 *
 * "#" = ID Selector = HTMLElement | null (via querySelector)
 *
 * "." = Class Selector = NodeListOf<HTMLElement> (via querySelectorAll)
 *
 * "*" = Universal Selector = NodeListOf<HTMLElement> (via querySelectorAll)
 *
 * "" = Tag Selector = NodeListOf<HTMLElement> (via querySelectorAll)
 **/
function query_selector(selector) {
    if (selector[0] === "#") {
        return document.querySelector(selector);
    }
    else {
        return document.querySelectorAll(selector);
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// FUNCTION HELPERS FOR CREATING SELECTORS FROM A STYLE DEFINITION
/** Recursive function that goes through a provided definition and creates selectors to throw into a provided object. **/
function process_selectors(parent, selector_key, selectors) {
    for (const child_key in parent) {
        const child = parent[child_key];
        // PREVENTS READING LEAF NODES IN TEMPLATE TREE
        // If the child is an object, proceed with the iteration.
        // If the child is not an object, skip this iteration.
        if (is_object(child)) {
            const child_prefix = child_key[0];
            const child_name = child_key.slice(1).toLowerCase();
            const child_selector_key = `${selector_key}_${child_name}`;
            // Skip object containers, they are not CSS selectors.
            if (child_prefix === PREFIXES.CONTAINER) {
                process_selectors(child, child_selector_key, selectors);
            }
            else {
                selectors[child_selector_key] = `${get_selector_character(child_prefix)}${child_selector_key}`;
                process_selectors(child, child_selector_key, selectors);
            }
        }
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// FUNCTION HELPERS FOR CREATING STYLERS FROM A STYLE DEFINITION
/** Recursive function that will generate parent and child stylers and throw them into the stylers object
 * for the recursive initiator to later return.  Parent stylers can be called to apply all of their child styles.
 * Child stylers target a specific class/id/tag and will not trigger a cascade call like the parent styler calls.**/
function process_functions(style_definition, selectors, parent, selector_key, stylers, path) {
    const has_nested_objects = Object.values(parent).some(is_object);
    if (has_nested_objects) {
        for (const child_key in parent) {
            const child = parent[child_key];
            // PREVENTS READING LEAF NODES IN TEMPLATE TREE
            // If the child is an object, proceed with the iteration.
            // If the child is not an object, skip this iteration.
            if (is_object(child)) {
                const child_name = child_key.slice(1).toLowerCase();
                const child_selector_key = `${selector_key}_${child_name}`;
                process_functions(style_definition, selectors, child, child_selector_key, stylers, [...path, child_key]);
            }
        }
        // Collect all stylers created by current parent's children and combines them into a parent styler.
        stylers[selector_key] = make_parent_styler(selector_key, stylers);
    }
    else {
        // Create a child styler.
        stylers[selector_key] = make_child_styler(style_definition, selectors, parent, path, selector_key);
    }
}
/** Parent stylers can be called to apply all of their child styles.
 * Will create a styler that will sift through the stylers object to call upon the child stylers related to the parent. **/
function make_parent_styler(selector_key, stylers) {
    return (element) => {
        const prefix = `${selector_key}_`;
        if (element) {
            throw new Error(`styler.${selector_key}() is a parent styler and cannot accept an element.`);
        }
        else {
            for (const [key, styler] of Object.entries(stylers)) {
                if (key.startsWith(prefix)) {
                    styler();
                }
            }
        }
    };
}
/** Creates a styler by collecting the properties and their values associated with a class/id/tag.
 * Child stylers target a specific class/id/tag and will NOT trigger a cascade call like the parent styler calls.
 *
 * The created styler can be called in two ways:
 *
 * 1. Without an element — queries the DOM and styles all elements associated with the selector.
 *    EXAMPLE: STYLE.styler.menu_buttons();
 *
 * 2. With an element — styles the provided element directly, bypassing the DOM query.
 *    EXAMPLE: STYLE.styler.menu_buttons(some_element);
 **/
function make_child_styler(style_definition, selectors, child, path, selector_key) {
    return (element) => {
        const target = element ? element : query_selector(selectors[selector_key]);
        for_each_value(target, (el) => {
            for (const property in child) {
                el.style[property] = child[property];
            }
        });
    };
}
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
