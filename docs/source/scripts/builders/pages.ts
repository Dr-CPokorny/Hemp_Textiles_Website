
import * as FS   from "fs";
import * as PATH from "path";
import * as SM from "../style_manager.js";
import * as SD from "../style_definitions.js";

let HEAVENLY_EARTH = new SM.Style(SD.STYLE_HEAVENLY_EARTH);
const SS = HEAVENLY_EARTH.stripped_selectors;

// Types of HTML pages that can be built.  All of these pages share the same head.  This is to ensure that only the head
// builder needs to be manipulated when adding new stylesheets, links, or scripts.
const PAGES = {
    HOME: "HOME",
    LEARN: "LEARN",
    SOURCES: "SOURCES",
    ABOUT: "ABOUT",
} as const;

// PAGE BUILDERS
// When this file is executed these builds will generate all the types of pages.
// Doing this so that regenerating pages during development/testing is simple.
build_page(PAGES.HOME, PAGES.HOME);
build_page(PAGES.LEARN, PAGES.LEARN);
build_page(PAGES.SOURCES, PAGES.SOURCES);
build_page(PAGES.ABOUT, PAGES.ABOUT);

// Builds an HTML file that will be thrown into the docs directory.
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
function body_director(page_type: string): string {

    let the_body: string = "";

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
function build_body_for_home(): string {
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `${build_navigation()}`,
        ``,
        `       <!-- Top Section -->`,
        `       <div id="${SS.home_top_panel}" class="${SS.form_static_column_center}">`,
        ``,
        `           <h1 id="${SS.home_top_heading}">Help Shape the Future of Hemp in Quilting</h1>`,
        `           <p id="${SS.home_top_text}">Share your experience or curiosity about hemp fabrics.<br>Your input informs sustainable textile innovation.</p>`,
        `           <div class="${SS.form_static_row_center}">`,
        `               <a id="${SS.home_top_button_survey}" href="">TAKE THE SURVEY</a>`,
        `               <a id="${SS.home_top_button_learn}" href="LEARN.html">LEARN ABOUT HEMP</a>`,
        `           </div>`,
        ``,
        `      </div>`,
        ``,
        `       <!-- Notice Blurbs -->`,
        `       <div id="${SS.home_notice_panel}" class="${SS.form_static_row_center}">`,
        ``,
        `           <div class="${SS.home_notice_inner_panel} ${SS.form_static_column_center}">`,
        `               <span class="${SS.home_notice_inner_icon}">eco</span>`,
        `               <div class="${SS.form_static_column_center}">`,
        `                   <p class="${SS.home_notice_inner_title}">Research-backed</p>`,
        `                   <p class="${SS.home_notice_inner_text}">This project is grounded in real data and research.</p>`,
        `               </div>`,
        `           </div>`,
        ``,
        `           <div class="${SS.home_notice_inner_panel} ${SS.form_static_column_center}">`,
        `               <span class="${SS.home_notice_inner_icon}">schedule</span>`,
        `               <div class="${SS.form_static_column_center}">`,
        `                   <p class="${SS.home_notice_inner_title}">Short Survey</p>`,
        `                   <p class="${SS.home_notice_inner_text}">Quick, easy, and your responses are valued.</p>`,
        `               </div>`,
        `           </div>`,
        ``,
        `           <div class="${SS.home_notice_inner_panel} ${SS.form_static_column_center}">`,
        `               <span class="${SS.home_notice_inner_icon}">lock</span>`,
        `               <div class="${SS.form_static_column_center}">`,
        `                   <p class="${SS.home_notice_inner_title}">Anonymous</p>`,
        `                   <p class="${SS.home_notice_inner_text}">Your responses are completely anonymous.</p>`,
        `               </div>`,
        `           </div>`,
        ``,
        `       </div>`,
        ``,
        `       <!-- Why Your Voice Matters -->`,
        `       <div id="${SS.home_why_panel}" class="${SS.form_static_column_center}">`,
        ``,
        `           <h2 id="${SS.home_why_heading}">Why your voice matters</h2>`,
        `           <p id="${SS.home_why_text}">Hemp is a durable, sustainable textile with so much potential.<br>But we need your input to guide the future of hemp in quilting.</p>`,
        ``,
        `           <div id="${SS.home_why_divider_row}" class="${SS.form_static_row_center}">`,
        `               <div class="${SS.home_why_divider_line}"></div>`,
        `               <span id="${SS.home_why_divider_icon}">spa</span>`,
        `               <div class="${SS.home_why_divider_line}"></div>`,
        `           </div>`,
        ``,
        `           <div class="${SS.form_static_row_start}">`,
        ``,
        `               <div class="${SS.home_why_card_panel} ${SS.form_static_column_center}">`,
        `                   <img class="${SS.home_why_card_image}" src="assets/images/person_james.png" alt="Hemp plant growing in a field">`,
        `                   <h3 class="${SS.home_why_card_title}">Sustainable</h3>`,
        `                   <p class="${SS.home_why_card_text}">Hemp is a low-impact crop that supports a healthier planet.</p>`,
        `               </div>`,
        ``,
        `               <div class="${SS.home_why_card_panel} ${SS.form_static_column_center}">`,
        `                   <img class="${SS.home_why_card_image}" src="assets/images/person_james.png" alt="Close-up of soft hemp textile fabric">`,
        `                   <h3 class="${SS.home_why_card_title}">Durable &amp; Beautiful</h3>`,
        `                   <p class="${SS.home_why_card_text}">Strong fibers, soft textures, made to last in every stitch.</p>`,
        `               </div>`,
        ``,
        `               <div class="${SS.home_why_card_panel} ${SS.form_static_column_center}">`,
        `                   <img class="${SS.home_why_card_image}" src="assets/images/person_james.png" alt="Finished quilt made with hemp fabric">`,
        `                   <h3 class="${SS.home_why_card_title}">Made for Makers</h3>`,
        `                   <p class="${SS.home_why_card_text}">Quilters like you are leading the way to a greener future.</p>`,
        `               </div>`,
        ``,
        `           </div>`,
        ``,
        `       </div>`,
        ``,
        `${build_footer()}`,
        ``,
        `   </body>`,
    ].join("\n");
}

