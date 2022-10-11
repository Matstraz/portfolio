import { css } from "aphrodite";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../../utilities/Animations";
import icons from "../../../utilities/Icons";
import ModalBazaar from "./ModalBazaar";
import ModalFinlab from "./ModalFinlab";
import ModalFontanelle from "./ModalFontanelle";
import ModalOptionsfy from "./ModalOptionsfy";
import ModalUbisoft from "./ModalUbisoft";
import { Waypoint } from "react-waypoint";

export default function Projects() {
  const { t } = useTranslation();

  const ref = useRef();

  function enterAnimation() {
    ref.current.classList.add(`${css(styles.zoomIn)}`);
  }

  return (
    <div id="projects" className="py-20 px-12 md:px-40 min-h-screen">
      <div className=" text-5xl flex gap-5">
        {icons.verticalLines}
        {t("homepage.bodyContent.projects.title")}
      </div>
      <Waypoint onEnter={enterAnimation} />
      <div
        ref={ref}
        className="pt-12 flex flex-wrap justify-around gap-x-8 gap-y-10"
      >
        <div>
          <ModalUbisoft />
          <div className="flex gap-4">
            <a
              href="https://github.com/Matstraz/Ubisoft-Site-Project/tree/develop"
              className="text-lg mt-3 px-4 bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg"
            >
              Code{icons.githubMini}
            </a>
          </div>
        </div>
        <div>
          <ModalFinlab />
          <div className="flex gap-4">
            <a
              href="https://github.com/Matstraz/Finlab-Javascript-Project---Team-3/tree/develop"
              className="text-lg mt-3 px-4 bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg"
            >
              Code{icons.githubMini}
            </a>
          </div>
        </div>
        <div>
          <ModalOptionsfy />
          <div className="flex gap-4">
            <a
              href="https://optionsfy-fe.netlify.app/"
              className="text-lg mt-3 px-4 bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg"
            >
              Demo
            </a>
            <a
              href="https://github.com/Matstraz/Optionsfy-Frontend/"
              className="text-lg mt-3 px-4 bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg"
            >
              Code{icons.githubMini}
            </a>
          </div>
        </div>
        <div>
          <ModalFontanelle />
          <div className="flex gap-4">
            <a
              href="https://lefontanelle.netlify.app/"
              className="text-lg mt-3 px-4 bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg"
            >
              Demo
            </a>
            <a
              href="https://github.com/Matstraz/agriturismo/tree/develop"
              className="text-lg mt-3 px-4 bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg"
            >
              Code{icons.githubMini}
            </a>
          </div>
        </div>
        <div>
          <ModalBazaar />
          <div className="flex gap-4">
            <a
              href="https://bazaar-trader.netlify.app/"
              className="text-lg mt-3 px-4 bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg"
            >
              Demo
            </a>
            <a
              href="https://github.com/Matstraz/bazaar_trader/tree/develop"
              className="text-lg mt-3 px-4 bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg"
            >
              Code{icons.githubMini}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
