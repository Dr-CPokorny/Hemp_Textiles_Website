
import * as SM from "./style_manager.js";
import * as SD from "./style_definitions.js";

let HEAVENLY_EARTH = new SM.Style(SD.STYLE_HEAVENLY_EARTH);

// Applies the style to the pages once the DOM has been loaded.
document.addEventListener("DOMContentLoaded", () => {
    HEAVENLY_EARTH.apply();
});

// Listening to see if a highlight is necessary upon loading the page and if an id-jump was made.
window.addEventListener("load", highlight_target);
window.addEventListener("hashchange", highlight_target);

// Mainly used for highlighting sources after an inline source tag has been clicked, but it will also
// highlight anything that gets clicked for a hash jump (id jumping).  So if you start seeing rectangles
// around elements you're trying to id-jump to and you don't like that, then know that this is the culprit.
//
// This function is paired with 2 window event listeners inside events.ts.
function highlight_target(): void {

    // Remove highlight from any previously highlighted source.
    const previously_highlighted = document.querySelector(".highlighted") as HTMLElement;
    if (previously_highlighted) {
        previously_highlighted.style.boxShadow = "";
        previously_highlighted.style.transition = "";
        previously_highlighted.classList.remove("source-highlighted");
    }

    // Find the currently targeted element and highlight it.
    const hash = window.location.hash.slice(1);
    if (hash) {
        const target = document.getElementById(hash);
        if (target) {
            target.classList.add("highlighted");
            target.style.boxShadow = `0 0 0 4px black`;
            target.style.borderRadius = "5px";
            target.style.transition = "box-shadow 1s ease";
        }
    }
}
