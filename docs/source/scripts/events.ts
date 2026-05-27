
import * as SM from "./style_manager.js";
import * as SD from "./style_definitions.js";

let HEAVENLY_EARTH = new SM.Style(SD.STYLE_HEAVENLY_EARTH);

document.addEventListener("DOMContentLoaded", () => {

    HEAVENLY_EARTH.apply();
});