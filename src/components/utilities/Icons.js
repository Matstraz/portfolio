import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import {
  faComments,
  faHouseChimney,
  faAddressCard,
  faDiagramProject,
  faArrowDown,
  faGripLinesVertical,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "aphrodite";
import styles from "./Animations";

import bootstrap from "../../assets/pics/bootstrap.svg";
import css3 from "../../assets/pics/css3.svg";
import git from "../../assets/pics/git.svg";
import html5 from "../../assets/pics/html5.svg";
import javascript from "../../assets/pics/javascript.svg";
import mysql from "../../assets/pics/mysql.svg";
import node from "../../assets/pics/nodejs.svg";
import react from "../../assets/pics/react.svg";
import tailwind from "../../assets/pics/tailwind.svg";
import trello from "../../assets/pics/trello.svg";
import typescript from "../../assets/pics/typescript.svg";
import vscode from "../../assets/pics/vscode.svg";
import github from "../../assets/pics/github.svg";

const icons = {
  home: <FontAwesomeIcon icon={faHouseChimney} />,
  about: <FontAwesomeIcon icon={faAddressCard} />,
  projects: <FontAwesomeIcon icon={faDiagramProject} />,
  contacts: (
    /*  <FontAwesomeIcon icon={faComments} className={`${css(styles.tada)}`} /> */
    <FontAwesomeIcon icon={faComments} />
  ),
  linkedin: <FontAwesomeIcon icon={faLinkedin} className="h-7" />,
  github: <FontAwesomeIcon icon={faGithub} className="h-7" />,
  facebook: <FontAwesomeIcon icon={faFacebook} className="h-7" />,
  arrowdown: (
    <FontAwesomeIcon
      icon={faArrowDown}
      className={`${css(styles.slideInDown)} h-5`}
    />
  ),
  verticalLines: (
    <FontAwesomeIcon icon={faGripLinesVertical} className="text-green-200" />
  ),
  tools: {
    bootstrap: bootstrap,
    css3: css3,
    git: git,
    html5: html5,
    javascript: javascript,
    mysql: mysql,
    node: node,
    react: react,
    tailwind: tailwind,
    trello: trello,
    typescript: typescript,
    vscode: vscode,
    github: github,
  },
  graduation: <FontAwesomeIcon icon={faGraduationCap} className="h-4" />,
};

export default icons;
