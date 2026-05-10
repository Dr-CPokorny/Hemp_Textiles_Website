import * as FS from "fs";
import * as PATH from "path";
import * as SM from "../style_manager.js";
import * as SD from "../style_definitions.js";
let HEAVENLY_EARTH = new SM.Style(SD.STYLE_HEAVENLY_EARTH);
const SS = HEAVENLY_EARTH.stripped_selectors;
// PAGE TYPES
// Types of HTML pages that can be built.  The more features you want to test, the more that must be added
// to the testing type.  Also, all of these pages share the same head.  This is to ensure that only the head
// builder needs to be manipulated when adding new stylesheets, links, or scripts.
const PAGE_TYPE_BLANK = "page_blank";
const PAGE_TYPE_TESTING = "page_for_testing";
// PAGE BUILDERS FOR TESTING
// When this file is executed these builds will generate all the types of pages.
// We do this so that regenerating pages during development/testing is simple.
build_page("Page Blank", PAGE_TYPE_BLANK);
build_page("Page Testing", PAGE_TYPE_TESTING);
// PAGE BUILDER
// Builds an HTML file that will be thrown into the pages directory.
export function build_page(title, page_type) {
    const name_of_file = title.toLowerCase().replace(/\s+/g, "_") + ".html";
    const output_path = PATH.resolve("../../pages", name_of_file);
    const html_content = build_html(title, page_type);
    FS.writeFileSync(output_path, html_content, "utf-8");
}
// HTML BUILDER
// Builds and returns HTML data containing a head and body defaulted with proper links and an h1 tag inside its
// body that holds the passed title in its contents.
function build_html(title, page_type) {
    const head = build_head(title);
    const body = body_director(title, page_type);
    return [
        ``,
        `<!DOCTYPE html>`,
        `<html lang="en">`,
        ``,
        `${head}`,
        ``,
        ``,
        ``,
        `${body}`,
        ``,
        `</html>`,
        ``,
    ].join("\n");
}
// HEAD BUILDER
// Builds and returns a heading tag that will hold all the necessary linked files in it.
function build_head(title) {
    const stylesheet_links = [
        `       <!-- Stylesheet Links -->`,
        `       <link rel="stylesheet" href="../stylesheets/fonts.css">`,
    ].join("\n");
    const scripted_event_links = [
        `       <!-- Scripted Event Links -->`,
        `       <script type="module" src="../scripts/transpiled_scripts/events/scripts.js"></script>`,
    ].join("\n");
    return [
        `   <head>`,
        ``,
        `       <meta charset="UTF-8">`,
        `       <title>${title}</title>`,
        ``,
        `${stylesheet_links}`,
        ``,
        `${scripted_event_links}`,
        ``,
        `   </head>`,
    ].join("\n");
}
// BODY DIRECTOR
// Determines which type of body needs to be built.
function body_director(title, page_type) {
    let the_full_body = "";
    switch (page_type) {
        case PAGE_TYPE_BLANK:
            the_full_body = build_body_blank();
            break;
        case PAGE_TYPE_TESTING:
            the_full_body = build_body_testing(title);
            break;
        default:
            console.log("Your input for page_type was NOT accepted.  Ensure your input is correct" +
                "and see if you have created a case for the page_type you are trying to make.");
            break;
    }
    return the_full_body;
}
// BODY BUILDER TYPE: BLANK
// Builds an empty body tag.
function build_body_blank() {
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `   </body>`,
    ].join("\n");
}
// BODY BUILDER TYPE: TESTING
// Builds a body tag with all types of content needed for testing.
function build_body_testing(title) {
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `       <!-- Title Test -->`,
        `       <h1 class="${SS.heading_title} ${SS.margin_bottom_1}">${title}</h1>`,
        ``,
        `       <!-- Block Test -->`,
        `       <div class="">`,
        `           <h2 class="${SS.heading_upper} ${SS.margin_bottom_5} ${SS.margin_top_4}"><i class="${SS.icon_general}">home</i>Block Test : Part 1</h2>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">inventory_2</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">search</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_2}"><span class="${SS.icon_general}">nest_cam_wired_stand</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        ``,
        `           <div class="">`,
        `               <h3 class="${SS.heading_middle} ${SS.margin_bottom_5} ${SS.margin_top_4}">Block Test : Part 2</h3>`,
        `               <p class="${SS.text_general} ${SS.margin_bottom_4}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `               <p class="${SS.text_general} ${SS.margin_bottom_4}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `               <p class="${SS.text_general} ${SS.margin_bottom_2}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        ``,
        `               <div class="">`,
        `                   <h4 class="${SS.heading_lower} ${SS.margin_bottom_5} ${SS.margin_top_4}">Block Test : Part 3</h4>`,
        `                   <p class="${SS.text_general} ${SS.margin_bottom_4}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                   <p class="${SS.text_general} ${SS.margin_bottom_4}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `                   <p class="${SS.text_general} ${SS.margin_bottom_2}">Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `               </div>`,
        `           </div>`,
        `       </div>`,
        ``,
        `   </body>`,
    ].join("\n");
}
export * from "./pages.js";
