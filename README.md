
# Make It With Hemp Website

## Overview

### The Purpose

This site was made for the DSIH415 Multidisciplinary Design for Social Impact course during the Spring term of 2026. 
It was made to serve as an educational tool, a way to hold research surrounding hemp as a textile, and as a way to direct
people who are involved in quiltmaking to surveys that will be used for data collection.
### The Team
The content seen on the site was developed as a team with the members being as follows:
- Dr. Colleen Pokorny (Client)
- Aurora O'Neill (Researcher + Website Designer)
- James Bryant (Researcher + Primary Material Tester)
- Kira Ash Stephenson (Researcher + Website Developer)
- Rudy Torrijos IV (Researcher + Survey Maker + Secondary Material Tester)
- Vance Hernandez (Researcher + Maker of the Research Database)
- Julien Fedou (Teacher Assistant)

### The Time
It is really important to know that I had 7 weeks to build the website where I basically could only dedicate 10 to 30 hours
each week for the site.  Plus, I'm the only one who knows how to code in the group.  So if you end up asking yourself
_"Why is it done this way?"_ or _"You did better on a previous page, why do it like this now?"_, it's because I was in a rush. :P

## What Tools Were Used To Make The Site?

### Overview of Tool Usage

A lot of the coding tools are custom-made.  I wanted to use this project to test a custom framework
I've been working on, so I apologize if you're taking up this project and you're familiar with something like NEXT.js
or REACT.  You can try to move everything over to a known framework, but I really don't recommend doing that.  Obviously,
that would require a lot of rewrite.  But also because the custom framework I'm developing is intended to be a little more
intuitive to understand than the popular ones that are out on the market.  Of course there is a learning curve, but I promise
it's only about 2 or 3 days worth of wrapping your head around things.
### TypeScript + Minor CSS + Generated HTML
TypeScript is the bread and butter for this.  I'm using it to generate HTML through arrays that are storing a series of
template literals.  I'm doing this so that I can manipulate the HTML using TypeScript variables, functions, types, and so on.
I handle all of this generation through functions I call "builders". _More on this in the Custom Page Construction section._

The CSS is just for font families and implementing a family for icons; I prefer to bake font families into the html files
themself so that they're not dependent on any connection.  The rest of the styling is done through a custom styling tool 
I made.  _More on this in the Custom Styling section._

### JetBrains WebStorm IDE
I use the Webstorm IDE to do anything related for web development.  Now, if you're used to Visual Studio then you may or may
not have the ability to search terms throughout all directories/files (double shift in JetBrains) and that might make going through
my code and finding particular things quickly to be annoying.  Plus, the JetBrains IDE supports regular expressions within its
find-and-replace feature and I'm not sure if VSCode does that.  Additionally, I normally code in collapse-all and open-all format
which allows me to have hundreds to thousands of lines of code be in a file without it causing a headache to navigate through
(CTRL_SHIFT_+ for open all and CTRL_SHIFT_- for close all).

I'm telling all of this to you because I'm not familiar anymore with what VSCode offers and I don't want you to suffer.

### GitHub Pages
Okay, at the time of initially developing the site I didn't know about Cloudflare Pages.  If I had known, I would've used
Cloudflare.  But alas, this is what we're working with.

If you've never used GitHub Pages before then there are a few things you need to know.
1. Pages requires an index.html page.  That is why the Home Page is named index.html and not home.html.  Feel free to implement a new index.html that can redirect to a home.html.  I did that, and there were some loading problems for a couple of people I tested the site with (the redirect can take multiple seconds).  I don't personally recommend creating a redirector unless you're up for solving that issue.
2. Pages needs a docs directory within the root directory of the repository.  The .html files must be in the docs directory.  And to be clear, they can't be within an inner folder of the docs directory.  The .html files MUST sit in the docs folder otherwise GitHub Pages won't recognize them.
3. Dr. Pokorny is using the domain makeitwithhemp.org through Cloudflare's DNS service.  If this domain changes, then the repo's GitHub Pages settings must be changed.  If the site is to move to a different GitHub account for w/e reason, then the Cloudflare DNS service's records for the domain must be updated to point to the GitHub account that's hosting the site.

### Bun
I am not using Node.js.  Simply put, fuck Node; it's overly complicated.  It's outdated and I hate it for how slow and bloated it is.  

Bun can use all node packages from npm, so don't worry about missing out on your favorite tools that Node offers.  Bun's commands
are nearly identical to Node, quite literally replace the term "node" with "bun" for a command and you'll have access to all of your
fun Node commands.  Additionally, nodex is just bunx.  You can even "tsc --watch" as you would with Node.

