
import * as FS   from "fs";
import * as PATH from "path";
import * as SM from "../style_manager.js";
import * as SD from "../style_definitions.js";

let HEAVENLY_EARTH = new SM.Style(SD.STYLE_HEAVENLY_EARTH);
const SS = HEAVENLY_EARTH.stripped_selectors;

// Types of HTML pages that can be built.  The more features you want to test, the more that must be added
// to the testing type.  Also, all of these pages share the same head.  This is to ensure that only the head
// builder needs to be manipulated when adding new stylesheets, links, or scripts.
const PAGES = {
    HOME: "HOME",
    LEARN: "LEARN",
    RESULTS: "RESULTS",
    ABOUT: "ABOUT",
} as const;

// PAGE BUILDERS
// When this file is executed these builds will generate all the types of pages.
// Doing this so that regenerating pages during development/testing is simple.
build_page(PAGES.HOME, PAGES.HOME);
build_page(PAGES.LEARN, PAGES.LEARN);
build_page(PAGES.RESULTS, PAGES.RESULTS);
build_page(PAGES.ABOUT, PAGES.ABOUT);

// Builds an HTML file that will be thrown into the pages directory.
export function build_page(file_name: string, page_type: string) {

    const name_of_file = file_name.toUpperCase().replace(/\s+/g, "_") + ".html";
    const output_path  = PATH.resolve("../../../", name_of_file);
    const html_content = build_html(file_name, page_type);

    FS.writeFileSync(output_path, html_content, "utf-8");
}

