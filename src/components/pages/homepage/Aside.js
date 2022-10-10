import { css } from "aphrodite";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../utilities/Animations";
import icons from "../../utilities/Icons";

export default function Aside() {
  const [animateHome, setAnimateHome] = useState(false);
  const [animateAbout, setAnimateAbout] = useState(false);
  const [animateProjects, setAnimateProjects] = useState(false);
  const [animateContacts, setAnimateContacts] = useState(false);

  const { t } = useTranslation();

  function animateH() {
    setAnimateHome(true);
  }

  function animateA() {
    setAnimateAbout(true);
  }

  function animateP() {
    setAnimateProjects(true);
  }

  function animateC() {
    setAnimateContacts(true);
  }

  function inanimateMe() {
    setAnimateHome(false);
    setAnimateAbout(false);
    setAnimateProjects(false);
    setAnimateContacts(false);
  }

  return (
    <nav className="hidden lg:block h-full top-0 w-56 fixed bg-slate-100 p-5  bg-gradient-to-tl from-blue-200 via-green-200 to-violet-300">
      <div className="comforter text-4xl text-center border-t-2 border-b-2 border-double border-t-slate-500 border-b-slate-500 p-3 font-bold">
        Matteo Strazzera
      </div>
      <ul className="pt-20 px-6">
        <li className="py-4 px-3 border-b border-black">
          <a
            href="/"
            className="flex justify-around"
            onMouseOver={animateH}
            onMouseLeave={inanimateMe}
          >
            <span className={!animateHome ? "" : `${css(styles.rubberBand)}`}>
              {icons.home}
            </span>{" "}
            {t("homepage.aside.home")}
          </a>
        </li>
        <li className="py-4 px-3 border-b border-black">
          <a
            href="/"
            className="flex justify-around"
            onMouseOver={animateA}
            onMouseLeave={inanimateMe}
          >
            <span className={!animateAbout ? "" : `${css(styles.zoomIn)}`}>
              {icons.about}
            </span>
            {t("homepage.aside.about")}
          </a>
        </li>
        <li className="py-4 px-3 border-b border-black ">
          <a
            href="/"
            className="flex justify-around"
            onMouseOver={animateP}
            onMouseLeave={inanimateMe}
          >
            <span
              className={!animateProjects ? "" : `${css(styles.headShake)}`}
            >
              {icons.projects}
            </span>{" "}
            {t("homepage.aside.projects")}
          </a>
        </li>
        <li className="py-4 px-3 border-b border-black">
          <a
            href="/"
            className="flex justify-around"
            onMouseOver={animateC}
            onMouseLeave={inanimateMe}
          >
            <span className={!animateContacts ? "" : `${css(styles.tada)}`}>
              {icons.contacts}
            </span>{" "}
            {t("homepage.aside.contacts")}
          </a>
        </li>
      </ul>
    </nav>
  );
}
