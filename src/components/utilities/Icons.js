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
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "aphrodite";
import styles from "./Animations";

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
};

export default icons;
