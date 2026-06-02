// THINGS TO KNOW FOR TEMPLATES
// o = Object that is holding selectors.
// u = Universal Selector
// t = Tag Selector
// i = ID Selector
// c = Class Selector

// Color palette that will be used across the entire site.
// The lower the number, the more it's used.  The higher the number, the less it's used.
const PALETTE = {
    1: "#FAF7F2",
    1.5: "#FCF7F2",
    2: "#F1EBE1",
    3: "#426135",
    4: "#2C4422",
    5: "#E9E7DC",
    5.5: "#DAD2C3",
    6: "#EFECE8",
    7: "#79B200",
} as const;

// Used to create new mins and maxes for sizing properties when the viewport size changes.
// The lower the anchor number, the smaller the size.  The higher the anchor number, the bigger the size.
// Properties go from 1 to 100.
//
// This is not exported as its main purpose is to define the SIZES object that is exported.  ANCHORS is nothing
// more than a helper for SIZES.
const ANCHORS = {

    // SCALE COMMENTS?
    // They are present to give an idea of how you should use anchors/sizes, don't feel the need to follow them.
    // Use whatever anchor/size you want for w/e thing you are making.

    // SPECIAL ANCHORS
    // Used to dictate how all the anchors impact the SIZES object.
    // Values are set to 3% of the viewport's dimensions since it appears to be a special value in UX.  The 3% rule works
    // kind of like how pi and euler's number do in mathematics, they explain a lot of things and a lot of observations
    // end up in pi or euler's number.
    vertical: "3vh",
    horizontal: "3vw",

    // HAIRLINE SCALE : 1-10 — Pixel-level precision for hairlines, micro-borders, and rendering artifacts.
    min_1: "0.005rem",
    max_1: "0.01rem",

    min_2: "0.0075rem",
    max_2: "0.015rem",

    min_3: "0.01rem",
    max_3: "0.02rem",

    min_4: "0.015rem",
    max_4: "0.03rem",

    min_5: "0.02rem",
    max_5: "0.04rem",

    min_6: "0.025rem",
    max_6: "0.05rem",

    min_7: "0.03rem",
    max_7: "0.06rem",

    min_8: "0.04rem",
    max_8: "0.08rem",

    min_9: "0.05rem",
    max_9: "0.1rem",

    min_10: "0.0625rem",
    max_10: "0.125rem",

    // BORDER SCALE : 11-29 — Border widths, outlines, dividers, and subtle shadows.
    min_11: "0.01953125rem",
    max_11: "0.05078125rem",

    min_12: "0.0234375rem",
    max_12: "0.0546875rem",

    min_13: "0.02734375rem",
    max_13: "0.05859375rem",

    min_14: "0.03125rem",
    max_14: "0.0625rem",

    min_15: "0.03515625rem",
    max_15: "0.0703125rem",

    min_16: "0.0390625rem",
    max_16: "0.078125rem",

    min_17: "0.04296875rem",
    max_17: "0.0859375rem",

    min_18: "0.046875rem",
    max_18: "0.09375rem",

    min_19: "0.05078125rem",
    max_19: "0.1015625rem",

    min_20: "0.0546875rem",
    max_20: "0.109375rem",

    min_21: "0.05859375rem",
    max_21: "0.1171875rem",

    min_22: "0.0625rem",
    max_22: "0.125rem",

    min_23: "0.078125rem",
    max_23: "0.15625rem",

    min_24: "0.09375rem",
    max_24: "0.1875rem",

    min_25: "0.1015625rem",
    max_25: "0.203125rem",

    min_26: "0.109375rem",
    max_26: "0.21875rem",

    min_27: "0.1171875rem",
    max_27: "0.234375rem",

    min_28: "0.125rem",
    max_28: "0.25rem",

    min_29: "0.140625rem",
    max_29: "0.28125rem",

    // DETAIL SCALE : 30-45 — Fine spacing adjustments, icon sizing, and small decorative elements.
    min_30: "0.15625rem",
    max_30: "0.3125rem",

    min_31: "0.171875rem",
    max_31: "0.34375rem",

    min_32: "0.1875rem",
    max_32: "0.375rem",

    min_33: "0.203125rem",
    max_33: "0.40625rem",

    min_34: "0.21875rem",
    max_34: "0.4375rem",

    min_35: "0.234375rem",
    max_35: "0.46875rem",

    min_36: "0.25rem",
    max_36: "0.5rem",

    min_37: "0.265625rem",
    max_37: "0.53125rem",

    min_38: "0.28125rem",
    max_38: "0.5625rem",

    min_39: "0.296875rem",
    max_39: "0.59375rem",

    min_40: "0.3125rem",
    max_40: "0.625rem",

    min_41: "0.328125rem",
    max_41: "0.65625rem",

    min_42: "0.34375rem",
    max_42: "0.6875rem",

    min_43: "0.359375rem",
    max_43: "0.71875rem",

    min_44: "0.375rem",
    max_44: "0.75rem",

    min_45: "0.390625rem",
    max_45: "0.78125rem",

    // SPACING SCALE : 46-65 — Margins, paddings, gaps, and gutters between elements.
    min_46: "0.40625rem",
    max_46: "0.8125rem",

    min_47: "0.421875rem",
    max_47: "0.84375rem",

    min_48: "0.4375rem",
    max_48: "0.875rem",

    min_49: "0.453125rem",
    max_49: "0.90625rem",

    min_50: "0.46875rem",
    max_50: "0.9375rem",

    min_51: "0.484375rem",
    max_51: "0.96875rem",

    min_52: "0.5rem",
    max_52: "1rem",

    min_53: "0.53125rem",
    max_53: "1.0625rem",

    min_54: "0.5625rem",
    max_54: "1.125rem",

    min_55: "0.59375rem",
    max_55: "1.1875rem",

    min_56: "0.625rem",
    max_56: "1.25rem",

    min_57: "0.65625rem",
    max_57: "1.3125rem",

    min_58: "0.6875rem",
    max_58: "1.375rem",

    min_59: "0.71875rem",
    max_59: "1.4375rem",

    min_60: "0.75rem",
    max_60: "1.5rem",

    min_61: "0.8125rem",
    max_61: "1.625rem",

    min_62: "0.875rem",
    max_62: "1.75rem",

    min_63: "0.9375rem",
    max_63: "1.875rem",

    min_64: "1rem",
    max_64: "2rem",

    min_65: "1.0625rem",
    max_65: "2.125rem",

    // TYPOGRAPHY SCALE : 66-82 — Headings, subheadings, body text, labels, and captions.
    min_66: "1.125rem",
    max_66: "2.25rem",

    min_67: "1.1875rem",
    max_67: "2.375rem",

    min_68: "1.25rem",
    max_68: "2.5rem",

    min_69: "1.3125rem",
    max_69: "2.625rem",

    min_70: "1.375rem",
    max_70: "2.75rem",

    min_71: "1.4375rem",
    max_71: "2.875rem",

    min_72: "1.5rem",
    max_72: "3rem",

    min_73: "1.625rem",
    max_73: "3.25rem",

    min_74: "1.75rem",
    max_74: "3.5rem",

    min_75: "1.875rem",
    max_75: "3.75rem",

    min_76: "2rem",
    max_76: "4rem",

    min_77: "2.25rem",
    max_77: "4.5rem",

    min_78: "2.5rem",
    max_78: "5rem",

    min_79: "2.75rem",
    max_79: "5.5rem",

    min_80: "3rem",
    max_80: "6rem",

    min_81: "3.5rem",
    max_81: "7rem",

    min_82: "4rem",
    max_82: "8rem",

    // COMPONENT SCALE : 83-90 — Buttons, input fields, images, icons, and mid-sized UI elements.
    min_83: "4.5rem",
    max_83: "9rem",

    min_84: "5rem",
    max_84: "10rem",

    min_85: "5.5rem",
    max_85: "11rem",

    min_86: "6rem",
    max_86: "12rem",

    min_87: "7rem",
    max_87: "14rem",

    min_88: "8rem",
    max_88: "16rem",

    min_89: "9rem",
    max_89: "18rem",

    min_90: "10rem",
    max_90: "20rem",

    // CONTAINER SCALE : 91-95 — Panels, cards, sidebars, modals, and large UI blocks.
    min_91: "12rem",
    max_91: "24rem",

    min_92: "14rem",
    max_92: "28rem",

    min_93: "16rem",
    max_93: "32rem",

    min_94: "20rem",
    max_94: "40rem",

    min_95: "24rem",
    max_95: "48rem",

    // LAYOUT SCALE : 96-100 — Full page sections, hero containers, and major layout regions.
    min_96: "32rem",
    max_96: "64rem",

    min_97: "48rem",
    max_97: "96rem",

    min_98: "64rem",
    max_98: "128rem",

    min_99: "96rem",
    max_99: "192rem",

    min_100: "128rem",
    max_100: "256rem",
} as const;

