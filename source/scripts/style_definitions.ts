
// THINGS TO KNOW FOR TEMPLATES
// o = Object that is holding selectors.
// u = Universal Selector
// t = Tag Selector
// i = ID Selector
// c = Class Selector

// SPACINGS and ANCHORS
// These objects are for the margin and padding styling, it is used to ensure that spacing
// definitions are universal across all the styles.  If need be, more spacing types can be added into this
// definition at a later date - doing so will require an update to the margins and paddings selectors along with
// their styling functions.
const ANCHORS = {

    // SPECIAL ANCHORS
    // anchor_vertical and anchor_horizontal exist to keep the aspect ratio of spacing consistent
    // across all spacing applications.  If one is to change their values, then I recommend setting them to be the same
    // in value; keep vertical set to vh and horizontal set to vw of course.
    anchor_vertical: "3vh",
    anchor_horizontal: "3vw",

    // SPACING ANCHORS : Used to create new mins and maxes for when the viewport size changes.
    // The lower the anchor number, the bigger the space.  The higher the anchor number, the smaller the space.
    anchor_min_1: "1.5rem",
    anchor_max_1: "3rem",

    anchor_min_2: "1rem",
    anchor_max_2: "2rem",

    anchor_min_3: "0.75rem",
    anchor_max_3: "1.5rem",

    anchor_min_4: "0.5rem",
    anchor_max_4: "1rem",

    anchor_min_5: "0.25rem",
    anchor_max_5: "0.5rem",

    anchor_min_6: "0.125rem",
    anchor_max_6: "0.25rem",
} as const;
const SPACINGS = {

    // VERTICAL SPACING : Based on viewport height and anchor mins/maxes.
    spacing_vertical_1: `clamp(${ANCHORS.anchor_min_1}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_1})`,
    spacing_vertical_2: `clamp(${ANCHORS.anchor_min_2}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_2})`,
    spacing_vertical_3: `clamp(${ANCHORS.anchor_min_3}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_3})`,
    spacing_vertical_4: `clamp(${ANCHORS.anchor_min_4}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_4})`,
    spacing_vertical_5: `clamp(${ANCHORS.anchor_min_5}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_5})`,
    spacing_vertical_6: `clamp(${ANCHORS.anchor_min_6}, ${ANCHORS.anchor_vertical}, ${ANCHORS.anchor_max_6})`,

    // HORIZONTAL SPACING : Based on viewport width and anchor mins/maxes.
    spacing_horizontal_1: `clamp(${ANCHORS.anchor_min_1}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_1})`,
    spacing_horizontal_2: `clamp(${ANCHORS.anchor_min_2}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_2})`,
    spacing_horizontal_3: `clamp(${ANCHORS.anchor_min_3}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_3})`,
    spacing_horizontal_4: `clamp(${ANCHORS.anchor_min_4}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_4})`,
    spacing_horizontal_5: `clamp(${ANCHORS.anchor_min_5}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_5})`,
    spacing_horizontal_6: `clamp(${ANCHORS.anchor_min_6}, ${ANCHORS.anchor_horizontal}, ${ANCHORS.anchor_max_6})`,
} as const;