// Builds and returns HTML data containing a head and body defaulted with proper links and an h1 tag inside its
// body that holds the passed title in its contents.
function build_html(title: string, page_type: string): string {

    const head = build_head(title);
    const body = body_director(page_type);

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

// Builds and returns a heading tag that will hold all the necessary linked files in it.
function build_head(title: string): string {

    const stylesheet_links = [
        `       <!-- Stylesheet Links -->`,
        `       <link rel="stylesheet" href="source/stylesheets/fonts.css">`,
    ].join("\n");

    const scripted_event_links = [
        `       <!-- Scripted Event Links -->`,
        `       <script type="module" src="source/scripts/transpiled_scripts/events/scripts.js"></script>`,
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

// Determines which type of body needs to be built.
function body_director(page_type: string): string {

    let the_body: string = "";

    switch (page_type) {

        case PAGES.HOME:
            the_body = build_body_for_home();
            break;

        case PAGES.LEARN:
            the_body = build_body_for_learn();
            break;

        case PAGES.RESULTS:
            the_body = build_body_for_results();
            break;

        case PAGES.ABOUT:
            the_body = build_body_for_about();
            break;

        default:
            console.log("Your input for page_type was NOT accepted.  Ensure your input is correct" +
                "and see if you have created a case for the page_type you are trying to make.");
            break;
    }

    return the_body;
}


function build_body_for_home(): string {
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `${build_navigation()}`,
        ``,
        `       <div class="">`,
        `           <h2 class="${SS.heading_upper} ${SS.margin_bottom_5} ${SS.margin_top_4}">HOME PAGE CONTENTS</h2>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">inventory_2</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">search</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_2}"><span class="${SS.icon_general}">nest_cam_wired_stand</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `       </div>`,
        ``,
        `       <div class="">`,
        `           <h2 class="${SS.heading_upper} ${SS.margin_bottom_5} ${SS.margin_top_4}">HOME PAGE CONTENTS</h2>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">inventory_2</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">search</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_2}"><span class="${SS.icon_general}">nest_cam_wired_stand</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `       </div>`,
        ``,
        `       <div class="">`,
        `           <h2 class="${SS.heading_upper} ${SS.margin_bottom_5} ${SS.margin_top_4}">HOME PAGE CONTENTS</h2>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">inventory_2</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_4}"><span class="${SS.icon_general}">search</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `           <p class="${SS.text_general} ${SS.margin_bottom_2}"><span class="${SS.icon_general}">nest_cam_wired_stand</span>Lorem ipsum dolor sit amet, eiusmod laborum consectetur et sed in ea duis laboris culpa do culpa dolor laborum exercitation aute et ipsum velit culpa aute sunt nisi eu eu dolore occaecat reprehenderit voluptate elit ut dolore nulla do adipiscing amet labore eu non reprehenderit dolor commodo qui amet mollit culpa nisi incididunt laboris aliqua</p>`,
        `       </div>`,
        ``,
        `${build_footer()}`,
        ``,
        `   </body>`,
    ].join("\n");
}

function build_body_for_learn(): string {
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `${build_navigation()}`,
        ``,
        ``,
        ``,
        `${build_footer()}`,
        ``,
        `   </body>`,
    ].join("\n");
}

function build_body_for_results(): string {
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `${build_navigation()}`,
        ``,
        ``,
        ``,
        `${build_footer()}`,
        ``,
        `   </body>`,
    ].join("\n");
}


function build_body_for_about(): string {
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `${build_navigation()}`,
        ``,
        `       <div id="${SS.about_description_outer_panel}" class="${SS.form_static_column_center}">`,
        ``,
        `           <h1 id="${SS.about_description_title}">About the Project</h1>`,
        `           <p id="${SS.about_description_subtitle}">Building a more sustainable future for quilting.</p>`,
        ``,
        `           <div id="${SS.about_description_inner_panel}">`,
        ``,
        `               <h2 class="${SS.about_description_inner_title}">Project Overview</h2>`,
        `               <p class="${SS.about_description_inner_text}">Lorem ipsum dolor sit amet, et id sint occaecat culpa amet cupidatat dolore aliquip exercitation tempor minim elit veniam excepteur laboris id cupidatat minim dolore anim non excepteur ipsum amet amet proident laboris consectetur elit do esse in velit incididunt ullamco aliqua veniam ullamco eu adipiscing pariatur amet excepteur adipiscing laborum eiusmod anim veniam esse deserunt est nostrud sit velit non consectetur nisi esse occaecat aute labore quis elit in occaecat culpa sunt elit adipiscing adipiscing pariatur ut irure incididunt mollit qui irure nulla do excepteur proident proident eu sunt duis incididunt ea sint et excepteur cillum ut nostrud ut irure occaecat excepteur duis ut eu ullamco aliquip adipiscing occaecat duis do esse occaecat dolor et velit laboris magna ad minim labore est </p>`,
        ``,
        `               <h2 class="${SS.about_description_inner_title}">Another Header</h2>`,
        `               <p class="${SS.about_description_inner_text}">Lorem ipsum dolor sit amet, et id sint occaecat culpa amet cupidatat dolore aliquip exercitation tempor minim elit veniam excepteur laboris id cupidatat minim dolore anim non excepteur ipsum amet amet proident laboris consectetur elit do esse in velit incididunt ullamco aliqua veniam ullamco eu adipiscing pariatur amet excepteur adipiscing laborum eiusmod anim veniam esse deserunt est nostrud sit velit non consectetur nisi esse occaecat aute labore quis elit in occaecat culpa sunt elit adipiscing adipiscing pariatur ut irure incididunt mollit qui irure nulla do excepteur proident proident eu sunt duis incididunt ea sint et excepteur cillum ut nostrud ut irure occaecat excepteur duis ut eu ullamco aliquip adipiscing occaecat duis do esse occaecat dolor et velit laboris magna ad minim labore est pariatur nostrud culpa deserunt laborum velit nulla aliqua ea in est in exercitation elit exercitation excepteur dolor dolore quis sit do laboris ea non velit laborum nulla tempor duis consectetur aliquip irure labore enim tempor sed aliquip incididunt veniam aute</p>`,
        ``,
        `           </div>`,
        ``,
        `               <p id="${SS.about_people_title}">Meet the Team</p>`,
        ``,
        `       </div>`,
        ``,
        `${build_person_for_about("assets/images/person_pokorny.png", "Dr. Pokorny", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident")}`,
        ``,
        `${build_person_for_about("assets/images/person_aurora.png", "Aurora O'Neill", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident")}`,
        ``,
        `${build_person_for_about("assets/images/images/person_james.png", "James Bryant", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident")}`,
        ``,
        `${build_person_for_about("assets/images/images/person_kira.png", "Kira Ash Stephenson", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident")}`,
        ``,
        `${build_person_for_about("assets/images/images/person_rudy.png", "Rudy David Torrijos IV", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident")}`,
        ``,
        `${build_person_for_about("assets/images/images/person_vance.png", "Vance Hernandez", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident")}`,
        ``,
        `${build_footer()}`,
        ``,
        `   </body>`,
    ].join("\n");
}


function build_navigation(): string {
    return [
        `       <!-- Navigation -->`,
        `       <nav id="${SS.navigation_panel}">`,
        ``,
        `           <div id="${SS.navigation_title_panel}">`,
        `               <img id="${SS.navigation_logo}" src="assets/images/logo_for_navigation.png" alt="logo">`,
        `               <div>`,
        `                   <p id="${SS.navigation_title}">HEMP & QUILTING</p>`,
        `                   <p id="${SS.navigation_subtitle}">Community Project</p>`,
        `               </div>`,
        `           </div>`,

        `           <div id="${SS.navigation_link_panel}">`,
        `               <a class="${SS.navigation_link}" href=${PAGES.HOME}.html>${PAGES.HOME}</a>`,
        `               <a class="${SS.navigation_link}" href=${PAGES.LEARN}.html>${PAGES.LEARN}</a>`,
        `               <a class="${SS.navigation_link}" href=${PAGES.RESULTS}.html>${PAGES.RESULTS}</a>`,
        `               <a class="${SS.navigation_link}" href=${PAGES.ABOUT}.html>${PAGES.ABOUT}</a>`,
        `           </div>`,
        ``,
        `       </nav>`,
    ].join("\n");
}


function build_footer(): string {
    return [
        `       <div id="${SS.footer_panel}">`,
        ``,
        `           <div id="${SS.footer_title_panel}">`,
        `               <img id="${SS.footer_logo}" src="assets/images/logo_for_footer.png" alt="logo">`,
        `               <span id="${SS.footer_title}">Together, we can weave a more sustainable future.</span>`,
        `           </div>`,
        ``,
        `           <div id="${SS.footer_social_panel}">`,
        `               <a class="${SS.footer_link}" href="">Sources</a>`,
        `               <span class="${SS.footer_icon_panel}" href="">`,
        `                    <a class="${SS.footer_social_icon}" href="">`,
        `                       <i class="${SS.icon_general}">mail</i>`,
        `                    </a>`,
        `               </span>`,
        `           </div>`,
        ``,
        `       </div>`,
    ].join("\n");
}

function build_person_for_about(image_path: string, full_name: string, title: string, description: string): string {
    return [
        `       <div class="${SS.about_person_panel}">`,
        `           <img class="${SS.about_person_image}" src="${image_path}" alt="Image of ${full_name}"/>`,
        `           <h3 class="${SS.about_person_name}">${full_name}</h3>`,
        `           <h4 class="${SS.about_person_title}">${title}</h4>`,
        `           <p class="${SS.about_person_description}">${description}</p>`,
        `       </div>`,
    ].join("\n");
}

export * from "./pages.js";
