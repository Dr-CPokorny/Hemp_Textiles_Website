
import * as SM from "../style_manager.js";
import * as SD from "../style_definitions.js";

export let ROYAL_STYLE = new SM.Style(SD.STYLE_STARK_ROYAL) ;

//
document.addEventListener("DOMContentLoaded", () => {

    ROYAL_STYLE.apply();
});
