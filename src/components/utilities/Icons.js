import {
  faComments,
  faHouseChimney,
  faAddressCard,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = {
  home: <FontAwesomeIcon icon={faHouseChimney} />,
  about: <FontAwesomeIcon icon={faAddressCard} />,
  projects: <FontAwesomeIcon icon={faDiagramProject} />,
  contacts: (
    /*  <FontAwesomeIcon icon={faComments} className={`${css(styles.tada)}`} /> */
    <FontAwesomeIcon icon={faComments} />
  ),
};

export default icons;
