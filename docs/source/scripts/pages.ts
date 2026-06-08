
import * as FS   from "fs";
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
} as const;

// BUILDING PAGES
// When this file is executed these builds will generate all the fields inside PAGES as html files.
// Doing this so that regenerating pages during development/testing is simple.
for (const page of Object.values(PAGES)) {
    build_page(page, page);
}

// Builds an HTML file that will be thrown into the docs directory.
function build_page(file_name: string, page_name: string) {

    const name_of_file = file_name.toLowerCase().replace(/\s+/g, "_") + ".html";
    const output_path  = PATH.resolve("../../", name_of_file);
    const html_content = build_html(file_name, page_name);

    FS.writeFileSync(output_path, html_content, "utf-8");
}

// Builds and returns HTML data containing a head and body defaulted with proper links and an h1 tag inside its
// body that holds the passed title in its contents.
function build_html(title: string, page_name: string): string {

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
function build_head(title: string): string {

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
        `       <title>MIWH: ${title.toUpperCase()}</title>`,
        ``,
        `${stylesheet_links}`,
        ``,
        `${scripted_event_links}`,
        ``,
        `   </head>`,
    ].join("\n");
}

// Determines which type of body gets built.
function body_director(page_name: string): string {

    let the_body: string = "";

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
function build_body_for_home(): string {

    // Top Information
    const TOP_INFO = build_top(
        "\t\t",
        "Help Shape the Future of Hemp in the Textile Arts",
        "Share your experience or curiosity about hemp fabrics.<br>Your input informs sustainable textile innovation.",
    );

    // Notice Blurb Information
    const BLURB_RESEARCH = build_notice_blurb_for_home_page(
        "\t\t\t",
        "data_table",
        "Data Driven",
        "This project is grounded in real data and research."
    );
    const BLURB_SURVEY = build_notice_blurb_for_home_page(
        "\t\t\t",
        "schedule",
        "Short Survey",
        "Quick, easy, and your responses are valued."
    );
    const BLURB_ANONYMOUS = build_notice_blurb_for_home_page(
        "\t\t\t",
        "lock",
        "Anonymous",
        "Your responses are completely anonymous."
    );

    // Why Card Information
    const CARD_SUSTAINABLE = build_card_for_home_page(
        "\t\t\t\t",
        "assets/images/home_card_sustainable.svg",
        "Finished patterned quilt made with hemp fabric.",
        "Sustainable",
        "Hemp is a low-impact crop that supports a healthier planet."
    );
    const CARD_DURABLE = build_card_for_home_page(
        "\t\t\t\t",
        "assets/images/home_card_durable.svg",
        "Finished white quilt made with hemp fabric.",
        "Durable & Beautiful",
        "Strong fibers, soft textures, made to last in every stitch."
    );
    const CARD_MAKERS = build_card_for_home_page(
        "\t\t\t\t",
        "assets/images/home_card_makers.svg",
        "Finished blue quilt made with hemp fabric.",
        "Made for Makers",
        "Crafters like you are leading the way to a greener future."
    );

    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `       ${build_navigation("\t\t")}`,
        ``,
        `       ${TOP_INFO}`,
        ``,
        `       <!-- Survey and Learn Buttons -->`,
        `       <div id="${SS.home_button_panel}">`,
        `           <a id="${SS.home_button_survey_for_quilters}" href="https://oregonstate.qualtrics.com/jfe/form/SV_ddwsySmGoCtCSou">SURVEY FOR QUILTERS</a>`,
        `           <a id="${SS.home_button_learn}" href="learn.html">LEARN ABOUT HEMP</a>`,
        `           <a id="${SS.home_button_survey_for_quilt_shop_owners}" href="https://oregonstate.qualtrics.com/jfe/form/SV_8uLdMbpfTlUt4CG">SURVEY FOR QUILT SHOP WORKERS</a>`,
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
        `           <h2 id="${SS.home_why_heading}">Why Your Voice Matters</h2>`,
        `           <p id="${SS.home_why_text}">Hemp is a durable, sustainable textile with so much potential.<br>But we need your input to guide the future of hemp within the textile arts.</p>`,
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
function build_body_for_learn(): string {

    // Top Information
    const TOP_INFO = build_top(
        "\t\t",
        "Getting To Know Hemp",
        "Hemp has a long history as a natural fiber, but certain myths have kept it out of textile markets.  This page is dedicated to abolishing those myths.",
    );

    // Hemp and Marijuana Comparison Information
    const HEMP_THC = build_left_row_for_comparison_chart_for_learn_page(
        "\t\t\t\t\t",
        "arrow_cool_down",
        "Low THC (<0.3%)"
    );
    const HEMP_USE = build_left_row_for_comparison_chart_for_learn_page(
        "\t\t\t\t\t",
        "apparel",
        "Used for textiles + apparel"
    );
    const HEMP_PSYCHO = build_left_row_for_comparison_chart_for_learn_page(
        "\t\t\t\t\t",
        "face",
        "Non-psychoactive"
    );
    const MARIJUANA_THC = build_right_row_for_comparison_chart_for_learn_page(
        "\t\t\t\t\t",
        "arrow_warm_up",
        "High THC (>0.3%)"
    );
    const MARIJUANA_USE = build_right_row_for_comparison_chart_for_learn_page(
        "\t\t\t\t\t",
        "medical_services",
        "Used casually + medically"
    );
    const MARIJUANA_PSYCHO = build_right_row_for_comparison_chart_for_learn_page(
        "\t\t\t\t\t",
        "cognition",
        "Psychoactive"
    );

    // Why Card Information
    const WHY_CARD_DURABLE = build_why_card_for_learn_page(
        "\t\t\t\t",
        "assets/images/learn_why_card_durable.svg",
        "Text",
        "Durable and Long-Lasting",
        `Hemp fibers are known for their strength and long-lasting quality ${build_inline_source("R-005", "R-008")}.`
    );
    const WHY_CARD_BREATHABLE = build_why_card_for_learn_page(
        "\t\t\t\t",
        "assets/images/learn_why_card_breathable.svg",
        "Text",
        "Breathable and Lightweight",
        `Hemp fabric is breathable and gets softer with every wash and use ${build_inline_source("R-009", "R-025")}; there is a limit to how soft it can get.`
    );
    const WHY_CARD_TEXTURED = build_why_card_for_learn_page(
        "\t\t\t\t",
        "assets/images/learn_why_card_textured.svg",
        "Text",
        "Naturally Textured and Tactile",
        `Its natural texture adds depth and character to textile work ${build_inline_source("R-008", "R-009")}.`
    );
    const WHY_CARD_BIODEGRADABLE = build_why_card_for_learn_page(
        "\t\t\t\t",
        "assets/images/learn_why_card_biodegradable.svg",
        "Text",
        "Biodegradable and Lower-Impact",
        `Hemp requires less water and fewer pesticides than cotton ${build_inline_source("R-001", "R-002", "R-006", "R-010")}.`
    );

    // Misconception Card Information
    const MISCONCEPTION_CARD_COMPARISON = build_misconception_card_for_learn_page(
        "\t\t\t\t",
        '"Hemp is the same as marijuana."',
        `While hemp and marijuana come from the same plant species ${build_inline_source("R-027")}, they are grown and used very differently. Textile hemp contains very low THC levels ${build_inline_source("R-027")} and is used for industrial applications like fabric, rope, and paper ${build_inline_source("R-007", "R-012")}.`
    );
    const MISCONCEPTION_CARD_ROUGH = build_misconception_card_for_learn_page(
        "\t\t\t\t",
        '"Hemp fabric is rough."',
        `Modern hemp textiles can range from structured and textured to soft and breathable depending on the weave and blend ${build_inline_source("R-025")}. Many hemp fabrics become softer over time with washing and regular use ${build_inline_source("R-009")}.`
    );
    const MISCONCEPTION_CARD_TEXTILE_ARTS = build_misconception_card_for_learn_page(
        "\t\t\t\t",
        '"Hemp isn\'t practical for the textile arts."',
        "Part of this project explores exactly that question. By gathering feedback from quilters and testing material experiences, the project aims to better understand hemp's usability, comfort, and creative potential for handmade craftsmanship."
    );

    // Material Tests Information
    const TEST_TEAR = build_material_test_for_learn_page(
        "\t\t\t\t",
        "assets/images/learn_test_tear.svg",
        "Text",
        "Tear Test Results",
        "The tear test showed that the textured woven cotton had the highest tear strength in the warp direction, while hemp and cotton/linen also performed well with consistent results. Hemp fabric showed balanced tear resistance between warp and weft directions, making it a strong and reliable option compared to basic quilt cotton. The textured woven cotton had a large difference between warp and weft strength, showing that fabric direction can greatly affect performance."
    );
    const TEST_ABRASION = build_material_test_for_learn_page(
        "\t\t\t\t",
        "assets/images/learn_test_abrasion.svg",
        "Text",
        "Abrasion Test Results",
        "The abrasion test showed that hemp fabric had the highest resistance to wear, lasting an average of about 45 revolutions before failure. Cotton/linen and textured woven cotton performed in the middle range, while basic quilt cotton showed the lowest abrasion resistance. Overall, the hemp fabric handled repeated wear the best, which supports its potential as a durable material for quiltmaking and other textile uses."
    );
    const TEST_DRAPE = build_material_test_for_learn_page(
        "\t\t\t\t",
        "assets/images/learn_test_drape.svg",
        "Text",
        "Drape Test Results",
        "The drape test was used to evaluate how naturally each fabric hangs and conforms under its own weight. A higher drape coefficient indicates a stiffer fabric, while a lower coefficient indicates greater flexibility and flow. Results showed that the hemp/cotton blend performed similarly to traditional cotton, suggesting that hemp-based textiles can provide comparable handling characteristics for textile-crafting applications. Linen/cotton and woven cotton fabrics exhibited lower drape coefficients, indicating greater flexibility. These findings suggest that hemp blends may offer a sustainable alternative to cotton while maintaining familiar fabric behavior valued by textile artists."
    );
    const TEST_SHRINKAGE = build_material_test_for_learn_page(
        "\t\t\t\t",
        "assets/images/learn_test_shrinkage.svg",
        "Text",
        "Shrinkage Test Results",
        "For the shrinkage test, each fabric sample was measured before and after washing to compare how much the material changed in size. The results showed that 100% Cotton Kona had the lowest shrinkage, with an average of about 0.203 inches, making it the most dimensionally stable fabric in this test. The hemp/cotton blend and Essex linen blend had very similar shrinkage results, averaging about 0.48 inches and 0.47 inches, which shows that the hemp blend performed close to another common natural fiber blend. The Diamond Textiles textured cotton had the highest shrinkage at about 0.625 inches. Overall, this test helped show that hemp fabric is still a usable option for quilting, but like many natural fabrics, it should likely be pre-washed before use to reduce shrinking after a quilt is made."
    );

    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `       ${build_navigation("\t\t")}`,
        ``,
        `       ${TOP_INFO}`,
        ``,
        `       <!-- Hemp vs Marijuana Comparison -->`,
        `       <div id="${SS.learn_compare_panel}" class="${SS.form_static_column_center}">`,
        `           <!-- Comparison Heading -->`,
        `           <h2 id="${SS.learn_compare_heading}">Forms of Cannabis</h2>`,
        `           <!-- Columns for Comparison -->`,
        `           <div class="${SS.form_static_row_start}">`,
        `               <!-- Hemp Column -->`,
        `               <div class="${SS.form_static_column_start}">`,
        `                   <h3 class="${SS.learn_compare_column_heading_left}">HEMP</h3>`,
        `                   ${HEMP_THC}`,
        `                   ${HEMP_USE}`,
        `                   ${HEMP_PSYCHO}`,
        `               </div>`,
        `               <!-- Leaf Image -->`,
        `               <div id="${SS.learn_compare_leaf_panel}" class="${SS.form_static_column_center}">`,
        `                   <img id="${SS.learn_compare_leaf_image}" src="assets/images/learn_cannabis_leaf.svg" alt="Cannabis leaf">`,
        `               </div>`,
        `               <!-- Marijuana Column -->`,
        `               <div class="${SS.form_static_column_end}">`,
        `                   <h3 class="${SS.learn_compare_column_heading_right}">MARIJUANA</h2>`,
        `                   ${MARIJUANA_THC}`,
        `                   ${MARIJUANA_USE}`,
        `                   ${MARIJUANA_PSYCHO}`,
        `               </div>`,
        `           </div>`,
        `       </div>`,
        ``,
        `       <!-- What is Hemp, Really? -->`,
        `       <div id="${SS.learn_what_is_hemp_panel}" class="${SS.form_static_column_center}">`,
        `           <h2 id="${SS.learn_what_is_hemp_heading}">What is Hemp, Really?</h2>`,
        `           <p class="${SS.learn_what_is_hemp_text}">Hemp is a natural fiber that comes from the Cannabis sativa plant, but unlike marijuana, which has high levels of THC (>0.3%) hemp contains extremely low levels of THC (<0.3%) ${build_inline_source("R-027")}; THC is the psychoactive compound associated with getting “high”. Hemp used for textiles is non-psychoactive, legally grown in many parts of the world, and has been used historically for products like rope, paper, clothing, and fabric ${build_inline_source("R-007", "R-012", "R-027")}.</p>`,
        `           <p class="${SS.learn_what_is_hemp_text}">Today, hemp is gaining attention as a more sustainable textile alternative because it requires less water and fewer pesticides compared to cotton, and produces durable, breathable fibers that soften over time with use ${build_inline_source("R-006", "R-009", "R-012", "R-014")}. Despite these benefits, hemp fabrics are still often misunderstood due to long-standing associations with marijuana and limited exposure within mainstream textile markets.</p>`,
        `       </div>`,
        ``,
        `       <!-- Why Hemp for Crafting? -->`,
        `       <div id="${SS.learn_why_panel}" class="${SS.form_static_column_center}">`,
        `           <h2 id="${SS.learn_why_heading}">Why Hemp for Textile Crafting?</h2>`,
        `           <p id="${SS.learn_why_text}">All textile arts, such as quiltmaking, require deep and intricate work where makers interact directly with materials through cutting, sewing, layering, and touch. This hands-on experience creates a unique opportunity to evaluate hemp textiles based on real performance rather than assumptions.</p>`,
        `           <div class="${SS.form_flex_wrap_row}">`,
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
        `           <div class="${SS.form_flex_wrap_row}">`,
        `               ${MISCONCEPTION_CARD_COMPARISON}`,
        `               ${MISCONCEPTION_CARD_ROUGH}`,
        `               ${MISCONCEPTION_CARD_TEXTILE_ARTS}`,
        `           </div>`,
        `       </div>`,
        ``,
        `       <!-- Material Tests -->`,
        `       <div id="${SS.learn_material_panel}" class="${SS.form_static_column_center}">`,
        `           <h2 class="${SS.learn_material_heading}">Material Testing with Hemp</h2>`,
        `           <p class="${SS.learn_material_text}">One of the goals of this project was to better understand how hemp fabrics perform compared to materials commonly used in quilting. To explore this, we conducted a series of material tests evaluating tear strength, abrasion resistance, drape, and shrinkage across different fabric types.</p>`,
        `           <p class="${SS.learn_material_text}">Rather than relying on assumptions about hemp’s feel or durability, these tests provide measurable data about how the material performs under real-world conditions.</p>`,
        `           <p class="${SS.learn_material_text}">By comparing hemp directly with fabrics familiar to textile artists (like cotton), we hope to better understand its strengths, limitations, and potential applications within the textile world. </p>`,
        `           <div class="${SS.form_flex_wrap_row}">`,
        `               ${TEST_TEAR}`,
        `               ${TEST_ABRASION}`,
        `               ${TEST_DRAPE}`,
        `               ${TEST_SHRINKAGE}`,
        `           </div>`,
        `       </div>`,
        ``,
        `       ${build_footer("\t\t")}`,
        ``,
        `   </body>`,
    ].join("\n");
}

// Builds the body for the SOURCES page.
function build_body_for_sources(): string {

    // Top Information
    const TOP_INFO = build_top(
        "\t\t",
        "\"Is Any Of This True?\"",
        "We're glad you asked.  Please feel free to peruse these sources to verify.  If you find that our words are inaccurate, then please use the mail icon in the footer to correct us.",
    );

    // Acquiring sources from the local sources.csv file.
    const SOURCES = parse_csv(PATH.resolve("../../databases/sources.csv"))
        .map(([id, title, category, source_type, reliability, summary, citation, link]) =>
            build_research_for_source_page(
                "\t\t\t",
                id,
                title,
                category,
                source_type,
                reliability,
                summary,
                citation,
                link || undefined,
            )
        )
        .join("\n");

    return [
        `   <body class="${SS.form_static_column_center}">`,
        ``,
        `       ${build_navigation("\t\t")}`,
        ``,
        `       ${TOP_INFO}`,
        ``,
        `       <!-- Research Sources -->`,
        `       <div id="${SS.sources_research_super_container}" class="${SS.form_flex_wrap_row}">`,
        ``,
        `   ${SOURCES}`,
        `       </div>`,
        ``,
        `       ${build_footer("\t\t")}`,
        ``,
        `   </body>`,
    ].join("\n");
}

// Builds the body for the ABOUT page.
function build_body_for_about(): string {

    // Top Information
    const TOP_INFO = build_top(
        "\t\t",
        "About the Project",
        "Building a more sustainable future for the textile arts."
    );

    // People Information
    const POKORNY = build_person_for_about_page(
        "\t\t",
        "assets/images/about_person_pokorny.svg",
        "Dr. Colleen Gelhaus Pokorny",
        "Project Lead",
        "Dr. Pokorny is an Assistant Professor of Apparel Design at Oregon State University and a lifelong quilter. She is a member of the Textile & Apparel Innovation Research Consortia with the Global Hemp Innovation Center. Her creative scholarship uses quiltmaking to explore material‑driven sustainability and how hands‑on engagement with hemp textiles can shift design practices and perceptions. Dr. Pokorny's work has received international recognition, including the Sandra Hutton Award for Excellence in Fiber Arts at the 2025 ITAA Design Exhibition. Her work has been shown at the National Quilt Museum, QuiltCon, and the American Quilt Study Group's traveling exhibition, Quiltmakers and Designers: 1945–1979.",
        "mailto:colleen.pokorny@oregonstate.edu",
        "EMAIL",
        "https://business.oregonstate.edu/faculty-and-research/faculty-directory/colleen-gelhaus-pokorny",
        "BUSINESS BIOGRAPHY",
        "https://www.linkedin.com/in/colleenpokorny/",
        "LINKEDIN",
    );
    const AURORA = build_person_for_about_page(
        "\t\t",
        "assets/images/about_person_aurora.svg",
        "Aurora O'Neill",
        "Designer & Researcher",
        "Aurora O’Neill is a Design and Innovation Management student at Oregon State University with a background in design research, sustainability, marketing, and entrepreneurship. The bulk of her design research focuses on how thoughtful design and material choices can support more environmentally responsible futures. Alongside her research, Aurora has experience in graphic design, UX design, branding, and collaborative projects that connect creativity with social impact. She is passionate about using research, storytelling, and community engagement to create work that encourages conversation and participation around sustainable practices.",
        "https://www.linkedin.com/in/aurora-o-neill-466132232/",
        "LINKEDIN",
    );
    const JAMES = build_person_for_about_page(
        "\t\t",
        "assets/images/about_person_james.svg",
        "James Bryant",
        "Test and Research Mechanical Engineer",
        "James Bryant is a Mechanical Engineering student at Oregon State University with a passion for hands-on problem solving, automotive work, and practical design. Through years of working on cars, motorcycles, and mechanical projects, he has developed a strong understanding of how materials, systems, and designs perform in real-world conditions. Bringing a practical engineering mindset, testing experience, and attention to durability and function, helping the team evaluate material performance from a hands-on perspective.",
        "https://www.linkedin.com/in/james-bryant-968133324",
        "LINKEDIN",
    );
    const KIRA = build_person_for_about_page(
        "\t\t",
        "assets/images/about_person_kira.svg",
        "Kira Ash Stephenson",
        "Website Developer",
        "Once a student of Polk State College (FL), St. Petersburg College (FL), and Lane Community College (OR) in an endeavor to learn more about programming in order to fulfill his dreams of developing video games.  Now, Kira is a student at Oregon State University where they are learning more about software engineering; on the side they are developing larger projects inside a Business GitHub account called \"Mirth Development\".  He is the engineer/developer of this site - it's really weird to talk in third person for this - and the tools used to construct the pages before you were TypeScript, GitHub Pages, WebStorm, and a custom tool that Kira made for ease of styling.",
        "https://github.com/Tenlion?tab=repositories",
        "GITHUB",
        "https://github.com/orgs/Mirth-Development/repositories",
        "MIRTH DEV.",
        "https://www.linkedin.com/in/kira-stephenson-9210b820b",
        "LINKEDIN",
    );
    const RUDY = build_person_for_about_page(
        "\t\t",
        "assets/images/about_person_rudy.svg",
        "Rudy David Torrijos IV",
        "Automotive Technology | Mechanical Engineering",
        "Driven mechanical engineering student with a strong background in automotive technology and hands-on problem solving. Experienced in teamwork, manufacturing, and vehicle systems through academic projects, shop work, and real-world automotive experience. Passionate about engineering, fabrication, and applying practical skills to innovative projects and industries.",
        "https://www.instagram.com/802volvo/",
        "INSTAGRAM",
    );
    const VANCE = build_person_for_about_page(
        "\t\t",
        "assets/images/about_person_vance.svg",
        "Vance Hernandez",
        "Badass MOFO",
        "Vance Hernandez is a Mechanical Engineering student at Oregon State University and a 10-year U.S. Navy veteran. His background includes experience in engineering, technical problem solving, and hands-on project work, with interests in sustainability and practical design applications.",
    );

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
        `           <p class="${SS.about_description_text}">The U.S. quilting industry is a multi-billion-dollar market, generating $4.5B in annual revenue in 2025 and supported by 9–11 million active quilters, making it one of the most robust craft sectors in the country ${build_inline_source("R-023")}. At the same time, consumer trends show a growing shift toward textured woven and linen fabrics that add depth, natural beauty, and tactility to quilts ${build_inline_source("R-024", "R-025")}. Despite this appetite for natural, textured materials, quilting textiles remain cotton-dominant. While cotton is a natural fiber, its high water and pesticide use, along with historical labor issues, present a persistent sustainability challenge for the industry ${build_inline_source("R-004", "R-013", "R-015")}.</p>`,
        `           <p class="${SS.about_description_text}">Hemp textiles can meet quiltmaking's demand for natural, tactile materials while reducing environmental impact (lower water use, no pesticides, durable, breathable, biodegradable). Yet adoption lags due to misconceptions about texture/softness and associations with marijuana, plus limited retail presence. Meanwhile, the U.S. hemp fiber market is expanding. It is projected to grow from $120.4M (2024) to $360.2M (2033), signaling market pull for sustainable cotton alternatives and a timely opportunity for application in quiltmaking ${build_inline_source("R-026")}. Quiltmaking is an ideal medium for changing perceptions because it is a deeply tactile, material-driven craft where makers handle, test, and compare materials through hands-on making.</p>`,
        `           <p class="${SS.about_description_text}">It is our belief that the information provided on this site, its potential to spread, and the data collection of what people think of hemp through our survey will open the way for discovering how to make a more sustainable future within the textile arts.  We don't want to just show what we can find online or through the standard research papers that we'll be sifting through, rather we want to exemplify the voices of the community in our work.  Peoples' reaction to this website, alongside the responses we discover in the provided survey that's linked in the Home Page, acts as the first step toward showing that voice on the matter.  Only together, can we weave a more sustainable future.</p>`,
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
function build_navigation(indent: string): string {
    return [
        `<!-- Navigation -->`,
        `${indent}<nav id="${SS.navigation_panel}">`,
        `${indent}\t<div id="${SS.navigation_title_panel}">`,
        `${indent}\t\t<img id="${SS.navigation_logo}" src="assets/images/logo_for_navigation.svg" alt="logo">`,
        `${indent}\t\t<div>`,
        `${indent}\t\t\t<p id="${SS.navigation_title}">Make It With Hemp</p>`,
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
function build_footer(indent: string): string {
    return [
        `<!-- Footer -->`,
        `${indent}<div id="${SS.footer_panel}">`,
        `${indent}\t<div id="${SS.footer_title_panel}">`,
        `${indent}\t\t<img id="${SS.footer_logo}" src="assets/images/logo_for_footer.svg" alt="logo">`,
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
function build_top(
    indent: string,
    title: string,
    ...texts: string[]
): string {

    // Mapping passed strings onto paragraph tags to tack into the generated top_panel.
    const text_lines = texts.map(text =>
        `${indent}\t<p class="${SS.top_text}">${text}</p>`
    ).join("\n");

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
function build_person_for_about_page(
    indent: string,
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
function build_notice_blurb_for_home_page(
    indent: string,
    icon: string,
    title: string,
    text: string
): string {
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
function build_card_for_home_page(
    indent: string,
    image_path: string,
    image_alt: string,
    title: string,
    text: string
): string {
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
function build_why_card_for_learn_page(
    indent: string,
    image_path: string,
    image_alt: string,
    title: string,
    text: string
): string {
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
function build_misconception_card_for_learn_page(
    indent: string,
    misconception: string,
    truth: string
): string {
    return [
        `<!-- Card for "${misconception}"-->`,
        `${indent}<div class="${SS.learn_misconception_card_panel} ${SS.form_static_column_center}">`,
        `${indent}\t<p class="${SS.learn_misconception_card_myth}">${misconception}</p>`,
        `${indent}\t<p class="${SS.learn_misconception_card_truth}">${truth}</p>`,
        `${indent}</div>`,
    ].join("\n");
}

function build_material_test_for_learn_page(
    indent: string,
    image_path: string,
    image_alt: string,
    title: string,
    text: string
): string {
    return [
        `<!-- ${title} -->`,
        `${indent}<div class="${SS.learn_material_test_panel} ${SS.form_static_column_center}">`,
        `${indent}\t<img class="${SS.learn_material_test_image}" src="${image_path}" alt="${image_alt}">`,
        `${indent}\t<h3 class="${SS.learn_material_test_heading}">${title}</h3>`,
        `${indent}\t<p class="${SS.learn_material_test_text}">${text}</p>`,
        `${indent}</div>`,
    ].join("\n");
}

// Creates a row for the hemp column of the "Hemp vs. Marijuana" section of the Learn Page.
// Will return an array of template literals for tacking into a body builder.
function build_left_row_for_comparison_chart_for_learn_page(
    indent: string,
    icon: string,
    text: string
): string {
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
function build_right_row_for_comparison_chart_for_learn_page(
    indent: string,
    icon: string,
    text: string
): string {
    return [
        `<!-- Marijuana Note: "${text}"-->`,
        `${indent}<div class="${SS.learn_compare_column_row_right} ${SS.form_static_row_center}">`,
        `${indent}\t<p class="${SS.learn_compare_column_row_text}">${text}</p>`,
        `${indent}\t<span class="${SS.icon_general} ${SS.learn_compare_column_row_icon_right}">${icon}</span>`,
        `${indent}</div>`,
    ].join("\n");
}

// Generates a source block where a link to the source is an optional element.  This source generator
// is dedicated for secondary research only.  Primary research--prototyping, survey data, testing, or interviewing--should
// be tossed into a different builder (you'll have to make one or several, I didn't have time to make those builders).
//
// Also, the sources outer panels are ID'd based on the id parameter.  This way, the sources can be hash jumped to through
// inline tags and highlighted by event listeners.
//
// Will return an array of template literals for tacking into a body builder.
function build_research_for_source_page(
    indent: string,
    id: string,
    title: string,
    research_category: string,
    source_type: string,
    reliability: string,
    summary: string,
    citation: string,
    link?: string,
): string {

    // Creating a link panel.
    // If there is a link, a URL will be added to the panel.
    // If there is no link, a note mentioning that there was no link for the source shall be stated.
    let link_panel = "";
    if (link !== undefined) {
        link_panel = [
            `${indent}\t\t<div class="${SS.sources_research_inner_panel}">`,
            `${indent}\t\t\t<h3 class="${SS.sources_research_heading}">Link To Source</h3>`,
            `${indent}\t\t\t<a class="${SS.sources_research_link_text}" href="${link}">CLICK ME</a>`,
            `${indent}\t\t</div>`,
        ].join("\n");
    }
    else {
        link_panel = [
            `${indent}\t\t<div class="${SS.sources_research_inner_panel}">`,
            `${indent}\t\t\t<h3 class="${SS.sources_research_heading}">Link To Source</h3>`,
            `${indent}\t\t\t<p class="${SS.sources_research_inner_text}"><i>Source has no link.</i></p>`,
            `${indent}\t\t</div>`,
        ].join("\n");
    }

    return [
        `${indent}<!-- ${id} \"${title.toUpperCase()}\" -->`,
        `${indent}<div class="${SS.sources_research_container} ${SS.form_static_column_center}">`,
        `${indent}\t<div class="${SS.sources_research_id_panel}">`,
        `${indent}\t\t<p class="${SS.sources_research_id_text}">${id}</p>`,
        `${indent}\t</div>`,
        `${indent}\t<div id="${id}" class="${SS.sources_research_outer_panel}">`,
        `${indent}\t\t<h2 class="${SS.sources_research_title}">${title}</h2>`,

        `${indent}\t\t<div class="${SS.sources_research_inner_panel}">`,
        `${indent}\t\t\t<h3 class="${SS.sources_research_heading}">Summary</h3>`,
        `${indent}\t\t\t<p class="${SS.sources_research_inner_text}">${summary}</p>`,
        `${indent}\t\t</div>`,

        `${indent}\t\t<div class="${SS.sources_research_inner_panel}">`,
        `${indent}\t\t\t<h3 class="${SS.sources_research_heading}">Research Category</h3>`,
        `${indent}\t\t\t<p class="${SS.sources_research_inner_text}">${research_category}</p>`,
        `${indent}\t\t</div>`,

        `${indent}\t\t<div class="${SS.sources_research_inner_panel}">`,
        `${indent}\t\t\t<h3 class="${SS.sources_research_heading}">Source Type</h3>`,
        `${indent}\t\t\t<p class="${SS.sources_research_inner_text}">${source_type}</p>`,
        `${indent}\t\t</div>`,

        `${indent}\t\t<div class="${SS.sources_research_inner_panel}">`,
        `${indent}\t\t\t<h3 class="${SS.sources_research_heading}">Form of Reliability</h3>`,
        `${indent}\t\t\t<p class="${SS.sources_research_inner_text}">${reliability}</p>`,
        `${indent}\t\t</div>`,

        link_panel,

        `${indent}\t\t<div class="${SS.sources_research_inner_panel}">`,
        `${indent}\t\t\t<h3 class="${SS.sources_research_heading}">APA Citation</h3>`,
        `${indent}\t\t\t<p class="${SS.sources_research_inner_text}">${citation}</p>`,
        `${indent}\t\t</div>`,
        `${indent}\t</div>`,
        `${indent}</div>`,
        ``,
    ].join("\n");
}

// Generates <a> tags for references to the source page.  Takes in database ids as parameters to create
// a chain of inline sources.  An example call would be: build_inline_source("R-001", R-013").  This would
// create two <a> tags that can each be used to jump to the relative source info within the sources page.
//
// Will return an array of template literals for tacking into a body builder.
function build_inline_source(...ids: string[]): string {

    // Creating a list of jumpable links by taking the string array and mapping its
    // contents to individual <a> tags.
    const links = ids.map(id =>
        `<a class="${SS.sources_inline_tag}" href="${PAGES.SOURCES}.html#${id}">${id}</a>`
    ).join(", ");

    return `[${links}]`;
}

// Takes a .csv file that has all of its data surrounded by quotes and parses the information into an array of strings.
//
// This can handle quotation marks inside cells as part of the data if double usage of a quotation mark is apparent.
// An example would be ""food"" becoming "food" after being parsed.
function parse_csv(file_path: string): string[][] {

    // Reading quoted cells from the sources.csv file.
    // Trimming the quotes around each cell.
    const lines = FS.readFileSync(file_path, "utf-8")
        .split("\n")
        .slice(1)
        .filter(line => line.trim() !== "");

    // Parsing each line into an array of fields for the parsed_data object, splitting on commas outside of quotes.
    const parsed_data =  lines.map(line => {

        const cells: string[] = [];
        let current = "";
        let inside_quotes = false;

        // Looping through characters within the current line of the file.
        for (let i = 0; i < line.length; i++) {

            const character = line[i];

            // Handling quotation marks within cells.
            if (character === '"') {
                if (inside_quotes && line[i + 1] === '"') {
                    current += '"';
                    i++;
                }
                else {
                    inside_quotes = !inside_quotes;
                }
            }

            // Handling commas within cells.
            else if (character === "," && !inside_quotes) {
                cells.push(current.trim());
                current = "";
            }

            // Handling all characters that aren't commas or quotation marks.
            else {
                current += character;
            }
        }
        cells.push(current.trim());

        return cells;
    });

    return parsed_data;
}
