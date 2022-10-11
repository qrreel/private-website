import REACT_LOGO from "../img/react-logo.png";
import GITHUB_LOGO from "../img/github.png";
import FIGMA_LOGO from "../img/figma-logo.png";
import JAVASCRIPT_LOGO from "../img/javascript-logo.png";
import TYPESCRIPT_LOGO from "../img/typescript-logo.png";
import JEST_LOGO from "../img/jest-logo.png";
import NODEJS_LOGO from "../img/nodejs-logo.png";
import SASS_LOGO from "../img/sass-logo.png";

const MY_SITE_GITHUB_LINK = "https://github.com/qrreel/private-website";
const SPACE_NEWS_GITHUB_LINK =
  "https://github.com/qrreel/space_flight_news_api";
const DAILY_PLANNER_GITHUB_LINK = "https://github.com/qrreel/my_panel";
const OTHERS_REPOSITORY = "https://github.com/qrreel?tab=repositories";

export const projects = [
  {
    id: 1,
    title: "My website",
    uses: [
      { key: 1, img: JAVASCRIPT_LOGO },
      { key: 2, img: REACT_LOGO },
    ],
    src: MY_SITE_GITHUB_LINK,
  },
  {
    id: 2,
    title: "Daily planner",
    uses: [
      { key: 1, img: JAVASCRIPT_LOGO },
      { key: 2, img: TYPESCRIPT_LOGO },
      { key: 3, img: REACT_LOGO },
      { key: 4, img: JEST_LOGO },
    ],
    src: DAILY_PLANNER_GITHUB_LINK,
  },
  {
    id: 3,
    title: "Space News",
    uses: [
      { key: 1, img: JAVASCRIPT_LOGO },
      { key: 2, img: REACT_LOGO },
    ],
    src: SPACE_NEWS_GITHUB_LINK,
  },
  {
    id: 4,
    title: "others",
    subtitles: [
      "Calculator",
      "Password Generator",
      "Tic-Tac-Toe Game",
      "Weather API",
    ],
    src: OTHERS_REPOSITORY,
  },
];