You _should_ still be able to use Node.js for the project, but I'm not 100% sure.  So I recommend installing Bun.

Here's the Bun installation process: https://bun.com/docs/installation

### Custom Page Construction

#### How Is The HTML Generated?

Through TypeScript functions I'm calling "builders".  Builder functions all start with the word "build_" and are purposed
to either help generate the core tags associated with every page (body, head, html) or they are purposed to generate content
for a body tag.  This is achieved by having each builder create an array of template literals that get thrown back to a larger
purposed builder that will take the collection of literals and write each one as a line to a .html file.  This in turn creates a page.

#### Builder Tree
Text

#### Core Builders
Text

#### Content Builders
Text

### Custom Styling

#### Style Manager
Text

#### Style Definition
Text

### AI Usage?
Yes. Claude Sonnet 4.X models and w/e the latest Gemini model was at the time.  Mainly for debugging purposes and
filling out builder logic I already templated.  Besides that, I needed some help with flexbox styling; I had never used
flex wrap and needed help with the styling rules and formatting particular containers.  Plus, the highlighting
of sources when an id-jump (hash jump) occurs was not me - all Claude on that one.

Ultimately, around 5% to 10% was truly vibe coded, and I made sure to go through any vibe bullshit thoroughly before it
got put into the end product.  The only thing I couldn't figure out in time was the highlighting logic, specifically with
how to make sure the jumps would always put the view at the top of the highlighted target.

## What Should I Know About Each File/Directory?

### Directories

#### configuration
For Bun or Node, this directory is where you _cd_ into and run "bunx tsc --watch" to ensure the TypeScript files
are actively transpiling as you code.  That way, you can test things live.  Besides that the directory holds the TypeScript
configuration for the project.

#### docs
Holds all of the code.  TypeScript, HTML, and CSS.

#### assets
For putting images, videos, and audio into.  If you're going to add a new image, it better be a compressed .svg file
otherwise the pages will take longer to load and you'll need to do some extra formatting work since non-svgs don't scale nicely.
- PNG Compressor: https://tinypng.com/
  - This thing is awesome.  From what I can tell it's a lossless compressor for PNG files that reduces file size by almost over 60%+.  Best image compressor I've ever had the pleasure of using.
- PNG to SVG Convertor: https://www.aconvert.com/image/png-to-svg/
  - I don't like this converter since it's taking the PNG and converting using base64 (increases file size by roughly 33%).  It keeps the image lossless, but at the cost of increasing the file size.  It's not a true converter, I recommend finding a different one if you can; I went through many, but couldn't find a better one.

#### databases
Used to store information that comes from Vance's research database.  I wanted to make the site have the ability to write to .csv files,
but I didn't get the time.  Doing that, alongside adding a hidden (and password accessible) edit mode to the site, would make the excel database file
irrelevant (in a good way).

#### scripts
Contains the TypeScript and transpiled JavaScript files.

### Files

#### events.ts
This is where you can find the highlighter code, and it holds the DOMContentLoaded event that is triggering the application of
styles from the style_definition.ts file.

#### pages.ts
Holds the builder functions.  Running this file with the command "bun [insert_path_to_pages.ts_here]" will generate the HTML files.

#### style_definitions.ts
This is where the style work is done.  The default style is STYLE_HEAVENLY_EARTH.  Also, you can find the SIZES code here as well;
SIZES is used to determine all sizing logic based off viewport dimensions and clamps.

#### style_manager.ts
I do not recommend messing with this file. But if you want to tweak the logic for how styling is applied, this is where
you do it.  _For more information on this file, go to the Custom Styling section._

#### fonts.css
Holds the various font families and icon packs being used for the site.

## How Do I Update the Content on the Site?
This depends on your skillset.
- **I AM _NOT_ A PROGRAMMER:** Go into the HTML files and change the contents there. Afterwards, push your changes to GitHub using either git commands or a git interface such as GitHub Desktop.
- **I AM A PROGRAMMER:** Manipulate the builders and regenerate the HTML using a Bun command.  Afterwards, push your changes to GitHub using either git commands or a git GUI such as GitHub Desktop.
  - **FOR SOURCES:** Assuming the Excel file still exists, you want to add or manipulate source information in the excel file first.  Then, you'll
    copy w/e cell you need to from the column dedicated for the site (it's the column named with all capital letters).  From there you'll
    paste the cell info into sources.csv:
    - For new sources, paste their cell info at the end of the sources.csv file.  Then regenerate the HTML using Bun.
    - For changing old sources, paste over their line in the sources.csv file. Then regenerate the HTML using Bun.