// Holds vertical and horizontal sizes that are relative to the viewport's dimensions.  Properties of the object
// can be used to define the sizing of anything - spacing, lettering, boxes, etcetera - to help ensure that all elements
// of pages are consistent with how their sizing is defined.  Also, the object makes sizing easy to understand if used properly.
//
// To use properly one must only use the SIZES properties to define any declared size (maybe except for borders, up to you).
// This will ensure that everything is relative to the viewport dimensions, doing so will force all elements of a page to
// change in size when the viewport scales (facilitates for all screen dimensions).
//
// The lower the size number, the smaller the outputted size.  The higher the size number, the bigger the outputted size.
// Properties go from 1 to 100.
//
// Uses the non-exported ANCHORS object to help define different sizes.
export const SIZES = {

    // SCALE COMMENTS?
    // They are present to give an idea of how you should use anchors/sizes, don't feel the need to follow them.
    // Use whatever anchor/size you want for w/e thing you are making.

    // VERTICAL HAIRLINE SCALE : 1-10 — Pixel-level precision for hairlines, micro-borders, and rendering artifacts.
    vertical_1:  `clamp(${ANCHORS.min_1},  ${ANCHORS.vertical}, ${ANCHORS.max_1})`,
    vertical_2:  `clamp(${ANCHORS.min_2},  ${ANCHORS.vertical}, ${ANCHORS.max_2})`,
    vertical_3:  `clamp(${ANCHORS.min_3},  ${ANCHORS.vertical}, ${ANCHORS.max_3})`,
    vertical_4:  `clamp(${ANCHORS.min_4},  ${ANCHORS.vertical}, ${ANCHORS.max_4})`,
    vertical_5:  `clamp(${ANCHORS.min_5},  ${ANCHORS.vertical}, ${ANCHORS.max_5})`,
    vertical_6:  `clamp(${ANCHORS.min_6},  ${ANCHORS.vertical}, ${ANCHORS.max_6})`,
    vertical_7:  `clamp(${ANCHORS.min_7},  ${ANCHORS.vertical}, ${ANCHORS.max_7})`,
    vertical_8:  `clamp(${ANCHORS.min_8},  ${ANCHORS.vertical}, ${ANCHORS.max_8})`,
    vertical_9:  `clamp(${ANCHORS.min_9},  ${ANCHORS.vertical}, ${ANCHORS.max_9})`,
    vertical_10: `clamp(${ANCHORS.min_10}, ${ANCHORS.vertical}, ${ANCHORS.max_10})`,

    // VERTICAL BORDER SCALE : 11-29 — Border widths, outlines, dividers, and subtle shadows.
    vertical_11: `clamp(${ANCHORS.min_11}, ${ANCHORS.vertical}, ${ANCHORS.max_11})`,
    vertical_12: `clamp(${ANCHORS.min_12}, ${ANCHORS.vertical}, ${ANCHORS.max_12})`,
    vertical_13: `clamp(${ANCHORS.min_13}, ${ANCHORS.vertical}, ${ANCHORS.max_13})`,
    vertical_14: `clamp(${ANCHORS.min_14}, ${ANCHORS.vertical}, ${ANCHORS.max_14})`,
    vertical_15: `clamp(${ANCHORS.min_15}, ${ANCHORS.vertical}, ${ANCHORS.max_15})`,
    vertical_16: `clamp(${ANCHORS.min_16}, ${ANCHORS.vertical}, ${ANCHORS.max_16})`,
    vertical_17: `clamp(${ANCHORS.min_17}, ${ANCHORS.vertical}, ${ANCHORS.max_17})`,
    vertical_18: `clamp(${ANCHORS.min_18}, ${ANCHORS.vertical}, ${ANCHORS.max_18})`,
    vertical_19: `clamp(${ANCHORS.min_19}, ${ANCHORS.vertical}, ${ANCHORS.max_19})`,
    vertical_20: `clamp(${ANCHORS.min_20}, ${ANCHORS.vertical}, ${ANCHORS.max_20})`,
    vertical_21: `clamp(${ANCHORS.min_21}, ${ANCHORS.vertical}, ${ANCHORS.max_21})`,
    vertical_22: `clamp(${ANCHORS.min_22}, ${ANCHORS.vertical}, ${ANCHORS.max_22})`,
    vertical_23: `clamp(${ANCHORS.min_23}, ${ANCHORS.vertical}, ${ANCHORS.max_23})`,
    vertical_24: `clamp(${ANCHORS.min_24}, ${ANCHORS.vertical}, ${ANCHORS.max_24})`,
    vertical_25: `clamp(${ANCHORS.min_25}, ${ANCHORS.vertical}, ${ANCHORS.max_25})`,
    vertical_26: `clamp(${ANCHORS.min_26}, ${ANCHORS.vertical}, ${ANCHORS.max_26})`,
    vertical_27: `clamp(${ANCHORS.min_27}, ${ANCHORS.vertical}, ${ANCHORS.max_27})`,
    vertical_28: `clamp(${ANCHORS.min_28}, ${ANCHORS.vertical}, ${ANCHORS.max_28})`,
    vertical_29: `clamp(${ANCHORS.min_29}, ${ANCHORS.vertical}, ${ANCHORS.max_29})`,

    // VERTICAL DETAIL SCALE : 30-45 — Fine spacing adjustments, icon sizing, and small decorative elements.
    vertical_30: `clamp(${ANCHORS.min_30}, ${ANCHORS.vertical}, ${ANCHORS.max_30})`,
    vertical_31: `clamp(${ANCHORS.min_31}, ${ANCHORS.vertical}, ${ANCHORS.max_31})`,
    vertical_32: `clamp(${ANCHORS.min_32}, ${ANCHORS.vertical}, ${ANCHORS.max_32})`,
    vertical_33: `clamp(${ANCHORS.min_33}, ${ANCHORS.vertical}, ${ANCHORS.max_33})`,
    vertical_34: `clamp(${ANCHORS.min_34}, ${ANCHORS.vertical}, ${ANCHORS.max_34})`,
    vertical_35: `clamp(${ANCHORS.min_35}, ${ANCHORS.vertical}, ${ANCHORS.max_35})`,
    vertical_36: `clamp(${ANCHORS.min_36}, ${ANCHORS.vertical}, ${ANCHORS.max_36})`,
    vertical_37: `clamp(${ANCHORS.min_37}, ${ANCHORS.vertical}, ${ANCHORS.max_37})`,
    vertical_38: `clamp(${ANCHORS.min_38}, ${ANCHORS.vertical}, ${ANCHORS.max_38})`,
    vertical_39: `clamp(${ANCHORS.min_39}, ${ANCHORS.vertical}, ${ANCHORS.max_39})`,
    vertical_40: `clamp(${ANCHORS.min_40}, ${ANCHORS.vertical}, ${ANCHORS.max_40})`,
    vertical_41: `clamp(${ANCHORS.min_41}, ${ANCHORS.vertical}, ${ANCHORS.max_41})`,
    vertical_42: `clamp(${ANCHORS.min_42}, ${ANCHORS.vertical}, ${ANCHORS.max_42})`,
    vertical_43: `clamp(${ANCHORS.min_43}, ${ANCHORS.vertical}, ${ANCHORS.max_43})`,
    vertical_44: `clamp(${ANCHORS.min_44}, ${ANCHORS.vertical}, ${ANCHORS.max_44})`,
    vertical_45: `clamp(${ANCHORS.min_45}, ${ANCHORS.vertical}, ${ANCHORS.max_45})`,

    // VERTICAL SPACING SCALE : 46-65 — Margins, paddings, gaps, and gutters between elements.
    vertical_46: `clamp(${ANCHORS.min_46}, ${ANCHORS.vertical}, ${ANCHORS.max_46})`,
    vertical_47: `clamp(${ANCHORS.min_47}, ${ANCHORS.vertical}, ${ANCHORS.max_47})`,
    vertical_48: `clamp(${ANCHORS.min_48}, ${ANCHORS.vertical}, ${ANCHORS.max_48})`,
    vertical_49: `clamp(${ANCHORS.min_49}, ${ANCHORS.vertical}, ${ANCHORS.max_49})`,
    vertical_50: `clamp(${ANCHORS.min_50}, ${ANCHORS.vertical}, ${ANCHORS.max_50})`,
    vertical_51: `clamp(${ANCHORS.min_51}, ${ANCHORS.vertical}, ${ANCHORS.max_51})`,
    vertical_52: `clamp(${ANCHORS.min_52}, ${ANCHORS.vertical}, ${ANCHORS.max_52})`,
    vertical_53: `clamp(${ANCHORS.min_53}, ${ANCHORS.vertical}, ${ANCHORS.max_53})`,
    vertical_54: `clamp(${ANCHORS.min_54}, ${ANCHORS.vertical}, ${ANCHORS.max_54})`,
    vertical_55: `clamp(${ANCHORS.min_55}, ${ANCHORS.vertical}, ${ANCHORS.max_55})`,
    vertical_56: `clamp(${ANCHORS.min_56}, ${ANCHORS.vertical}, ${ANCHORS.max_56})`,
    vertical_57: `clamp(${ANCHORS.min_57}, ${ANCHORS.vertical}, ${ANCHORS.max_57})`,
    vertical_58: `clamp(${ANCHORS.min_58}, ${ANCHORS.vertical}, ${ANCHORS.max_58})`,
    vertical_59: `clamp(${ANCHORS.min_59}, ${ANCHORS.vertical}, ${ANCHORS.max_59})`,
    vertical_60: `clamp(${ANCHORS.min_60}, ${ANCHORS.vertical}, ${ANCHORS.max_60})`,
    vertical_61: `clamp(${ANCHORS.min_61}, ${ANCHORS.vertical}, ${ANCHORS.max_61})`,
    vertical_62: `clamp(${ANCHORS.min_62}, ${ANCHORS.vertical}, ${ANCHORS.max_62})`,
    vertical_63: `clamp(${ANCHORS.min_63}, ${ANCHORS.vertical}, ${ANCHORS.max_63})`,
    vertical_64: `clamp(${ANCHORS.min_64}, ${ANCHORS.vertical}, ${ANCHORS.max_64})`,
    vertical_65: `clamp(${ANCHORS.min_65}, ${ANCHORS.vertical}, ${ANCHORS.max_65})`,

    // VERTICAL TYPOGRAPHY SCALE : 66-82 — Headings, subheadings, body text, labels, and captions.
    vertical_66: `clamp(${ANCHORS.min_66}, ${ANCHORS.vertical}, ${ANCHORS.max_66})`,
    vertical_67: `clamp(${ANCHORS.min_67}, ${ANCHORS.vertical}, ${ANCHORS.max_67})`,
    vertical_68: `clamp(${ANCHORS.min_68}, ${ANCHORS.vertical}, ${ANCHORS.max_68})`,
    vertical_69: `clamp(${ANCHORS.min_69}, ${ANCHORS.vertical}, ${ANCHORS.max_69})`,
    vertical_70: `clamp(${ANCHORS.min_70}, ${ANCHORS.vertical}, ${ANCHORS.max_70})`,
    vertical_71: `clamp(${ANCHORS.min_71}, ${ANCHORS.vertical}, ${ANCHORS.max_71})`,
    vertical_72: `clamp(${ANCHORS.min_72}, ${ANCHORS.vertical}, ${ANCHORS.max_72})`,
    vertical_73: `clamp(${ANCHORS.min_73}, ${ANCHORS.vertical}, ${ANCHORS.max_73})`,
    vertical_74: `clamp(${ANCHORS.min_74}, ${ANCHORS.vertical}, ${ANCHORS.max_74})`,
    vertical_75: `clamp(${ANCHORS.min_75}, ${ANCHORS.vertical}, ${ANCHORS.max_75})`,
    vertical_76: `clamp(${ANCHORS.min_76}, ${ANCHORS.vertical}, ${ANCHORS.max_76})`,
    vertical_77: `clamp(${ANCHORS.min_77}, ${ANCHORS.vertical}, ${ANCHORS.max_77})`,
    vertical_78: `clamp(${ANCHORS.min_78}, ${ANCHORS.vertical}, ${ANCHORS.max_78})`,
    vertical_79: `clamp(${ANCHORS.min_79}, ${ANCHORS.vertical}, ${ANCHORS.max_79})`,
    vertical_80: `clamp(${ANCHORS.min_80}, ${ANCHORS.vertical}, ${ANCHORS.max_80})`,
    vertical_81: `clamp(${ANCHORS.min_81}, ${ANCHORS.vertical}, ${ANCHORS.max_81})`,
    vertical_82: `clamp(${ANCHORS.min_82}, ${ANCHORS.vertical}, ${ANCHORS.max_82})`,

    // VERTICAL COMPONENT SCALE : 83-90 — Buttons, input fields, images, icons, and mid-sized UI elements.
    vertical_83: `clamp(${ANCHORS.min_83}, ${ANCHORS.vertical}, ${ANCHORS.max_83})`,
    vertical_84: `clamp(${ANCHORS.min_84}, ${ANCHORS.vertical}, ${ANCHORS.max_84})`,
    vertical_85: `clamp(${ANCHORS.min_85}, ${ANCHORS.vertical}, ${ANCHORS.max_85})`,
    vertical_86: `clamp(${ANCHORS.min_86}, ${ANCHORS.vertical}, ${ANCHORS.max_86})`,
    vertical_87: `clamp(${ANCHORS.min_87}, ${ANCHORS.vertical}, ${ANCHORS.max_87})`,
    vertical_88: `clamp(${ANCHORS.min_88}, ${ANCHORS.vertical}, ${ANCHORS.max_88})`,
    vertical_89: `clamp(${ANCHORS.min_89}, ${ANCHORS.vertical}, ${ANCHORS.max_89})`,
    vertical_90: `clamp(${ANCHORS.min_90}, ${ANCHORS.vertical}, ${ANCHORS.max_90})`,

    // VERTICAL CONTAINER SCALE : 91-95 — Panels, cards, sidebars, modals, and large UI blocks.
    vertical_91: `clamp(${ANCHORS.min_91}, ${ANCHORS.vertical}, ${ANCHORS.max_91})`,
    vertical_92: `clamp(${ANCHORS.min_92}, ${ANCHORS.vertical}, ${ANCHORS.max_92})`,
    vertical_93: `clamp(${ANCHORS.min_93}, ${ANCHORS.vertical}, ${ANCHORS.max_93})`,
    vertical_94: `clamp(${ANCHORS.min_94}, ${ANCHORS.vertical}, ${ANCHORS.max_94})`,
    vertical_95: `clamp(${ANCHORS.min_95}, ${ANCHORS.vertical}, ${ANCHORS.max_95})`,

    // VERTICAL LAYOUT SCALE : 96-100 — Full page sections, hero containers, and major layout regions.
    vertical_96:  `clamp(${ANCHORS.min_96},  ${ANCHORS.vertical}, ${ANCHORS.max_96})`,
    vertical_97:  `clamp(${ANCHORS.min_97},  ${ANCHORS.vertical}, ${ANCHORS.max_97})`,
    vertical_98:  `clamp(${ANCHORS.min_98},  ${ANCHORS.vertical}, ${ANCHORS.max_98})`,
    vertical_99:  `clamp(${ANCHORS.min_99},  ${ANCHORS.vertical}, ${ANCHORS.max_99})`,
    vertical_100: `clamp(${ANCHORS.min_100}, ${ANCHORS.vertical}, ${ANCHORS.max_100})`,

    // HORIZONTAL HAIRLINE SCALE : 1-10 — Pixel-level precision for hairlines, micro-borders, and rendering artifacts.
    horizontal_1:  `clamp(${ANCHORS.min_1},  ${ANCHORS.horizontal}, ${ANCHORS.max_1})`,
    horizontal_2:  `clamp(${ANCHORS.min_2},  ${ANCHORS.horizontal}, ${ANCHORS.max_2})`,
    horizontal_3:  `clamp(${ANCHORS.min_3},  ${ANCHORS.horizontal}, ${ANCHORS.max_3})`,
    horizontal_4:  `clamp(${ANCHORS.min_4},  ${ANCHORS.horizontal}, ${ANCHORS.max_4})`,
    horizontal_5:  `clamp(${ANCHORS.min_5},  ${ANCHORS.horizontal}, ${ANCHORS.max_5})`,
    horizontal_6:  `clamp(${ANCHORS.min_6},  ${ANCHORS.horizontal}, ${ANCHORS.max_6})`,
    horizontal_7:  `clamp(${ANCHORS.min_7},  ${ANCHORS.horizontal}, ${ANCHORS.max_7})`,
    horizontal_8:  `clamp(${ANCHORS.min_8},  ${ANCHORS.horizontal}, ${ANCHORS.max_8})`,
    horizontal_9:  `clamp(${ANCHORS.min_9},  ${ANCHORS.horizontal}, ${ANCHORS.max_9})`,
    horizontal_10: `clamp(${ANCHORS.min_10}, ${ANCHORS.horizontal}, ${ANCHORS.max_10})`,

    // HORIZONTAL BORDER SCALE : 11-29 — Border widths, outlines, dividers, and subtle shadows.
    horizontal_11: `clamp(${ANCHORS.min_11}, ${ANCHORS.horizontal}, ${ANCHORS.max_11})`,
    horizontal_12: `clamp(${ANCHORS.min_12}, ${ANCHORS.horizontal}, ${ANCHORS.max_12})`,
    horizontal_13: `clamp(${ANCHORS.min_13}, ${ANCHORS.horizontal}, ${ANCHORS.max_13})`,
    horizontal_14: `clamp(${ANCHORS.min_14}, ${ANCHORS.horizontal}, ${ANCHORS.max_14})`,
    horizontal_15: `clamp(${ANCHORS.min_15}, ${ANCHORS.horizontal}, ${ANCHORS.max_15})`,
    horizontal_16: `clamp(${ANCHORS.min_16}, ${ANCHORS.horizontal}, ${ANCHORS.max_16})`,
    horizontal_17: `clamp(${ANCHORS.min_17}, ${ANCHORS.horizontal}, ${ANCHORS.max_17})`,
    horizontal_18: `clamp(${ANCHORS.min_18}, ${ANCHORS.horizontal}, ${ANCHORS.max_18})`,
    horizontal_19: `clamp(${ANCHORS.min_19}, ${ANCHORS.horizontal}, ${ANCHORS.max_19})`,
    horizontal_20: `clamp(${ANCHORS.min_20}, ${ANCHORS.horizontal}, ${ANCHORS.max_20})`,
    horizontal_21: `clamp(${ANCHORS.min_21}, ${ANCHORS.horizontal}, ${ANCHORS.max_21})`,
    horizontal_22: `clamp(${ANCHORS.min_22}, ${ANCHORS.horizontal}, ${ANCHORS.max_22})`,
    horizontal_23: `clamp(${ANCHORS.min_23}, ${ANCHORS.horizontal}, ${ANCHORS.max_23})`,
    horizontal_24: `clamp(${ANCHORS.min_24}, ${ANCHORS.horizontal}, ${ANCHORS.max_24})`,
    horizontal_25: `clamp(${ANCHORS.min_25}, ${ANCHORS.horizontal}, ${ANCHORS.max_25})`,
    horizontal_26: `clamp(${ANCHORS.min_26}, ${ANCHORS.horizontal}, ${ANCHORS.max_26})`,
    horizontal_27: `clamp(${ANCHORS.min_27}, ${ANCHORS.horizontal}, ${ANCHORS.max_27})`,
    horizontal_28: `clamp(${ANCHORS.min_28}, ${ANCHORS.horizontal}, ${ANCHORS.max_28})`,
    horizontal_29: `clamp(${ANCHORS.min_29}, ${ANCHORS.horizontal}, ${ANCHORS.max_29})`,

    // HORIZONTAL DETAIL SCALE : 30-45 — Fine spacing adjustments, icon sizing, and small decorative elements.
    horizontal_30: `clamp(${ANCHORS.min_30}, ${ANCHORS.horizontal}, ${ANCHORS.max_30})`,
    horizontal_31: `clamp(${ANCHORS.min_31}, ${ANCHORS.horizontal}, ${ANCHORS.max_31})`,
    horizontal_32: `clamp(${ANCHORS.min_32}, ${ANCHORS.horizontal}, ${ANCHORS.max_32})`,
    horizontal_33: `clamp(${ANCHORS.min_33}, ${ANCHORS.horizontal}, ${ANCHORS.max_33})`,
    horizontal_34: `clamp(${ANCHORS.min_34}, ${ANCHORS.horizontal}, ${ANCHORS.max_34})`,
    horizontal_35: `clamp(${ANCHORS.min_35}, ${ANCHORS.horizontal}, ${ANCHORS.max_35})`,
    horizontal_36: `clamp(${ANCHORS.min_36}, ${ANCHORS.horizontal}, ${ANCHORS.max_36})`,
    horizontal_37: `clamp(${ANCHORS.min_37}, ${ANCHORS.horizontal}, ${ANCHORS.max_37})`,
    horizontal_38: `clamp(${ANCHORS.min_38}, ${ANCHORS.horizontal}, ${ANCHORS.max_38})`,
    horizontal_39: `clamp(${ANCHORS.min_39}, ${ANCHORS.horizontal}, ${ANCHORS.max_39})`,
    horizontal_40: `clamp(${ANCHORS.min_40}, ${ANCHORS.horizontal}, ${ANCHORS.max_40})`,
    horizontal_41: `clamp(${ANCHORS.min_41}, ${ANCHORS.horizontal}, ${ANCHORS.max_41})`,
    horizontal_42: `clamp(${ANCHORS.min_42}, ${ANCHORS.horizontal}, ${ANCHORS.max_42})`,
    horizontal_43: `clamp(${ANCHORS.min_43}, ${ANCHORS.horizontal}, ${ANCHORS.max_43})`,
    horizontal_44: `clamp(${ANCHORS.min_44}, ${ANCHORS.horizontal}, ${ANCHORS.max_44})`,
    horizontal_45: `clamp(${ANCHORS.min_45}, ${ANCHORS.horizontal}, ${ANCHORS.max_45})`,

    // HORIZONTAL SPACING SCALE : 46-65 — Margins, paddings, gaps, and gutters between elements.
    horizontal_46: `clamp(${ANCHORS.min_46}, ${ANCHORS.horizontal}, ${ANCHORS.max_46})`,
    horizontal_47: `clamp(${ANCHORS.min_47}, ${ANCHORS.horizontal}, ${ANCHORS.max_47})`,
    horizontal_48: `clamp(${ANCHORS.min_48}, ${ANCHORS.horizontal}, ${ANCHORS.max_48})`,
    horizontal_49: `clamp(${ANCHORS.min_49}, ${ANCHORS.horizontal}, ${ANCHORS.max_49})`,
    horizontal_50: `clamp(${ANCHORS.min_50}, ${ANCHORS.horizontal}, ${ANCHORS.max_50})`,
    horizontal_51: `clamp(${ANCHORS.min_51}, ${ANCHORS.horizontal}, ${ANCHORS.max_51})`,
    horizontal_52: `clamp(${ANCHORS.min_52}, ${ANCHORS.horizontal}, ${ANCHORS.max_52})`,
    horizontal_53: `clamp(${ANCHORS.min_53}, ${ANCHORS.horizontal}, ${ANCHORS.max_53})`,
    horizontal_54: `clamp(${ANCHORS.min_54}, ${ANCHORS.horizontal}, ${ANCHORS.max_54})`,
    horizontal_55: `clamp(${ANCHORS.min_55}, ${ANCHORS.horizontal}, ${ANCHORS.max_55})`,
    horizontal_56: `clamp(${ANCHORS.min_56}, ${ANCHORS.horizontal}, ${ANCHORS.max_56})`,
    horizontal_57: `clamp(${ANCHORS.min_57}, ${ANCHORS.horizontal}, ${ANCHORS.max_57})`,
    horizontal_58: `clamp(${ANCHORS.min_58}, ${ANCHORS.horizontal}, ${ANCHORS.max_58})`,
    horizontal_59: `clamp(${ANCHORS.min_59}, ${ANCHORS.horizontal}, ${ANCHORS.max_59})`,
    horizontal_60: `clamp(${ANCHORS.min_60}, ${ANCHORS.horizontal}, ${ANCHORS.max_60})`,
    horizontal_61: `clamp(${ANCHORS.min_61}, ${ANCHORS.horizontal}, ${ANCHORS.max_61})`,
    horizontal_62: `clamp(${ANCHORS.min_62}, ${ANCHORS.horizontal}, ${ANCHORS.max_62})`,
    horizontal_63: `clamp(${ANCHORS.min_63}, ${ANCHORS.horizontal}, ${ANCHORS.max_63})`,
    horizontal_64: `clamp(${ANCHORS.min_64}, ${ANCHORS.horizontal}, ${ANCHORS.max_64})`,
    horizontal_65: `clamp(${ANCHORS.min_65}, ${ANCHORS.horizontal}, ${ANCHORS.max_65})`,

    // HORIZONTAL TYPOGRAPHY SCALE : 66-82 — Headings, subheadings, body text, labels, and captions.
    horizontal_66: `clamp(${ANCHORS.min_66}, ${ANCHORS.horizontal}, ${ANCHORS.max_66})`,
    horizontal_67: `clamp(${ANCHORS.min_67}, ${ANCHORS.horizontal}, ${ANCHORS.max_67})`,
    horizontal_68: `clamp(${ANCHORS.min_68}, ${ANCHORS.horizontal}, ${ANCHORS.max_68})`,
    horizontal_69: `clamp(${ANCHORS.min_69}, ${ANCHORS.horizontal}, ${ANCHORS.max_69})`,
    horizontal_70: `clamp(${ANCHORS.min_70}, ${ANCHORS.horizontal}, ${ANCHORS.max_70})`,
    horizontal_71: `clamp(${ANCHORS.min_71}, ${ANCHORS.horizontal}, ${ANCHORS.max_71})`,
    horizontal_72: `clamp(${ANCHORS.min_72}, ${ANCHORS.horizontal}, ${ANCHORS.max_72})`,
    horizontal_73: `clamp(${ANCHORS.min_73}, ${ANCHORS.horizontal}, ${ANCHORS.max_73})`,
    horizontal_74: `clamp(${ANCHORS.min_74}, ${ANCHORS.horizontal}, ${ANCHORS.max_74})`,
    horizontal_75: `clamp(${ANCHORS.min_75}, ${ANCHORS.horizontal}, ${ANCHORS.max_75})`,
    horizontal_76: `clamp(${ANCHORS.min_76}, ${ANCHORS.horizontal}, ${ANCHORS.max_76})`,
    horizontal_77: `clamp(${ANCHORS.min_77}, ${ANCHORS.horizontal}, ${ANCHORS.max_77})`,
    horizontal_78: `clamp(${ANCHORS.min_78}, ${ANCHORS.horizontal}, ${ANCHORS.max_78})`,
    horizontal_79: `clamp(${ANCHORS.min_79}, ${ANCHORS.horizontal}, ${ANCHORS.max_79})`,
    horizontal_80: `clamp(${ANCHORS.min_80}, ${ANCHORS.horizontal}, ${ANCHORS.max_80})`,
    horizontal_81: `clamp(${ANCHORS.min_81}, ${ANCHORS.horizontal}, ${ANCHORS.max_81})`,
    horizontal_82: `clamp(${ANCHORS.min_82}, ${ANCHORS.horizontal}, ${ANCHORS.max_82})`,

    // HORIZONTAL COMPONENT SCALE : 83-90 — Buttons, input fields, images, icons, and mid-sized UI elements.
    horizontal_83: `clamp(${ANCHORS.min_83}, ${ANCHORS.horizontal}, ${ANCHORS.max_83})`,
    horizontal_84: `clamp(${ANCHORS.min_84}, ${ANCHORS.horizontal}, ${ANCHORS.max_84})`,
    horizontal_85: `clamp(${ANCHORS.min_85}, ${ANCHORS.horizontal}, ${ANCHORS.max_85})`,
    horizontal_86: `clamp(${ANCHORS.min_86}, ${ANCHORS.horizontal}, ${ANCHORS.max_86})`,
    horizontal_87: `clamp(${ANCHORS.min_87}, ${ANCHORS.horizontal}, ${ANCHORS.max_87})`,
    horizontal_88: `clamp(${ANCHORS.min_88}, ${ANCHORS.horizontal}, ${ANCHORS.max_88})`,
    horizontal_89: `clamp(${ANCHORS.min_89}, ${ANCHORS.horizontal}, ${ANCHORS.max_89})`,
    horizontal_90: `clamp(${ANCHORS.min_90}, ${ANCHORS.horizontal}, ${ANCHORS.max_90})`,

    // HORIZONTAL CONTAINER SCALE : 91-95 — Panels, cards, sidebars, modals, and large UI blocks.
    horizontal_91: `clamp(${ANCHORS.min_91}, ${ANCHORS.horizontal}, ${ANCHORS.max_91})`,
    horizontal_92: `clamp(${ANCHORS.min_92}, ${ANCHORS.horizontal}, ${ANCHORS.max_92})`,
    horizontal_93: `clamp(${ANCHORS.min_93}, ${ANCHORS.horizontal}, ${ANCHORS.max_93})`,
    horizontal_94: `clamp(${ANCHORS.min_94}, ${ANCHORS.horizontal}, ${ANCHORS.max_94})`,
    horizontal_95: `clamp(${ANCHORS.min_95}, ${ANCHORS.horizontal}, ${ANCHORS.max_95})`,

    // HORIZONTAL LAYOUT SCALE : 96-100 — Full page sections, hero containers, and major layout regions.
    horizontal_96:  `clamp(${ANCHORS.min_96},  ${ANCHORS.horizontal}, ${ANCHORS.max_96})`,
    horizontal_97:  `clamp(${ANCHORS.min_97},  ${ANCHORS.horizontal}, ${ANCHORS.max_97})`,
    horizontal_98:  `clamp(${ANCHORS.min_98},  ${ANCHORS.horizontal}, ${ANCHORS.max_98})`,
    horizontal_99:  `clamp(${ANCHORS.min_99},  ${ANCHORS.horizontal}, ${ANCHORS.max_99})`,
    horizontal_100: `clamp(${ANCHORS.min_100}, ${ANCHORS.horizontal}, ${ANCHORS.max_100})`,
} as const;