const STYLE_TEMPLATE_FOR_DOCUMENTS = {

    uUNIVERSAL: {
        margin: "",
        padding: "",
        boxSizing: "",
    },

    tBODY: {
        textAlign: "",
        overflowWrap: "",
        textWrap: "",
        hyphens: "",
        fontKerning: "",
        wordSpacing: "",
        letterSpacing: "",

        fontStyle: "",
        fontSize: "",
        lineHeight: "",
        color: "",
        backgroundColor: "",
        fontFamily: "",
    },

    oMENU: {

        iPANEL: {
            right: "",
            bottom: "",
            backgroundColor: "",
            borderStyle: "",
            borderWidth: "",
            borderRadius: "",
            borderColor: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },

        iEDIT: {

        },

        iNAVIGATION: {

        },

        iSETTINGS: {

        },

        cBUTTONS: {
            zIndex: "",
            backgroundColor: "",
            borderStyle: "",
            borderWidth: "",
            borderRadius: "",
            borderColor: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },

        cTEXT: {
            zIndex: "",
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },
    },

    oNAVIGATION: {

    },

    oSETTING: {

    },

    oBLOCK: {

        cUPPER: {
            backgroundColor: "",
            borderColor: "",
            borderStyle: "",
            borderWidth: "",
            borderRadius: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },

        cMIDDLE: {
            backgroundColor: "",
            borderColor: "",
            borderStyle: "",
            borderWidth: "",
            borderRadius: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },

        cLOWER: {
            backgroundColor: "",
            borderColor: "",
            borderStyle: "",
            borderWidth: "",
            borderRadius: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },

        cWARNING: {
            backgroundColor: "",
            borderColor: "",
            borderStyle: "",
            borderWidth: "",
            borderRadius: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },

        cSTORY: {
            backgroundColor: "",
            borderColor: "",
            borderStyle: "",
            borderWidth: "",
            borderRadius: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },
    },

    oHEADING: {

        cTITLE: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },

        cUPPER: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },

        cMIDDLE: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },

        cLOWER: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },

        cWARNING: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },

        cSTORY: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },
    },

    oTEXT: {

        cGENERAL: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },

        cMARGINAL: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },

        cWARNING: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },

        cSTORY: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },

        cVISUAL: {
            color: "",
            fontFamily: "",
            fontWeight: "",
            fontStyle: "",
            fontSize: "",
            lineHeight: "",
            textAlign: "",
        },
    },

    oICON: {

        cGENERAL: {
            fontStyle: "",
            textTransform: "",
            verticalAlign: "",
            overflowWrap: "",
            whiteSpace: "",
            direction: "",
            textRendering: "",
            fontFeatureSettings: "",

            color: "",
            fontFamily: "",
            fontSize: "",
            lineHeight: "",

            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },

        cMENU: {
            fontStyle: "",
            textTransform: "",
            verticalAlign: "",
            overflowWrap: "",
            whiteSpace: "",
            direction: "",
            textRendering: "",
            fontFeatureSettings: "",

            color: "",
            fontFamily: "",
            fontSize: "",
            lineHeight: "",

            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },
    },

    oINPUT: {

    },

    oFORM: {

        cSTATIC_COLUMN_START: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_COLUMN_CENTER: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_COLUMN_END: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_ROW_START: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_ROW_CENTER: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_ROW_END: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_COLUMN_START: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_COLUMN_CENTER: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_COLUMN_END: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_ROW_START: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_ROW_CENTER: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_ROW_END: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },
    },

    oMARGIN: {

        cAUTO: { margin: "auto" },
        c1: { margin: `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}` },
        c2: { margin: `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}` },
        c3: { margin: `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}` },
        c4: { margin: `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}` },
        c5: { margin: `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}` },
        c6: { margin: `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}` },

        cTOP_AUTO: { marginTop: "auto" },
        cTOP_1: { marginTop: SPACINGS.spacing_vertical_1 },
        cTOP_2: { marginTop: SPACINGS.spacing_vertical_2 },
        cTOP_3: { marginTop: SPACINGS.spacing_vertical_3 },
        cTOP_4: { marginTop: SPACINGS.spacing_vertical_4 },
        cTOP_5: { marginTop: SPACINGS.spacing_vertical_5 },
        cTOP_6: { marginTop: SPACINGS.spacing_vertical_6 },

        cBOTTOM_AUTO: { marginBottom: "auto" },
        cBOTTOM_1: { marginBottom: SPACINGS.spacing_vertical_1 },
        cBOTTOM_2: { marginBottom: SPACINGS.spacing_vertical_2 },
        cBOTTOM_3: { marginBottom: SPACINGS.spacing_vertical_3 },
        cBOTTOM_4: { marginBottom: SPACINGS.spacing_vertical_4 },
        cBOTTOM_5: { marginBottom: SPACINGS.spacing_vertical_5 },
        cBOTTOM_6: { marginBottom: SPACINGS.spacing_vertical_6 },

        cLEFT_AUTO: { marginLeft: "auto" },
        cLEFT_1: { marginLeft: SPACINGS.spacing_horizontal_1 },
        cLEFT_2: { marginLeft: SPACINGS.spacing_horizontal_2 },
        cLEFT_3: { marginLeft: SPACINGS.spacing_horizontal_3 },
        cLEFT_4: { marginLeft: SPACINGS.spacing_horizontal_4 },
        cLEFT_5: { marginLeft: SPACINGS.spacing_horizontal_5 },
        cLEFT_6: { marginLeft: SPACINGS.spacing_horizontal_6 },

        cRIGHT_AUTO: { marginRight: "auto" },
        cRIGHT_1: { marginRight: SPACINGS.spacing_horizontal_1 },
        cRIGHT_2: { marginRight: SPACINGS.spacing_horizontal_2 },
        cRIGHT_3: { marginRight: SPACINGS.spacing_horizontal_3 },
        cRIGHT_4: { marginRight: SPACINGS.spacing_horizontal_4 },
        cRIGHT_5: { marginRight: SPACINGS.spacing_horizontal_5 },
        cRIGHT_6: { marginRight: SPACINGS.spacing_horizontal_6 },
    },

    oPADDING: {
        c1: { padding: `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}` },
        c2: { padding: `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}` },
        c3: { padding: `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}` },
        c4: { padding: `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}` },
        c5: { padding: `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}` },
        c6: { padding: `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}` },

        cTOP_1: { paddingTop: SPACINGS.spacing_vertical_1 },
        cTOP_2: { paddingTop: SPACINGS.spacing_vertical_2 },
        cTOP_3: { paddingTop: SPACINGS.spacing_vertical_3 },
        cTOP_4: { paddingTop: SPACINGS.spacing_vertical_4 },
        cTOP_5: { paddingTop: SPACINGS.spacing_vertical_5 },
        cTOP_6: { paddingTop: SPACINGS.spacing_vertical_6 },

        cBOTTOM_1: { paddingBottom: SPACINGS.spacing_vertical_1 },
        cBOTTOM_2: { paddingBottom: SPACINGS.spacing_vertical_2 },
        cBOTTOM_3: { paddingBottom: SPACINGS.spacing_vertical_3 },
        cBOTTOM_4: { paddingBottom: SPACINGS.spacing_vertical_4 },
        cBOTTOM_5: { paddingBottom: SPACINGS.spacing_vertical_5 },
        cBOTTOM_6: { paddingBottom: SPACINGS.spacing_vertical_6 },

        cLEFT_1: { paddingLeft: SPACINGS.spacing_horizontal_1 },
        cLEFT_2: { paddingLeft: SPACINGS.spacing_horizontal_2 },
        cLEFT_3: { paddingLeft: SPACINGS.spacing_horizontal_3 },
        cLEFT_4: { paddingLeft: SPACINGS.spacing_horizontal_4 },
        cLEFT_5: { paddingLeft: SPACINGS.spacing_horizontal_5 },
        cLEFT_6: { paddingLeft: SPACINGS.spacing_horizontal_6 },

        cRIGHT_1: { paddingRight: SPACINGS.spacing_horizontal_1 },
        cRIGHT_2: { paddingRight: SPACINGS.spacing_horizontal_2 },
        cRIGHT_3: { paddingRight: SPACINGS.spacing_horizontal_3 },
        cRIGHT_4: { paddingRight: SPACINGS.spacing_horizontal_4 },
        cRIGHT_5: { paddingRight: SPACINGS.spacing_horizontal_5 },
        cRIGHT_6: { paddingRight: SPACINGS.spacing_horizontal_6 },
    },
}
export const STYLE_HEAVENLY_EARTH = {

    uUNIVERSAL: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
    },

    tBODY: {
        textAlign: "justify",
        overflowWrap: "break-word",
        textWrap: "pretty",
        hyphens: "auto",
        fontKerning: "normal",
        wordSpacing: "-0.05em",
        letterSpacing: "-0.01em",
        fontStyle: "normal",
        fontSize: "2rem",
        lineHeight: "1",
        color: "#fff7cc",
        backgroundColor: "#000000",
        fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM, sans-serif",
    },

    oNAVIGATION: {

    },

    oHEADING: {

        cTITLE: {
            color: "#ffe52c",
            fontFamily: "FONT_TEXT_CINZEL_DECORATIVE_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(2rem, 8vw, 6rem)",
            lineHeight: "1",
            textAlign: "center",
        },

        cUPPER: {
            color: "#f8bf2e",
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.75rem, 6vw, 4rem)",
            lineHeight: "1",
            textAlign: "center",
        },

        cMIDDLE: {
            color: "#f3c868",
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            lineHeight: "1",
            textAlign: "center",
        },

        cLOWER: {
            color: "#faf8a2",
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1.25rem, 4vw, 2.5rem)",
            lineHeight: "1",
            textAlign: "center",
        },
    },

    oTEXT: {

        cGENERAL: {
            color: "#fff7cc",
            fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "clamp(1rem, 3vw, 2rem)",
            lineHeight: "1.5",
            textAlign: "justify",
        },
    },

    oICON: {

        cGENERAL: {
            fontStyle: "normal",
            textTransform: "none",
            verticalAlign: "top",
            overflowWrap: "normal",
            whiteSpace: "nowrap",
            direction: "ltr",
            textRendering: "optimizeLegibility",
            fontFeatureSettings: "liga",
            color: "inherit",
            fontFamily: "FONT_ICON_MATERIAL",
            fontSize: "inherit",
            lineHeight: "inherit",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: "",
        },
    },

    oFORM: {

        cSTATIC_COLUMN_START: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_COLUMN_CENTER: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_COLUMN_END: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_ROW_START: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_ROW_CENTER: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cSTATIC_ROW_END: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_COLUMN_START: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_COLUMN_CENTER: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_COLUMN_END: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_ROW_START: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_ROW_CENTER: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },

        cFIXED_ROW_END: {
            display: "",
            position: "",
            flexDirection: "",
            alignItems: "",
        },
    },

    oMARGIN: {

        cAUTO: { margin: "auto" },
        c1: { margin: `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}` },
        c2: { margin: `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}` },
        c3: { margin: `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}` },
        c4: { margin: `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}` },
        c5: { margin: `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}` },
        c6: { margin: `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}` },

        cTOP_AUTO: { marginTop: "auto" },
        cTOP_1: { marginTop: SPACINGS.spacing_vertical_1 },
        cTOP_2: { marginTop: SPACINGS.spacing_vertical_2 },
        cTOP_3: { marginTop: SPACINGS.spacing_vertical_3 },
        cTOP_4: { marginTop: SPACINGS.spacing_vertical_4 },
        cTOP_5: { marginTop: SPACINGS.spacing_vertical_5 },
        cTOP_6: { marginTop: SPACINGS.spacing_vertical_6 },

        cBOTTOM_AUTO: { marginBottom: "auto" },
        cBOTTOM_1: { marginBottom: SPACINGS.spacing_vertical_1 },
        cBOTTOM_2: { marginBottom: SPACINGS.spacing_vertical_2 },
        cBOTTOM_3: { marginBottom: SPACINGS.spacing_vertical_3 },
        cBOTTOM_4: { marginBottom: SPACINGS.spacing_vertical_4 },
        cBOTTOM_5: { marginBottom: SPACINGS.spacing_vertical_5 },
        cBOTTOM_6: { marginBottom: SPACINGS.spacing_vertical_6 },

        cLEFT_AUTO: { marginLeft: "auto" },
        cLEFT_1: { marginLeft: SPACINGS.spacing_horizontal_1 },
        cLEFT_2: { marginLeft: SPACINGS.spacing_horizontal_2 },
        cLEFT_3: { marginLeft: SPACINGS.spacing_horizontal_3 },
        cLEFT_4: { marginLeft: SPACINGS.spacing_horizontal_4 },
        cLEFT_5: { marginLeft: SPACINGS.spacing_horizontal_5 },
        cLEFT_6: { marginLeft: SPACINGS.spacing_horizontal_6 },

        cRIGHT_AUTO: { marginRight: "auto" },
        cRIGHT_1: { marginRight: SPACINGS.spacing_horizontal_1 },
        cRIGHT_2: { marginRight: SPACINGS.spacing_horizontal_2 },
        cRIGHT_3: { marginRight: SPACINGS.spacing_horizontal_3 },
        cRIGHT_4: { marginRight: SPACINGS.spacing_horizontal_4 },
        cRIGHT_5: { marginRight: SPACINGS.spacing_horizontal_5 },
        cRIGHT_6: { marginRight: SPACINGS.spacing_horizontal_6 },
    },

    oPADDING: {
        c1: { padding: `${SPACINGS.spacing_vertical_1} ${SPACINGS.spacing_horizontal_1}` },
        c2: { padding: `${SPACINGS.spacing_vertical_2} ${SPACINGS.spacing_horizontal_2}` },
        c3: { padding: `${SPACINGS.spacing_vertical_3} ${SPACINGS.spacing_horizontal_3}` },
        c4: { padding: `${SPACINGS.spacing_vertical_4} ${SPACINGS.spacing_horizontal_4}` },
        c5: { padding: `${SPACINGS.spacing_vertical_5} ${SPACINGS.spacing_horizontal_5}` },
        c6: { padding: `${SPACINGS.spacing_vertical_6} ${SPACINGS.spacing_horizontal_6}` },

        cTOP_1: { paddingTop: SPACINGS.spacing_vertical_1 },
        cTOP_2: { paddingTop: SPACINGS.spacing_vertical_2 },
        cTOP_3: { paddingTop: SPACINGS.spacing_vertical_3 },
        cTOP_4: { paddingTop: SPACINGS.spacing_vertical_4 },
        cTOP_5: { paddingTop: SPACINGS.spacing_vertical_5 },
        cTOP_6: { paddingTop: SPACINGS.spacing_vertical_6 },

        cBOTTOM_1: { paddingBottom: SPACINGS.spacing_vertical_1 },
        cBOTTOM_2: { paddingBottom: SPACINGS.spacing_vertical_2 },
        cBOTTOM_3: { paddingBottom: SPACINGS.spacing_vertical_3 },
        cBOTTOM_4: { paddingBottom: SPACINGS.spacing_vertical_4 },
        cBOTTOM_5: { paddingBottom: SPACINGS.spacing_vertical_5 },
        cBOTTOM_6: { paddingBottom: SPACINGS.spacing_vertical_6 },

        cLEFT_1: { paddingLeft: SPACINGS.spacing_horizontal_1 },
        cLEFT_2: { paddingLeft: SPACINGS.spacing_horizontal_2 },
        cLEFT_3: { paddingLeft: SPACINGS.spacing_horizontal_3 },
        cLEFT_4: { paddingLeft: SPACINGS.spacing_horizontal_4 },
        cLEFT_5: { paddingLeft: SPACINGS.spacing_horizontal_5 },
        cLEFT_6: { paddingLeft: SPACINGS.spacing_horizontal_6 },

        cRIGHT_1: { paddingRight: SPACINGS.spacing_horizontal_1 },
        cRIGHT_2: { paddingRight: SPACINGS.spacing_horizontal_2 },
        cRIGHT_3: { paddingRight: SPACINGS.spacing_horizontal_3 },
        cRIGHT_4: { paddingRight: SPACINGS.spacing_horizontal_4 },
        cRIGHT_5: { paddingRight: SPACINGS.spacing_horizontal_5 },
        cRIGHT_6: { paddingRight: SPACINGS.spacing_horizontal_6 },
    },
}
