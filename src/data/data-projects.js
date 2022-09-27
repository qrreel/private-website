import { skills } from "./data-skills";

const [
  HTML_CSS,
  SCSS,
  JAVASCRIPT,
  TYPESCRIPT,
  J_QUERY,
  REACT,
  NODE_JS,
  JEST,
  PYTHON,
  WEBPACK,
  REST_API,
  NPM,
  GIT,
  CLEAN_CODE,
  VS_CODE,
  FIGMA,
] = skills.map((skill) => skill.logo);

export const projects = [
  {
    id: 1,
    title: "Personal website",
    description: "cergqrvh vwrth",
    bgImage: undefined,
    uses: [
      { key: 1, img: HTML_CSS },
      { key: 2, img: JAVASCRIPT },
      { key: 3, img: REACT },
    ],
    sources: [
      { src: "https://github.com/qrreel/private-website", img: GIT },
      {
        src: "https://www.figma.com/file/2G6m5p7DMCgIpsiLZUqSmL/MyWebpage?node-id=0%3A1",
        img: FIGMA,
      },
    ],
  },
  {
    id: 2,
    title: "Daily planner",
    description: "ethvwtvgcqerw",
    bgImage: undefined,
    uses: [
      { key: 1, img: HTML_CSS },
      { key: 2, img: JAVASCRIPT },
      { key: 3, img: REACT },
    ],
    sources: [{ src: "#", img: GIT }],
  },
  {
    id: 3,
    title: "Space News",
    description: "sudbfiub",
    bgImage: undefined,
    uses: [
      { key: 1, img: HTML_CSS },
      { key: 2, img: JAVASCRIPT },
      { key: 3, img: REACT },
    ],
    sources: [{ src: "#", img: GIT }],
  },
];
