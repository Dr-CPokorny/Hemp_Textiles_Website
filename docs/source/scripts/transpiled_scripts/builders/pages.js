import * as FS from "fs";
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
    SOURCES: "SOURCES",
    ABOUT: "ABOUT",
};
// PAGE BUILDERS
// When this file is executed these builds will generate all the types of pages.
// Doing this so that regenerating pages during development/testing is simple.
build_page(PAGES.HOME, PAGES.HOME);
build_page(PAGES.LEARN, PAGES.LEARN);
build_page(PAGES.SOURCES, PAGES.SOURCES);
build_page(PAGES.ABOUT, PAGES.ABOUT);
// Builds an HTML file that will be thrown into the pages directory.
export function build_page(file_name, page_type) {
    const name_of_file = file_name.toUpperCase().replace(/\s+/g, "_") + ".html";
    const output_path = PATH.resolve("../../../", name_of_file);
    const html_content = build_html(file_name, page_type);
    FS.writeFileSync(output_path, html_content, "utf-8");
}
// Builds and returns HTML data containing a head and body defaulted with proper links and an h1 tag inside its
// body that holds the passed title in its contents.
function build_html(title, page_type) {
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
function build_head(title) {
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
        `       <meta name="viewport" content="width=device-width, initial-scale=1.0">`,
        `       <title>${title}</title>`,
        ``,
        `${stylesheet_links}`,
        ``,
        `${scripted_event_links}`,
        ``,
        `   </head>`,
    ].join("\n");
}
// Determines which type of body gets built.
function body_director(page_type) {
    let the_body = "";
    switch (page_type) {
        case PAGES.HOME:
            the_body = build_body_for_home();
            break;
        case PAGES.LEARN:
            the_body = build_body_for_learn();
            break;
        case PAGES.SOURCES:
            the_body = build_body_for_sources();
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
// Builds the body for the HOME page.
function build_body_for_home() {
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
// Builds the body for the LEARN page.
function build_body_for_learn() {
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
// Builds the body for the SOURCES page.
function build_body_for_sources() {
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
// Builds the body for the ABOUT page.
function build_body_for_about() {
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
        `${build_person_for_about("assets/images/person_pokorny.svg", "Dr. Colleen Gelhaus Pokorny", "Project Lead", "Dr. Pokorny is an Assistant Professor of Apparel Design at Oregon State University and a lifelong quilter. She is a member of the Textile & Apparel Innovation Research Consortia with the Global Hemp Innovation Center. Her creative scholarship uses quiltmaking to explore material‑driven sustainability and how hands‑on engagement with hemp textiles can shift design practices and perceptions. Dr. Pokorny’s work has received international recognition, including the Sandra Hutton Award for Excellence in Fiber Arts at the 2025 ITAA Design Exhibition. Her work has been shown at the National Quilt Museum, QuiltCon, and the American Quilt Study Group’s traveling exhibition, Quiltmakers and Designers: 1945–1979.", "mailto:colleen.pokorny@oregonstate.edu", "EMAIL", "https://business.oregonstate.edu/faculty-and-research/faculty-directory/colleen-gelhaus-pokorny", "BUSINESS BIOGRAPHY", "https://www.linkedin.com/in/colleenpokorny/", "LINKEDIN")}`,
        ``,
        `${build_person_for_about("assets/images/person_aurora.png", "Aurora O'Neill", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident")}`,
        ``,
        `${build_person_for_about("assets/images/person_james.png", "James Bryant", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident")}`,
        ``,
        `${build_person_for_about("assets/images/person_kira.svg", "Kira Ash Stephenson", "Website Developer", "Once a student of Polk State College (FL), St. Petersburg College (FL), and Lane Community College (OR) in an endeavor to learn more about programming in order to fulfill his dreams of developing video games.  Now, Kira is a student at Oregon State University where they are learning more about software engineering; on the side they are developing larger projects inside a Business GitHub account called \"Mirth Development\".  He is the engineer/developer of this site - it's really weird to talk in third person for this - and the tools used to construct the pages before you were TypeScript, GitHub Pages, WebStorm, and a custom tool that Kira made for ease of styling.", "https://github.com/Tenlion?tab=repositories", "GITHUB", "https://github.com/orgs/Mirth-Development/repositories", "MIRTH DEVELOPMENT", "https://www.linkedin.com/in/kira-stephenson-9210b820b", "LINKEDIN")}`,
        ``,
        `${build_person_for_about("assets/images/person_rudy.png", "Rudy David Torrijos IV", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident")}`,
        ``,
        `${build_person_for_about("assets/images/person_vance.svg", "Vance Hernandez", "Student", "Vance Hernandez is a Mechanical Engineering student at Oregon State University and a 10-year U.S. Navy veteran. His background includes experience in engineering, technical problem solving, and hands-on project work, with interests in sustainability and practical design applications.")}`,
        ``,
        `${build_footer()}`,
        ``,
        `   </body>`,
    ].join("\n");
}
function build_navigation() {
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
        `               <a class="${SS.navigation_link}" href=${PAGES.SOURCES}.html>${PAGES.SOURCES}</a>`,
        `               <a class="${SS.navigation_link}" href=${PAGES.ABOUT}.html>${PAGES.ABOUT}</a>`,
        `           </div>`,
        ``,
        `       </nav>`,
    ].join("\n");
}
function build_footer() {
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
function build_person_for_about(image_path, full_name, title, description, link1, link1_display, link2, link2_display, link3, link3_display) {
    let constructed_person = [
        `       <div class="${SS.about_person_panel}">`,
        `           <img class="${SS.about_person_image}" src="${image_path}" alt="Image of ${full_name}"/>`,
        `           <h3 class="${SS.about_person_name}">${full_name}</h3>`,
        `           <h4 class="${SS.about_person_title}">${title}</h4>`,
        `           <p class="${SS.about_person_description}">${description}</p>`,
    ].join("\n");
    // Checking if links exist.
    // If so, add a row for the link tags and proceed with adding each link individually if they exist.
    // If not, do nothing.
    if (link1 !== undefined || link2 !== undefined || link3 !== undefined) {
        constructed_person += `\n           <div class="${SS.form_static_row_center}">`;
        if (link1 !== undefined) {
            constructed_person += `\n               <a class="${SS.about_person_link}" href="${link1}">${link1_display}</a>`;
        }
        if (link2 !== undefined) {
            constructed_person += `\n               <a class="${SS.about_person_link}" href="${link2}">${link2_display}</a>`;
        }
        if (link3 !== undefined) {
            constructed_person += `\n               <a class="${SS.about_person_link}" href="${link3}">${link3_display}</a>`;
        }
        constructed_person += `\n           </div>`;
    }
    // Tacking on the ending div statement now that links (assuming they exist) have been added.
    constructed_person += `\n       </div>`;
    return constructed_person;
}
export * from "./pages.js";