export const STYLE_HEAVENLY_EARTH = {

    uUNIVERSAL: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
    },

    tBODY: {
        textAlign: "center",
        fontStyle: "normal",
        fontSize: SIZES.horizontal_70,
        lineHeight: "1",
        color: "#fff7cc",
        backgroundColor: PALETTE[1.5],
        fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM, sans-serif",
        minHeight: "100vh",

        // Me trying to fight the horrors of justified text-alignment spacing.
        overflowWrap: "break-word",
        lineBreak: "strict",
        textJustify: "distribute",
        hyphens: "auto",
        textWrap: "pretty",
        fontKerning: "normal",
        wordSpacing: "-0.03em",
        letterSpacing: "-0.01em",
    },

    oNAVIGATION: {

        iPANEL: {
            display: "flex",
            position: "sticky",
            top: "0",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: PALETTE[1],
            borderBottomStyle: "solid",
            borderBottomColor: PALETTE[6],
            borderBottomWidth: SIZES.horizontal_25,
            paddingBottom: SIZES.horizontal_50,
            paddingTop: SIZES.horizontal_50,
            zIndex: "1000",
        },

        iLINK_PANEL: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: SIZES.horizontal_40,
        },

        iTITLE_PANEL: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: SIZES.horizontal_40,
        },

        iTITLE: {
            color: PALETTE[3],
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontSize: SIZES.horizontal_60,
            lineHeight: "1",
            textAlign: "left",
        },

        iSUBTITLE: {
            color: PALETTE[3],
            fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
            fontSize: SIZES.horizontal_60,
            lineHeight: "1",
            textAlign: "left",
            marginTop: SIZES.horizontal_30,
        },

        iLOGO: {
            width: SIZES.horizontal_75,
            height: SIZES.horizontal_75,
            marginRight: SIZES.horizontal_40,
        },

        cLINK: {
            color: PALETTE[3],
            fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
            fontSize: SIZES.horizontal_50,
            lineHeight: "1",
            textAlign: "center",
            textDecoration: "none",
            paddingLeft: SIZES.horizontal_40,
        },
    },

    oFOOTER: {

        iPANEL: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: SIZES.horizontal_83,
            justifyContent: "space-between",
            backgroundColor: PALETTE[4],
            padding: SIZES.horizontal_5,
            marginTop: "auto",
        },

        iTITLE_PANEL: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },

        iLOGO: {
            marginLeft: SIZES.horizontal_40,
            width: SIZES.horizontal_75,
            height: SIZES.horizontal_75,
        },

        iTITLE: {
            color: PALETTE[1],
            marginLeft: SIZES.horizontal_40,
            fontFamily: "FONT_TEXT_SPECTRAL_ITALIC",
            fontSize: SIZES.horizontal_60,
            textAlign: "left",
        },

        cLINK: {
            color: PALETTE[1],
            fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
            fontSize: SIZES.horizontal_55,
            textAlign: "center",
            textDecoration: "none",
            marginLeft: SIZES.horizontal_50,
        },

        cICON_PANEL: {
            color: PALETTE[1],
            fontFamily: "FONT_ICON_MATERIAL",
            fontSize: SIZES.horizontal_65,
            marginLeft: SIZES.horizontal_50,
            marginRight: SIZES.horizontal_50,
        },

        cSOCIAL_ICON: {
            color: PALETTE[1],
            textDecoration: "none",
        },

        iSOCIAL_PANEL: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
    },

    oTOP: {

        cPANEL: {
            backgroundImage: `linear-gradient(to top, ${PALETTE[1.5]} 10%, transparent 90%)`,
            backgroundColor: PALETTE[2],
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingTop: SIZES.horizontal_60,
            paddingLeft: SIZES.horizontal_75,
            paddingRight: SIZES.horizontal_75,
            width: "100%",
        },

        cTITLE: {
            color: PALETTE[4],
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontSize: SIZES.horizontal_75,
            marginBottom: SIZES.horizontal_50,
        },

        cTEXT: {
            color: PALETTE[4],
            fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
            lineHeight: "1.5",
            textAlign: "center",
            fontSize: SIZES.horizontal_60,
            marginBottom: SIZES.horizontal_55,
        },
    },

    oHOME: {

        oBUTTON: {

            iPANEL: {
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                width: "60%",
                justifyContent: "center",
                marginBottom: SIZES.horizontal_70,
            },

            iSURVEY_FOR_QUILTERS: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                flex: "1",
                color: PALETTE[1],
                textDecoration: "none",
                backgroundColor: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_BOLD",
                fontSize: SIZES.horizontal_52,
                borderStyle: "solid",
                borderColor: PALETTE[4],
                borderWidth: SIZES.horizontal_25,
                borderRadius: SIZES.horizontal_35,
                paddingTop: SIZES.horizontal_46,
                paddingBottom: SIZES.horizontal_46,
                paddingLeft: SIZES.horizontal_60,
                paddingRight: SIZES.horizontal_60,
                marginLeft: SIZES.horizontal_30,
                marginRight: SIZES.horizontal_30,
            },

            iLEARN: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                flex: "1",
                color: PALETTE[4],
                textDecoration: "none",
                backgroundColor: "transparent",
                fontFamily: "FONT_TEXT_SPECTRAL_BOLD",
                fontSize: SIZES.horizontal_52,
                borderStyle: "solid",
                borderColor: PALETTE[4],
                borderWidth: SIZES.horizontal_25,
                borderRadius: SIZES.horizontal_35,
                paddingTop: SIZES.horizontal_46,
                paddingBottom: SIZES.horizontal_46,
                paddingLeft: SIZES.horizontal_60,
                paddingRight: SIZES.horizontal_60,
                marginLeft: SIZES.horizontal_30,
                marginRight: SIZES.horizontal_30,
            },

            iSURVEY_FOR_QUILT_SHOP_OWNERS: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                flex: "1",
                color: PALETTE[1],
                textDecoration: "none",
                backgroundColor: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_BOLD",
                fontSize: SIZES.horizontal_52,
                borderStyle: "solid",
                borderColor: PALETTE[4],
                borderWidth: SIZES.horizontal_25,
                borderRadius: SIZES.horizontal_35,
                paddingTop: SIZES.horizontal_46,
                paddingBottom: SIZES.horizontal_46,
                paddingLeft: SIZES.horizontal_60,
                paddingRight: SIZES.horizontal_60,
                marginLeft: SIZES.horizontal_30,
                marginRight: SIZES.horizontal_30,
            },
        },

        oNOTICE: {

            iPANEL: {
                backgroundImage: `linear-gradient(to top, ${PALETTE[5.5]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[5],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: SIZES.horizontal_40,
                marginLeft: SIZES.horizontal_60,
                marginRight: SIZES.horizontal_60,
            },

            oINNER: {

                cPANEL: {
                    margin: SIZES.horizontal_60,
                    flex: "1",
                },

                cICON: {
                    color: PALETTE[3],
                    fontFamily: "FONT_ICON_MATERIAL",
                    fontSize: SIZES.horizontal_76,
                    marginBottom: SIZES.horizontal_40,
                },

                cTITLE: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_CINZEL_BOLD",
                    fontSize: SIZES.horizontal_56,
                    marginBottom: SIZES.horizontal_36,
                },

                cTEXT: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                    fontSize: SIZES.horizontal_53,
                    lineHeight: "1.25",
                },
            },
        },

        oWHY: {

            iPANEL: {
                width: "100%",
                marginTop: SIZES.horizontal_70,
                marginBottom: SIZES.horizontal_70,
                paddingLeft: SIZES.horizontal_50,
                paddingRight: SIZES.horizontal_50,
                backgroundColor: PALETTE[1.5],
            },

            iHEADING: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_CINZEL_BOLD",
                fontSize: SIZES.horizontal_70,
                textAlign: "center",
                marginBottom: SIZES.horizontal_46,
            },

            iTEXT: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                fontSize: SIZES.horizontal_58,
                lineHeight: "1.5",
                marginBottom: SIZES.horizontal_50,
            },

            iDIVIDER_ROW: {
                width: "50%",
                marginBottom: SIZES.horizontal_50,
            },

            cDIVIDER_LINE: {
                flex: "1",
                height: SIZES.horizontal_25,
                backgroundColor: PALETTE[6],
            },

            iDIVIDER_ICON: {
                color: PALETTE[3],
                fontFamily: "FONT_ICON_MATERIAL",
                fontSize: SIZES.horizontal_60,
                marginLeft: SIZES.horizontal_46,
                marginRight: SIZES.horizontal_46,
            },

            oCARD: {

                cPANEL: {
                    padding: SIZES.horizontal_50,
                    flex: "1",
                },

                cIMAGE: {
                    width: "100%",
                    aspectRatio: "1",
                    objectFit: "cover",
                    borderRadius: SIZES.horizontal_35,
                    marginBottom: SIZES.horizontal_50,
                },

                cTITLE: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_CINZEL_BOLD",
                    fontSize: SIZES.horizontal_60,
                    marginBottom: SIZES.horizontal_40,
                },

                cTEXT: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                    fontSize: SIZES.horizontal_53,
                    lineHeight: "1.5",
                },
            }
        },
    },

    oLEARN: {

        oWHAT_IS_HEMP: {

            iPANEL: {
                width: "95%",
                backgroundImage: `linear-gradient(to top, ${PALETTE[5.5]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[5],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: SIZES.horizontal_40,
                paddingTop: SIZES.horizontal_70,
                paddingBottom: SIZES.horizontal_40,
                paddingLeft: SIZES.horizontal_64,
                paddingRight: SIZES.horizontal_64,
                marginBottom: SIZES.horizontal_50,
            },

            iHEADING: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_CINZEL_BOLD",
                fontSize: SIZES.horizontal_70,
                marginBottom: SIZES.horizontal_50,
            },

            cTEXT: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                fontSize: SIZES.horizontal_58,
                textAlign: "justify",
                lineHeight: "1.5",
                marginBottom: SIZES.horizontal_50,
            }
        },

        oWHY: {

            iPANEL: {
                width: "95%",
                backgroundImage: `linear-gradient(to top, ${PALETTE[5.5]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[5],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: SIZES.horizontal_40,
                paddingTop: SIZES.horizontal_70,
                paddingLeft: SIZES.horizontal_64,
                paddingRight: SIZES.horizontal_64,
                marginBottom: SIZES.horizontal_50,
            },

            iHEADING: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_CINZEL_BOLD",
                fontSize: SIZES.horizontal_70,
                marginBottom: SIZES.horizontal_50,
            },

            iTEXT: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                fontSize: SIZES.horizontal_58,
                textAlign: "justify",
                lineHeight: "1.5",
                marginBottom: SIZES.horizontal_60,
            },

            oCARD: {

                cPANEL: {
                    flex: "1",
                    minWidth: SIZES.horizontal_91,
                    backgroundImage: `linear-gradient(to top, ${PALETTE[1]} 10%, transparent 90%)`,
                    backgroundColor: PALETTE[6],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: SIZES.horizontal_36,
                    paddingTop: SIZES.horizontal_56,
                    paddingBottom: SIZES.horizontal_56,
                    paddingLeft: SIZES.horizontal_50,
                    paddingRight: SIZES.horizontal_50,
                    marginBottom: SIZES.horizontal_70,
                    marginLeft: SIZES.horizontal_35,
                    marginRight: SIZES.horizontal_35,
                },

                cIMAGE: {
                    borderRadius: SIZES.horizontal_45,
                    width: SIZES.horizontal_90,
                    height: "auto",
                    margin: SIZES.horizontal_40,
                },

                cTITLE: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_CINZEL_BOLD",
                    fontSize: SIZES.horizontal_60,
                    marginBottom: SIZES.horizontal_36,
                },

                cTEXT: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                    fontSize: SIZES.horizontal_53,
                    textAlign: "center",
                    lineHeight: "1.5",
                },
            },
        },

        oMISCONCEPTION: {

            iPANEL: {
                width: "95%",
                backgroundImage: `linear-gradient(to top, ${PALETTE[5.5]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[5],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: SIZES.horizontal_40,
                paddingTop: SIZES.horizontal_70,
                paddingLeft: SIZES.horizontal_70,
                paddingRight: SIZES.horizontal_70,
                marginBottom: SIZES.horizontal_50,
            },

            iHEADING: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_CINZEL_BOLD",
                fontSize: SIZES.horizontal_70,
                marginBottom: SIZES.horizontal_50,
            },

            oCARD: {

                cPANEL: {
                    flex: "1",
                    minWidth: SIZES.horizontal_91,
                    backgroundImage: `linear-gradient(to top, ${PALETTE[1]} 10%, transparent 90%)`,
                    backgroundColor: PALETTE[6],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: SIZES.horizontal_36,
                    padding: SIZES.horizontal_50,
                    marginBottom: SIZES.horizontal_70,
                    marginLeft: SIZES.horizontal_30,
                    marginRight: SIZES.horizontal_30,
                },

                cMYTH: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_SPECTRAL_BOLD",
                    fontStyle: "italic",
                    fontSize: SIZES.horizontal_56,
                    marginBottom: SIZES.horizontal_36,
                },

                cTRUTH: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                    fontSize: SIZES.horizontal_53,
                    lineHeight: "1.5",
                    textAlign: "center",
                },
            },
        },

        oMATERIAL: {

            iPANEL: {
                width: "95%",
                backgroundImage: `linear-gradient(to top, ${PALETTE[5.5]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[5],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: SIZES.horizontal_40,
                paddingTop: SIZES.horizontal_70,
                paddingLeft: SIZES.horizontal_70,
                paddingRight: SIZES.horizontal_70,
                marginBottom: SIZES.horizontal_50,
            },

            cHEADING: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_CINZEL_BOLD",
                fontSize: SIZES.horizontal_70,
                marginBottom: SIZES.horizontal_50,
            },

            cTEXT: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                fontSize: SIZES.horizontal_53,
                lineHeight: "1.5",
                textAlign: "justify",
                marginBottom: SIZES.horizontal_50,
            },

            oTEST: {

                cPANEL: {
                    flex: "1",
                    minWidth: SIZES.horizontal_92,
                    backgroundImage: `linear-gradient(to top, ${PALETTE[1]} 10%, transparent 90%)`,
                    backgroundColor: PALETTE[6],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: SIZES.horizontal_35,
                    padding: SIZES.horizontal_50,
                    marginLeft: SIZES.horizontal_50,
                    marginRight: SIZES.horizontal_50,
                    marginBottom: SIZES.horizontal_70,
                },

                cHEADING: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_SPECTRAL_BOLD",
                    fontSize: SIZES.horizontal_55,
                    marginBottom: SIZES.horizontal_30,
                },

                cIMAGE: {
                    borderRadius: SIZES.horizontal_45,
                    width: SIZES.horizontal_91,
                    height: "auto",
                    margin: SIZES.horizontal_50,
                },

                cTEXT: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                    fontSize: SIZES.horizontal_53,
                    lineHeight: "1.5",
                    textAlign: "justify",
                    marginLeft: SIZES.horizontal_30,
                    marginRight: SIZES.horizontal_30,
                    marginBottom: SIZES.horizontal_30,
                },
            },
        },

        oCOMPARE: {

            iPANEL: {
                backgroundImage: `linear-gradient(to top, ${PALETTE[5.5]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[5],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: SIZES.horizontal_40,
                marginLeft: SIZES.horizontal_50,
                marginRight: SIZES.horizontal_50,
                marginBottom: SIZES.horizontal_50,
                paddingTop: SIZES.horizontal_50,
                paddingBottom: SIZES.horizontal_30,
                paddingLeft: SIZES.horizontal_60,
                paddingRight: SIZES.horizontal_60,
                overflow: "hidden",
            },

            iHEADING: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_CINZEL_BOLD",
                fontSize: SIZES.horizontal_70,
                marginBottom: SIZES.horizontal_60,
            },

            iLEAF_PANEL: {
                alignSelf: "stretch",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },

            iLEAF_IMAGE: {
                width: "80%",
                height: "auto",
            },

            oCOLUMN: {

                cHEADING_LEFT: {
                    color: PALETTE[3],
                    fontFamily: "FONT_TEXT_CINZEL_BOLD",
                    fontSize: SIZES.horizontal_60,
                    textAlign: "left",
                    marginBottom: SIZES.horizontal_46,
                },

                cHEADING_RIGHT: {
                    color: PALETTE[3],
                    fontFamily: "FONT_TEXT_CINZEL_BOLD",
                    fontSize: SIZES.horizontal_60,
                    textAlign: "right",
                    marginBottom: SIZES.horizontal_46,
                },

                cROW_LEFT: {
                    marginBottom: SIZES.horizontal_40,
                    textAlign: "left",
                },

                cROW_RIGHT: {
                    marginBottom: SIZES.horizontal_40,
                    textAlign: "right",
                },

                cROW_ICON: {
                    color: PALETTE[3],
                    fontFamily: "FONT_ICON_MATERIAL",
                    fontSize: SIZES.horizontal_55,
                    marginRight: SIZES.horizontal_40,
                },

                cROW_ICON_RIGHT: {
                    color: PALETTE[3],
                    fontFamily: "FONT_ICON_MATERIAL",
                    fontSize: SIZES.horizontal_55,
                    marginLeft: SIZES.horizontal_40,
                },

                cROW_TEXT: {
                    color: PALETTE[4],
                    fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                    fontSize: SIZES.horizontal_53,
                    lineHeight: "1.5",
                },
            },
        },
    },

    oSOURCES: {

        oRESEARCH: {

            iSUPER_CONTAINER: {
                padding: SIZES.horizontal_50,
            },

            cCONTAINER: {
                width: "80%",
                flex: "1",
                minWidth: SIZES.horizontal_91,
                marginBottom: SIZES.horizontal_70,
                marginLeft: SIZES.horizontal_50,
                marginRight: SIZES.horizontal_50,
            },

            cOUTER_PANEL: {
                backgroundImage: `linear-gradient(to top, ${PALETTE[5.5]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[5],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: SIZES.horizontal_40,
                paddingTop: SIZES.horizontal_50,
                paddingLeft: SIZES.horizontal_50,
                paddingRight: SIZES.horizontal_50,
            },

            cINNER_PANEL: {
                backgroundImage: `linear-gradient(to top, ${PALETTE[1]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[6],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: SIZES.horizontal_35,
                padding: SIZES.horizontal_50,
                marginBottom: SIZES.horizontal_50,
            },

            cID_PANEL: {
                backgroundColor: PALETTE[4],
                padding: SIZES.horizontal_40,
                borderTopLeftRadius: SIZES.horizontal_35,
                borderTopRightRadius: SIZES.horizontal_35,
            },

            cTITLE: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_CINZEL_BOLD",
                fontSize: SIZES.horizontal_55,
                marginBottom: SIZES.horizontal_50,
                lineHeight: "1.25",
            },

            cHEADING: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_BOLD",
                fontSize: SIZES.horizontal_50,
                marginBottom: SIZES.horizontal_30,
            },

            cID_TEXT: {
                color: PALETTE[1],
                fontSize: SIZES.horizontal_50,
            },

            cINNER_TEXT: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                fontSize: SIZES.horizontal_50,
                lineHeight: "1.5",
                textAlign: "center",
            },

            cLINK_TEXT: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                fontSize: SIZES.horizontal_50,
                textAlign: "center",
                display: "block",
            },
        },
    },

    oABOUT: {

        oDESCRIPTION: {

            iPANEL: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundImage: `linear-gradient(to top, ${PALETTE[5.5]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[5],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: SIZES.horizontal_40,
                paddingTop: SIZES.horizontal_64,
                paddingLeft: SIZES.horizontal_64,
                paddingRight: SIZES.horizontal_64,
                marginBottom: SIZES.horizontal_80,
                marginLeft: SIZES.horizontal_70,
                marginRight: SIZES.horizontal_70,
            },

            cHEADING: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_CINZEL_BOLD",
                fontSize: SIZES.horizontal_65,
                textAlign: "center",
                paddingBottom: SIZES.horizontal_35,
                marginBottom: SIZES.horizontal_30,
            },

            cTEXT: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                fontSize: SIZES.horizontal_60,
                lineHeight: "2",
                textAlign: "justify",
                marginBottom: SIZES.horizontal_50,
            },
        },

        iPEOPLE_TITLE: {
            color: PALETTE[4],
            fontFamily: "FONT_TEXT_CINZEL_BOLD",
            fontSize: SIZES.horizontal_74,
            paddingBottom: SIZES.horizontal_35,
            marginTop: SIZES.horizontal_68,
            marginBottom: SIZES.horizontal_30,
        },

        iDIVIDER_ROW: {
            width: "25%",
            marginBottom: SIZES.horizontal_50,
        },

        cDIVIDER_LINE: {
            flex: "1",
            height: SIZES.horizontal_25,
            backgroundColor: PALETTE[6],
        },

        iDIVIDER_ICON: {
            color: PALETTE[3],
            fontFamily: "FONT_ICON_MATERIAL",
            fontSize: SIZES.horizontal_70,
            marginLeft: SIZES.horizontal_46,
            marginRight: SIZES.horizontal_46,
        },

        oPERSON: {

            cPANEL: {
                backgroundImage: `linear-gradient(to top, ${PALETTE[1.5]} 10%, transparent 90%)`,
                backgroundColor: PALETTE[6],
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderStyle: "solid",
                borderColor: PALETTE[6],
                borderWidth: SIZES.horizontal_25,
                borderRadius: SIZES.horizontal_36,
                padding: SIZES.horizontal_64,
                marginBottom: SIZES.horizontal_70,
                marginLeft: SIZES.horizontal_70,
                marginRight: SIZES.horizontal_70,
                alignSelf: "stretch",
            },

            cIMAGE: {
                borderRadius: SIZES.horizontal_40,
                backgroundColor: PALETTE[3],
                marginBottom: SIZES.horizontal_60,
                width: "60%",
                maxWidth: SIZES.horizontal_95,
                height: "auto",
            },

            cNAME: {
                color: PALETTE[4],
                fontFamily: "FONT_TEXT_CINZEL_BOLD",
                fontSize: SIZES.horizontal_65,
                marginBottom: SIZES.horizontal_36,
            },

            cTITLE: {
                color: PALETTE[3],
                fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                fontSize: SIZES.horizontal_62,
                marginBottom: SIZES.horizontal_52,
            },

            cDESCRIPTION: {
                color: PALETTE[4],
                lineHeight: "1.5",
                fontFamily: "FONT_TEXT_SPECTRAL_MEDIUM",
                textAlign: "justify",
                fontSize: SIZES.horizontal_60,
            },

            cLINK: {
                color: PALETTE[1],
                backgroundColor: PALETTE[4],
                borderRadius: SIZES.horizontal_40,
                fontFamily: "FONT_TEXT_SPECTRAL_BOLD",
                fontSize: SIZES.horizontal_45,
                textDecoration: "none",
                padding: SIZES.horizontal_35,
                marginTop: SIZES.horizontal_50,
                marginLeft: SIZES.horizontal_30,
                marginRight: SIZES.horizontal_30,
            }
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
            fontFamily: "FONT_ICON_MATERIAL",
            lineHeight: "inherit",
        },
    },

    oFORM: {

        cFLEX_WRAP_ROW: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
        },

        cSTATIC_COLUMN_START: {
            display: "flex",
            position: "static",
            flexDirection: "column",
            alignItems: "start",
        },

        cSTATIC_COLUMN_CENTER: {
            display: "flex",
            position: "static",
            flexDirection: "column",
            alignItems: "center",
        },

        cSTATIC_COLUMN_END: {
            display: "flex",
            position: "static",
            flexDirection: "column",
            alignItems: "end",
        },

        cSTATIC_ROW_START: {
            display: "flex",
            position: "static",
            flexDirection: "row",
            alignItems: "start",
        },

        cSTATIC_ROW_CENTER: {
            display: "flex",
            position: "static",
            flexDirection: "row",
            alignItems: "center",
        },

        cSTATIC_ROW_END: {
            display: "flex",
            position: "static",
            flexDirection: "row",
            alignItems: "end",
        },

        cFIXED_COLUMN_START: {
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "start",
        },

        cFIXED_COLUMN_CENTER: {
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "center",
        },

        cFIXED_COLUMN_END: {
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "end",
        },

        cFIXED_ROW_START: {
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            alignItems: "start",
        },

        cFIXED_ROW_CENTER: {
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            alignItems: "center",
        },

        cFIXED_ROW_END: {
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            alignItems: "end",
        },
    },
}