// Builds the body for the LEARN page.
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

// Builds the body for the SOURCES page.
function build_body_for_sources(): string {
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
        `               <p class="${SS.about_description_inner_text}">The U.S. quilting industry is a multi-billion-dollar market, generating $4.5B in annual revenue in 2025 and supported by 9–11 million active quilters, making it one of the most robust craft sectors in the country. At the same time, consumer trends show a growing shift toward textured woven and linen fabrics that add depth, natural beauty, and tactility to quilts. Despite this appetite for natural, textured materials, quilting textiles remain cotton-dominant. While cotton is a natural fiber, its high water and pesticide use, along with historical labor issues, present a persistent sustainability challenge for the industry.</p>`,
        `               <p class="${SS.about_description_inner_text}">Hemp textiles can meet quiltmaking’s demand for natural, tactile materials while reducing environmental impact (lower water use, no pesticides, durable, breathable, biodegradable). Yet adoption lags due to misconceptions about texture/softness and associations with marijuana, plus limited retail presence. Meanwhile, the U.S. hemp fiber market is expanding. It is projected to grow from $120.4M (2024) to $360.2M (2033), signaling market pull for sustainable cotton alternatives and a timely opportunity for application in quiltmaking. Quiltmaking is an ideal medium for changing perceptions because it is a deeply tactile, material-driven craft where makers handle, test, and compare materials through hands-on making.</p>`,
        `               <p class="${SS.about_description_inner_text}">It is our belief that the information provided on this site, its potential to spread, and the data collection of what people think of hemp through our survey will open the way for discovering how to make a more sustainable future within quiltmaking.  We don’t want to just show what we can find online or through the standard research papers that we’ll be sifting through, rather we want to exemplify the voices of the community in our work.  Peoples’ reaction to this website, alongside the responses we discover in the provided survey that's linked in the Home Page, acts as the first step toward showing that voice on the matter.  Only together, can we weave a more sustainable future.</p>`,
        ``,
        `           </div>`,
        ``,
        `           <p id="${SS.about_people_title}">Meet the Team</p>`,
        `           <div id="${SS.about_divider_row}" class="${SS.form_static_row_center}">`,
        `               <div class="${SS.about_divider_line}"></div>`,
        `               <span id="${SS.about_divider_icon}">spa</span>`,
        `               <div class="${SS.about_divider_line}"></div>`,
        `           </div>`,
        ``,
        `       </div>`,
        ``,
        `${build_person_for_about(
            "assets/images/person_pokorny.svg", 
            "Dr. Colleen Gelhaus Pokorny", 
            "Project Lead", 
            "Dr. Pokorny is an Assistant Professor of Apparel Design at Oregon State University and a lifelong quilter. She is a member of the Textile & Apparel Innovation Research Consortia with the Global Hemp Innovation Center. Her creative scholarship uses quiltmaking to explore material‑driven sustainability and how hands‑on engagement with hemp textiles can shift design practices and perceptions. Dr. Pokorny’s work has received international recognition, including the Sandra Hutton Award for Excellence in Fiber Arts at the 2025 ITAA Design Exhibition. Her work has been shown at the National Quilt Museum, QuiltCon, and the American Quilt Study Group’s traveling exhibition, Quiltmakers and Designers: 1945–1979.",
            "mailto:colleen.pokorny@oregonstate.edu",
            "EMAIL",
            "https://business.oregonstate.edu/faculty-and-research/faculty-directory/colleen-gelhaus-pokorny",
            "BUSINESS BIOGRAPHY",
            "https://www.linkedin.com/in/colleenpokorny/",
            "LINKEDIN"
        )}`,
        ``,
        `${build_person_for_about(
            "assets/images/person_aurora.png", 
            "Aurora O'Neill", 
            "Insert Title Here", 
            "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident",
        )}`,
        ``,
        `${build_person_for_about(
            "assets/images/person_james.png", 
            "James Bryant", 
            "Insert Title Here", 
            "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident",
        )}`,
        ``,
        `${build_person_for_about(
            "assets/images/person_kira.svg", 
            "Kira Ash Stephenson", 
            "Website Developer", 
            "Once a student of Polk State College (FL), St. Petersburg College (FL), and Lane Community College (OR) in an endeavor to learn more about programming in order to fulfill his dreams of developing video games.  Now, Kira is a student at Oregon State University where they are learning more about software engineering; on the side they are developing larger projects inside a Business GitHub account called \"Mirth Development\".  He is the engineer/developer of this site - it's really weird to talk in third person for this - and the tools used to construct the pages before you were TypeScript, GitHub Pages, WebStorm, and a custom tool that Kira made for ease of styling.",
            "https://github.com/Tenlion?tab=repositories",
            "GITHUB",
            "https://github.com/orgs/Mirth-Development/repositories",
            "MIRTH DEVELOPMENT",
            "https://www.linkedin.com/in/kira-stephenson-9210b820b",
            "LINKEDIN"
        )}`,
        ``,
        `${build_person_for_about(
            "assets/images/person_rudy.png", 
            "Rudy David Torrijos IV", 
            "Insert Title Here", 
            "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident",
        )}`,
        ``,
        `${build_person_for_about(
            "assets/images/person_vance.svg", 
            "Vance Hernandez", 
            "Student", 
            "Vance Hernandez is a Mechanical Engineering student at Oregon State University and a 10-year U.S. Navy veteran. His background includes experience in engineering, technical problem solving, and hands-on project work, with interests in sustainability and practical design applications.",
        )}`,
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
        `               <a class="${SS.navigation_link}" href=${PAGES.SOURCES}.html>${PAGES.SOURCES}</a>`,
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
        `               <a class="${SS.footer_link}" href="https://www.globalhemp.com/">Global Hemp</a>`,
        `               <a class="${SS.footer_link}" href="https://www.themodernquiltguild.com/home">Modern Quilt Guild</a>`,
        `               <a class="${SS.footer_link}" href="https://agsci.oregonstate.edu/hemp">Hemp Innovation Center</a>`,
        `               <span class="${SS.footer_icon_panel}">`,
        `                    <a class="${SS.footer_social_icon}" href="mailto:colleen.pokorny@oregonstate.edu">`,
        `                       <i class="${SS.icon_general}">mail</i>`,
        `                    </a>`,
        `               </span>`,
        `           </div>`,
        ``,
        `       </div>`,
    ].join("\n");
}

function build_person_for_about(
    image_path: string,
    full_name: string,
    title: string,
    description: string,
    link1?: string,
    link1_display?: string,
    link2?: string,
    link2_display?: string,
    link3?: string,
    link3_display?: string,
): string {

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
