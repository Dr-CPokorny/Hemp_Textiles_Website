import * as FS from "fs";
import * as PATH from "path";
import * as SM from "./style_manager.js";
import * as SD from "./style_definitions.js";
let HEAVENLY_EARTH = new SM.Style(SD.STYLE_HEAVENLY_EARTH);
const SS = HEAVENLY_EARTH.stripped_selectors;
// List of HTML pages that is to be built.  All of these pages share the same head.  This is to ensure that only the head
// builder needs to be manipulated when adding new stylesheets, links, or scripts.
//
// Each page must have its own body_builder function if errors are to be avoided.  Each value for every page must be
// lowercase for GitHub Pages to recognize the files.
const PAGES = {
    HOME: "index",
    LEARN: "learn",
    SOURCES: "sources",
    ABOUT: "about",
};
// BUILDING PAGES
// When this file is executed these builds will generate all the fields inside PAGES as html files.
// Doing this so that regenerating pages during development/testing is simple.
for (const page of Object.values(PAGES)) {
    build_page(page, page);
}
// Builds an HTML file that will be thrown into the docs directory.
function build_page(file_name, page_name) {
    const name_of_file = file_name.toLowerCase().replace(/\s+/g, "_") + ".html";
    const output_path = PATH.resolve("../../", name_of_file);
    const html_content = build_html(file_name, page_name);
    FS.writeFileSync(output_path, html_content, "utf-8");
}
// Builds and returns HTML data containing a head and body defaulted with proper links and an h1 tag inside its
// body that holds the passed title in its contents.
function build_html(title, page_name) {
    const head = build_head(title);
    const body = body_director(page_name);
    return [
        ``,
        `<!DOCTYPE html>`,
        `<html lang="en">`,
        ``,
        `${head}`,
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
        `       <script type="module" src="source/scripts/transpiled_scripts/events.js"></script>`,
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
function body_director(page_name) {
    let the_body = "";
    switch (page_name) {
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
            console.log("Your input for page_name was NOT accepted.  Ensure your input is correct" +
                "and see if you have created a case for the page you are trying to make.");
            break;
    }
    return the_body;
}
// Builds the body for the HOME page.
function build_body_for_home() {
    // Top Information
    const TOP_INFO = build_top("\t\t", "Help Shape the Future of Hemp in Quilting", "Share your experience or curiosity about hemp fabrics.<br>Your input informs sustainable textile innovation.");
    // Notice Blurb Information
    const BLURB_RESEARCH = build_notice_blurb_for_home_page("\t\t\t", "data_table", "Data Driven", "This project is grounded in real data and research.");
    const BLURB_SURVEY = build_notice_blurb_for_home_page("\t\t\t", "schedule", "Short Survey", "Quick, easy, and your responses are valued.");
    const BLURB_ANONYMOUS = build_notice_blurb_for_home_page("\t\t\t", "lock", "Anonymous", "Your responses are completely anonymous.");
    // Why Card Information
    const CARD_SUSTAINABLE = build_card_for_home_page("\t\t\t\t", "assets/images/home_4.svg", "Finished patterned quilt made with hemp fabric.", "Sustainable", "Hemp is a low-impact crop that supports a healthier planet.");
    const CARD_DURABLE = build_card_for_home_page("\t\t\t\t", "assets/images/home_3.svg", "Finished white quilt made with hemp fabric.", "Durable & Beautiful", "Strong fibers, soft textures, made to last in every stitch.");
    const CARD_MAKERS = build_card_for_home_page("\t\t\t\t", "assets/images/home_2.svg", "Finished blue quilt made with hemp fabric.", "Made for Makers", "Quilters like you are leading the way to a greener future.");
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `       ${build_navigation("\t\t")}`,
        ``,
        `       ${TOP_INFO}`,
        ``,
        `       <!-- Survey and Learn Buttons -->`,
        `       <div id="${SS.home_button_panel}" class="${SS.form_static_row_center}">`,
        `           <a id="${SS.home_button_survey}" href="">TAKE THE SURVEY</a>`,
        `           <a id="${SS.home_button_learn}" href="learn.html">LEARN ABOUT HEMP</a>`,
        `       </div>`,
        ``,
        `       <!-- Notice Blurbs -->`,
        `       <div id="${SS.home_notice_panel}" class="${SS.form_static_row_center}">`,
        `           ${BLURB_RESEARCH}`,
        `           ${BLURB_SURVEY}`,
        `           ${BLURB_ANONYMOUS}`,
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
        `               <span id="${SS.home_why_divider_icon}" class="${SS.icon_general}">spa</span>`,
        `               <div class="${SS.home_why_divider_line}"></div>`,
        `           </div>`,
        ``,
        `           <!-- Why Cards -->`,
        `           <div class="${SS.form_static_row_start}">`,
        `               ${CARD_SUSTAINABLE}`,
        `               ${CARD_DURABLE}`,
        `               ${CARD_MAKERS}`,
        `           </div>`,
        ``,
        `       </div>`,
        ``,
        `       ${build_footer("\t\t")}`,
        ``,
        `   </body>`,
    ].join("\n");
}
// Builds the body for the LEARN page.
function build_body_for_learn() {
    // Top Information
    const TOP_INFO = build_top("\t\t", "Getting To Know Hemp", "Hemp has a long history as a natural fiber, but certain myths have kept it out of textile markets. Here's what the research actually says.");
    // Hemp and Marijuana Comparison Information
    const HEMP_THC = build_left_row_for_comparison_chart_for_learn_page("\t\t\t\t", "arrow_cool_down", "Low THC (<0.3%)");
    const HEMP_USE = build_left_row_for_comparison_chart_for_learn_page("\t\t\t\t", "apparel", "Used for textiles + apparel");
    const HEMP_PSYCHO = build_left_row_for_comparison_chart_for_learn_page("\t\t\t\t", "face", "Non-psychoactive");
    const MARIJUANA_THC = build_right_row_for_comparison_chart_for_learn_page("\t\t\t\t", "arrow_warm_up", "High THC (>5%)");
    const MARIJUANA_USE = build_right_row_for_comparison_chart_for_learn_page("\t\t\t\t", "medical_services", "Used casually + medically");
    const MARIJUANA_PSYCHO = build_right_row_for_comparison_chart_for_learn_page("\t\t\t\t", "cognition", "Psychoactive");
    // Why Card Information
    const WHY_CARD_DURABLE = build_why_card_for_learn_page("\t\t\t\t", "assets/images/learn_8.svg", "Text", "Durable and Long-Lasting", "Hemp fibers are known for their strength and long-lasting quality.");
    const WHY_CARD_BREATHABLE = build_why_card_for_learn_page("\t\t\t\t", "assets/images/learn_6.svg", "Text", "Breathable and Lightweight", "Hemp fabric is breathable and gets softer with every wash and use; there is a limit to how soft it can get.");
    const WHY_CARD_TEXTURED = build_why_card_for_learn_page("\t\t\t\t", "assets/images/learn_7.svg", "Text", "Naturally Textured and Tactile", "Its natural texture adds depth and character to quilts and textile work.");
    const WHY_CARD_BIODEGRADABLE = build_why_card_for_learn_page("\t\t\t\t", "assets/images/learn_5.svg", "Text", "Biodegradable and Lower-Impact", "Hemp requires less water and fewer pesticides than cotton.");
    // Misconception Card Information
    const MISCONCEPTION_CARD_COMPARISON = build_misconception_card_for_learn_page("\t\t\t", '"Hemp is the same as marijuana."', "While hemp and marijuana come from the same plant species, they are grown and used very differently. Textile hemp contains very low THC levels and is used for industrial applications like fabric, rope, and paper.");
    const MISCONCEPTION_CARD_ROUGH = build_misconception_card_for_learn_page("\t\t\t", '"Hemp fabric is rough."', "Modern hemp textiles can range from structured and textured to soft and breathable depending on the weave and blend. Many hemp fabrics become softer over time with washing and regular use.");
    const MISCONCEPTION_CARD_QUILTING = build_misconception_card_for_learn_page("\t\t\t", '"Hemp isn\'t practical for quilting."', "Part of this project explores exactly that question. By gathering feedback from quilters and testing material experiences, the project aims to better understand hemp's usability, comfort, and creative potential within quiltmaking.");
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `       ${build_navigation("\t\t")}`,
        ``,
        `       ${TOP_INFO}`,
        ``,
        `       <!-- What is Hemp, Really? -->`,
        `       <div id="${SS.learn_what_is_hemp_panel}" class="${SS.form_static_column_center}">`,
        `           <h2 id="${SS.learn_what_is_hemp_heading}">What is Hemp, Really?</h2>`,
        `           <p class="${SS.learn_what_is_hemp_text}">Hemp is a natural fiber that comes from the Cannabis sativa plant, but unlike marijuana, hemp contains extremely low levels of THC (the psychoactive compound associated with getting “high”). Hemp used for textiles is non-psychoactive, legally grown in many parts of the world, and has been used historically for products like rope, paper, clothing, and fabric.</p>`,
        `           <p class="${SS.learn_what_is_hemp_text}">Today, hemp is gaining attention as a more sustainable textile alternative because it requires less water, fewer pesticides, and produces durable, breathable fibers that soften over time with use. Despite these benefits, hemp fabrics are still often misunderstood due to long-standing associations with marijuana and limited exposure within mainstream textile markets.</p>`,
        `       </div>`,
        ``,
        `       <!-- Why Hemp for Quilting -->`,
        `       <div id="${SS.learn_why_panel}" class="${SS.form_static_column_center}">`,
        `           <h2 id="${SS.learn_why_heading}">Why Hemp for Quilting?</h2>`,
        `           <p id="${SS.learn_why_text}">Quilting is a deeply tactile craft where makers interact directly with materials through cutting, sewing, layering, and touch. This hands-on experience creates a unique opportunity to evaluate hemp textiles based on real performance rather than assumptions.</p>`,
        `           <div id="${SS.learn_why_cards_panel}">`,
        `               ${WHY_CARD_DURABLE}`,
        `               ${WHY_CARD_BREATHABLE}`,
        `               ${WHY_CARD_TEXTURED}`,
        `               ${WHY_CARD_BIODEGRADABLE}`,
        `           </div>`,
        `       </div>`,
        ``,
        `       <!-- Common Misconceptions -->`,
        `       <div id="${SS.learn_misconception_panel}" class="${SS.form_static_column_center}">`,
        `           <h2 id="${SS.learn_misconception_heading}">Common Misconceptions</h2>`,
        `           ${MISCONCEPTION_CARD_COMPARISON}`,
        `           ${MISCONCEPTION_CARD_ROUGH}`,
        `           ${MISCONCEPTION_CARD_QUILTING}`,
        `       </div>`,
        ``,
        `       <!-- Hemp vs Marijuana Comparison -->`,
        `       <div id="${SS.learn_compare_panel}" class="${SS.form_static_row_center}">`,
        ``,
        `           <!-- Hemp Column -->`,
        `           <div class="${SS.form_static_column_start}">`,
        `               <h2 class="${SS.learn_compare_column_heading_left}">HEMP</h2>`,
        `               ${HEMP_THC}`,
        `               ${HEMP_USE}`,
        `               ${HEMP_PSYCHO}`,
        `           </div>`,
        ``,
        `           <!-- Leaf Image -->`,
        `           <div id="${SS.learn_compare_leaf_panel}" class="${SS.form_static_column_center}">`,
        `               <img id="${SS.learn_compare_leaf_image}" src="assets/images/cannabis_leaf.svg" alt="Cannabis leaf">`,
        `           </div>`,
        ``,
        `           <!-- Marijuana Column -->`,
        `           <div class="${SS.form_static_column_end}">`,
        `               <h2 class="${SS.learn_compare_column_heading_right}">MARIJUANA</h2>`,
        `               ${MARIJUANA_THC}`,
        `               ${MARIJUANA_USE}`,
        `               ${MARIJUANA_PSYCHO}`,
        `           </div>`,
        ``,
        `       </div>`,
        ``,
        `       ${build_footer("\t\t")}`,
        ``,
        `   </body>`,
    ].join("\n");
}
// Builds the body for the SOURCES page.
function build_body_for_sources() {
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `       ${build_navigation("\t\t")}`,
        ``,
        ``,
        ``,
        `       ${build_footer("\t\t")}`,
        ``,
        `   </body>`,
    ].join("\n");
}
// Builds the body for the ABOUT page.
function build_body_for_about() {
    // Top Information
    const TOP_INFO = build_top("\t\t", "About the Project", "Building a more sustainable future for quilting.");
    // People Information
    const POKORNY = build_person_for_about_page("\t\t", "assets/images/person_pokorny.svg", "Dr. Colleen Gelhaus Pokorny", "Project Lead", "Dr. Pokorny is an Assistant Professor of Apparel Design at Oregon State University and a lifelong quilter. She is a member of the Textile & Apparel Innovation Research Consortia with the Global Hemp Innovation Center. Her creative scholarship uses quiltmaking to explore material‑driven sustainability and how hands‑on engagement with hemp textiles can shift design practices and perceptions. Dr. Pokorny's work has received international recognition, including the Sandra Hutton Award for Excellence in Fiber Arts at the 2025 ITAA Design Exhibition. Her work has been shown at the National Quilt Museum, QuiltCon, and the American Quilt Study Group's traveling exhibition, Quiltmakers and Designers: 1945–1979.", "mailto:colleen.pokorny@oregonstate.edu", "EMAIL", "https://business.oregonstate.edu/faculty-and-research/faculty-directory/colleen-gelhaus-pokorny", "BUSINESS BIOGRAPHY", "https://www.linkedin.com/in/colleenpokorny/", "LINKEDIN");
    const AURORA = build_person_for_about_page("\t\t", "assets/images/person_aurora.svg", "Aurora O'Neill", "Designer & Researcher", "Aurora O’Neill is a Design and Innovation Management student at Oregon State University with a background in design research, sustainability, marketing, and entrepreneurship. The bulk of her design research focuses on how thoughtful design and material choices can support more environmentally responsible futures. Alongside her research, Aurora has experience in graphic design, UX design, branding, and collaborative projects that connect creativity with social impact. She is passionate about using research, storytelling, and community engagement to create work that encourages conversation and participation around sustainable practices.", "https://www.linkedin.com/in/aurora-o-neill-466132232/", "LINKEDIN");
    const JAMES = build_person_for_about_page("\t\t", "assets/images/person_james.svg", "James Bryant", "Insert Title Here", "Lorem ipsum dolor sit amet, lorem in ea elit ut minim ipsum sed lorem in id nulla proident sed dolore pariatur dolore consectetur tempor sunt ad nulla lorem consectetur velit ipsum et labore ad tempor sed consectetur deserunt consequat anim ea nulla enim lorem velit fugiat laboris deserunt ipsum excepteur sed ut fugiat reprehenderit proident");
    const KIRA = build_person_for_about_page("\t\t", "assets/images/person_kira.svg", "Kira Ash Stephenson", "Website Developer", "Once a student of Polk State College (FL), St. Petersburg College (FL), and Lane Community College (OR) in an endeavor to learn more about programming in order to fulfill his dreams of developing video games.  Now, Kira is a student at Oregon State University where they are learning more about software engineering; on the side they are developing larger projects inside a Business GitHub account called \"Mirth Development\".  He is the engineer/developer of this site - it's really weird to talk in third person for this - and the tools used to construct the pages before you were TypeScript, GitHub Pages, WebStorm, and a custom tool that Kira made for ease of styling.", "https://github.com/Tenlion?tab=repositories", "GITHUB", "https://github.com/orgs/Mirth-Development/repositories", "MIRTH DEV.", "https://www.linkedin.com/in/kira-stephenson-9210b820b", "LINKEDIN");
    const RUDY = build_person_for_about_page("\t\t", "assets/images/person_rudy.svg", "Rudy David Torrijos IV", "Automotive Technology | Mechanical Engineering", "Driven mechanical engineering student with a strong background in automotive technology and hands-on problem solving. Experienced in teamwork, manufacturing, and vehicle systems through academic projects, shop work, and real-world automotive experience. Passionate about engineering, fabrication, and applying practical skills to innovative projects and industries.", "https://www.instagram.com/802volvo/", "INSTAGRAM");
    const VANCE = build_person_for_about_page("\t\t", "assets/images/person_vance.svg", "Vance Hernandez", "Student", "Vance Hernandez is a Mechanical Engineering student at Oregon State University and a 10-year U.S. Navy veteran. His background includes experience in engineering, technical problem solving, and hands-on project work, with interests in sustainability and practical design applications.");
    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `       ${build_navigation("\t\t")}`,
        ``,
        `       ${TOP_INFO}`,
        ``,
        `       <!-- About Description -->`,
        `       <div id="${SS.about_description_panel}">`,
        `           <h2 class="${SS.about_description_heading}">Project Overview</h2>`,
        `           <p class="${SS.about_description_text}">The U.S. quilting industry is a multi-billion-dollar market, generating $4.5B in annual revenue in 2025 and supported by 9–11 million active quilters, making it one of the most robust craft sectors in the country. At the same time, consumer trends show a growing shift toward textured woven and linen fabrics that add depth, natural beauty, and tactility to quilts. Despite this appetite for natural, textured materials, quilting textiles remain cotton-dominant. While cotton is a natural fiber, its high water and pesticide use, along with historical labor issues, present a persistent sustainability challenge for the industry.</p>`,
        `           <p class="${SS.about_description_text}">Hemp textiles can meet quiltmaking's demand for natural, tactile materials while reducing environmental impact (lower water use, no pesticides, durable, breathable, biodegradable). Yet adoption lags due to misconceptions about texture/softness and associations with marijuana, plus limited retail presence. Meanwhile, the U.S. hemp fiber market is expanding. It is projected to grow from $120.4M (2024) to $360.2M (2033), signaling market pull for sustainable cotton alternatives and a timely opportunity for application in quiltmaking. Quiltmaking is an ideal medium for changing perceptions because it is a deeply tactile, material-driven craft where makers handle, test, and compare materials through hands-on making.</p>`,
        `           <p class="${SS.about_description_text}">It is our belief that the information provided on this site, its potential to spread, and the data collection of what people think of hemp through our survey will open the way for discovering how to make a more sustainable future within quiltmaking.  We don't want to just show what we can find online or through the standard research papers that we'll be sifting through, rather we want to exemplify the voices of the community in our work.  Peoples' reaction to this website, alongside the responses we discover in the provided survey that's linked in the Home Page, acts as the first step toward showing that voice on the matter.  Only together, can we weave a more sustainable future.</p>`,
        `       </div>`,
        ``,
        `       <!-- Team Intro Title + Flair -->`,
        `       <p id="${SS.about_people_title}">Meet the Team</p>`,
        `       <div id="${SS.about_divider_row}" class="${SS.form_static_row_center}">`,
        `           <div class="${SS.about_divider_line}"></div>`,
        `           <span id="${SS.about_divider_icon}" class="${SS.icon_general}">spa</span>`,
        `           <div class="${SS.about_divider_line}"></div>`,
        `       </div>`,
        ``,
        `       ${POKORNY}`,
        ``,
        `       ${AURORA}`,
        ``,
        `       ${JAMES}`,
        ``,
        `       ${KIRA}`,
        ``,
        `       ${RUDY}`,
        ``,
        `       ${VANCE}`,
        ``,
        `       ${build_footer("\t\t")}`,
        ``,
        `   </body>`,
    ].join("\n");
}
// Generates the navigation bar for the website.  Will return an array of template literals for tacking into a body builder.
function build_navigation(indent) {
    return [
        `<!-- Navigation -->`,
        `${indent}<nav id="${SS.navigation_panel}">`,
        `${indent}\t<div id="${SS.navigation_title_panel}">`,
        `${indent}\t\t<img id="${SS.navigation_logo}" src="assets/images/logo_for_navigation.png" alt="logo">`,
        `${indent}\t\t<div>`,
        `${indent}\t\t\t<p id="${SS.navigation_title}">HEMP & QUILTING</p>`,
        `${indent}\t\t\t<p id="${SS.navigation_subtitle}">Community Project</p>`,
        `${indent}\t\t</div>`,
        `${indent}\t</div>`,
        `${indent}\t<div id="${SS.navigation_link_panel}">`,
        `${indent}\t\t<a class="${SS.navigation_link}" href=${PAGES.HOME}.html>HOME</a>`,
        `${indent}\t\t<a class="${SS.navigation_link}" href=${PAGES.LEARN}.html>LEARN</a>`,
        `${indent}\t\t<a class="${SS.navigation_link}" href=${PAGES.SOURCES}.html>SOURCES</a>`,
        `${indent}\t\t<a class="${SS.navigation_link}" href=${PAGES.ABOUT}.html>ABOUT</a>`,
        `${indent}\t</div>`,
        `${indent}</nav>`,
    ].join("\n");
}
// Generates the contents for the footer across the website.  Will return an array of template literals for tacking into a body builder.
function build_footer(indent) {
    return [
        `<!-- Footer -->`,
        `${indent}<div id="${SS.footer_panel}">`,
        `${indent}\t<div id="${SS.footer_title_panel}">`,
        `${indent}\t\t<img id="${SS.footer_logo}" src="assets/images/logo_for_footer.png" alt="logo">`,
        `${indent}\t\t<span id="${SS.footer_title}">Together, we can weave a more sustainable future.</span>`,
        `${indent}\t</div>`,
        `${indent}\t<div id="${SS.footer_social_panel}">`,
        `${indent}\t\t<a class="${SS.footer_link}" href="https://www.themodernquiltguild.com/home">Modern Quilt Guild</a>`,
        `${indent}\t\t<a class="${SS.footer_link}" href="https://agsci.oregonstate.edu/hemp">Global Hemp Innovation Center</a>`,
        `${indent}\t\t<span class="${SS.footer_icon_panel}">`,
        `${indent}\t\t\t<a class="${SS.footer_social_icon}" href="mailto:colleen.pokorny@oregonstate.edu">`,
        `${indent}\t\t\t\t<i class="${SS.icon_general}">mail</i>`,
        `${indent}\t\t\t</a>`,
        `${indent}\t\t</span>`,
        `${indent}\t</div>`,
        `${indent}</div>`,
    ].join("\n");
}
// Generates the contents for the top of a page.  This includes the page title and any following subtext.  Passed in texts are
// just strings, ...texts will catch any passed strings after the 2nd argument and put them into an array that will have
// its contents mapped onto paragraph tags.
//
// Will return an array of template literals for tacking into a body builder.
function build_top(indent, title, ...texts) {
    // Mapping passed strings onto paragraph tags to tack into the generated top_panel.
    const text_lines = texts.map(text => `${indent}\t<p class="${SS.top_text}">${text}</p>`).join("\n");
    return [
        `<!-- Page Title and Subtext -->`,
        `${indent}<div class="${SS.top_panel} ${SS.form_static_column_center}">`,
        `${indent}\t<h1 class="${SS.top_title}">${title}</h1>`,
        text_lines,
        `${indent}</div>`,
    ].join("\n");
}
// Generates the contents to explain a person within the About page.  Links and their display names are optional, and you
// can have a max of three.  This will return an array of template literals that can be added into a body builder.
function build_person_for_about_page(indent, image_path, full_name, title, description, link1, link1_display, link2, link2_display, link3, link3_display) {
    let person = [
        `<!-- ${full_name} Description -->`,
        `${indent}<div class="${SS.about_person_panel} ${SS.form_static_column_center}">`,
        `${indent}\t<img class="${SS.about_person_image}" src="${image_path}" alt="Image of ${full_name}"/>`,
        `${indent}\t<h3 class="${SS.about_person_name}">${full_name}</h3>`,
        `${indent}\t<h4 class="${SS.about_person_title}">${title}</h4>`,
        `${indent}\t<p class="${SS.about_person_description}">${description}</p>`,
    ].join("\n");
    // Checking if links exist.
    // If so, add a row for the link tags and proceed with adding each link individually if they exist.
    // If not, do nothing.
    if (link1 !== undefined || link2 !== undefined || link3 !== undefined) {
        person += `\n${indent}\t<div class="${SS.form_static_row_center}">`;
        if (link1 !== undefined) {
            person += `\n${indent}\t\t<a class="${SS.about_person_link}" href="${link1}">${link1_display}</a>`;
        }
        if (link2 !== undefined) {
            person += `\n${indent}\t\t<a class="${SS.about_person_link}" href="${link2}">${link2_display}</a>`;
        }
        if (link3 !== undefined) {
            person += `\n${indent}\t\t<a class="${SS.about_person_link}" href="${link3}">${link3_display}</a>`;
        }
        person += `\n${indent}\t</div>`;
    }
    // Tacking on the ending div statement now that links (assuming they exist) have been added.
    person += `\n${indent}</div>`;
    return person;
}
// Generates HTML content for a notice blurb to help populate the Home page and warn visitors of the important facets
// of the content present on the site.  Will return an array of template literals for tacking into a body builder.
function build_notice_blurb_for_home_page(indent, icon, title, text) {
    return [
        `<!-- ${title} Notice Blurb -->`,
        `${indent}<div class="${SS.home_notice_inner_panel} ${SS.form_static_column_center}">`,
        `${indent}\t<span class="${SS.icon_general} ${SS.home_notice_inner_icon}">${icon}</span>`,
        `${indent}\t<div class="${SS.form_static_column_center}">`,
        `${indent}\t\t<p class="${SS.home_notice_inner_title}">${title}</p>`,
        `${indent}\t\t<p class="${SS.home_notice_inner_text}">${text}</p>`,
        `${indent}\t</div>`,
        `${indent}</div>`,
    ].join("\n");
}
// Generates HTML content for a card to help populate the Home page's "Why Your Voice Matters" section.  Will return an
// array of template literals for tacking into a body builder.
function build_card_for_home_page(indent, image_path, image_alt, title, text) {
    return [
        `<!-- ${title} Card -->`,
        `${indent}<div class="${SS.home_why_card_panel} ${SS.form_static_column_center}">`,
        `${indent}\t<img class="${SS.home_why_card_image}" src="${image_path}" alt="${image_alt}">`,
        `${indent}\t<h3 class="${SS.home_why_card_title}">${title}</h3>`,
        `${indent}\t<p class="${SS.home_why_card_text}">${text}</p>`,
        `${indent}</div>`,
    ].join("\n");
}
// Generates HTML content for a card to help populate the Learn page's "Why Hemp For Quilting" section.  Will return an
// array of template literals for tacking into a body builder.
function build_why_card_for_learn_page(indent, image_path, image_alt, title, text) {
    return [
        `<!-- ${title} Card -->`,
        `${indent}<div class="${SS.learn_why_card_panel} ${SS.form_static_column_center}">`,
        `${indent}\t<img class="${SS.learn_why_card_image}" src="${image_path}" alt="${image_alt}">`,
        `${indent}\t<h3 class="${SS.learn_why_card_title}">${title}</h3>`,
        `${indent}\t<p class="${SS.learn_why_card_text}">${text}</p>`,
        `${indent}</div>`,
    ].join("\n");
}
// Generates HTML content for a card to help populate the Learn page's "Common Misconceptions" section.  Will return an
// array of template literals for tacking into a body builder.
function build_misconception_card_for_learn_page(indent, misconception, truth) {
    return [
        `<!-- Card for "${misconception}"-->`,
        `${indent}<div class="${SS.learn_misconception_card_panel} ${SS.form_static_column_center}">`,
        `${indent}\t<p class="${SS.learn_misconception_card_myth}">${misconception}</p>`,
        `${indent}\t<p class="${SS.learn_misconception_card_truth}">${truth}</p>`,
        `${indent}</div>`,
    ].join("\n");
}
// Creates a row for the hemp column of the "Hemp vs. Marijuana" section of the Learn Page.
// Will return an array of template literals for tacking into a body builder.
function build_left_row_for_comparison_chart_for_learn_page(indent, icon, text) {
    return [
        `<!-- Hemp Note: "${text}"-->`,
        `${indent}<div class="${SS.learn_compare_column_row_left} ${SS.form_static_row_center}">`,
        `${indent}\t<span class="${SS.icon_general} ${SS.learn_compare_column_row_icon}">${icon}</span>`,
        `${indent}\t<p class="${SS.learn_compare_column_row_text}">${text}</p>`,
        `${indent}</div>`,
    ].join("\n");
}
// Creates a row for the marijuana column of the "Hemp vs. Marijuana" section of the Learn Page.
// Will return an array of template literals for tacking into a body builder.
function build_right_row_for_comparison_chart_for_learn_page(indent, icon, text) {
    return [
        `<!-- Marijuana Note: "${text}"-->`,
        `${indent}<div class="${SS.learn_compare_column_row_right} ${SS.form_static_row_center}">`,
        `${indent}\t<p class="${SS.learn_compare_column_row_text}">${text}</p>`,
        `${indent}\t<span class="${SS.icon_general} ${SS.learn_compare_column_row_icon_right}">${icon}</span>`,
        `${indent}</div>`,
    ].join("\n");
}
