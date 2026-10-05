// =========================================================
// PROJECT NOVA
// Floating Card Configuration
// =========================================================

export const FLOATING_TAGS = [
  {
    id: "react",

    category: "FRONTEND",

    value: "React",

    /*
    |---------------------------------------------------------
    | React
    |---------------------------------------------------------
    | Slight overlap with the upper-left edge.
    | Most of the card stays outside the portrait.
    */

    top: "7%",
    left: "-24%",

    float: 10,

    duration: 8,
  },

  {
    id: "unity",

    category: "GAME DEV",

    value: "Unity",

    /*
    |---------------------------------------------------------
    | Unity
    |---------------------------------------------------------
    | Slight overlap with the right edge.
    */

    top: "34%",
    right: "-25%",

    float: 11,

    duration: 10,
  },

  {
    id: "ai",

    category: "AI",

    value: "Generative AI",

    /*
    |---------------------------------------------------------
    | Generative AI
    |---------------------------------------------------------
    | Slight overlap with the lower-left edge.
    */

    bottom: "9%",
    left: "-22%",

    float: 10,

    duration: 9,
  },
];