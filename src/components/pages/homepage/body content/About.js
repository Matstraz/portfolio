import { useTranslation } from "react-i18next";
import icons from "../../../utilities/Icons";
import { useRef } from "react";
import { Waypoint } from "react-waypoint";
import { css } from "aphrodite";
import styles from "../../../utilities/Animations";

export default function About() {
  const { t } = useTranslation();

  const ref1 = useRef(); // ANIMATION WHEN AN ELEMENT IS REACHED
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();

  function enterAnimation() {
    ref1.current.classList.add(`${css(styles.fadeInUp)}`);
  }

  function enterAnimation2() {
    ref2.current.classList.add(`${css(styles.fadeInUp)}`);
  }

  function enterAnimation3() {
    ref3.current.classList.add(`${css(styles.fadeInUp)}`);
  }

  function enterAnimation4() {
    ref4.current.classList.add(`${css(styles.fadeInLeftBig)}`);
  }

  function enterAnimation5() {
    ref5.current.classList.add(`${css(styles.fadeInRightBig)}`);
  }

  function enterAnimation6() {
    ref6.current.classList.add(`${css(styles.fadeInUp)}`);
  }

  function enterAnimation7() {
    ref7.current.classList.add(`${css(styles.fadeInUp)}`);
  }

  return (
    <div id="about" className="py-20 px-12 md:px-40 min-h-screen">
      <Waypoint onEnter={enterAnimation} />
      <div ref={ref1} className=" text-5xl flex gap-5">
        {icons.verticalLines}
        {t("homepage.bodyContent.about.title")}
      </div>
      <Waypoint onEnter={enterAnimation2} />
      <div ref={ref2} className="pt-12 text-justify">
        {t("homepage.bodyContent.about.description")}
      </div>
      {/* TOOLS */}
      <Waypoint onEnter={enterAnimation3} />
      <div ref={ref3} className=" text-4xl flex gap-5 pt-12">
        {icons.verticalLines}
        {t("homepage.bodyContent.about.tools")}
      </div>
      <div className="pt-10">
        <div className="p-4">
          <Waypoint onEnter={enterAnimation4} />

          <div ref={ref4} className="flex flex-wrap justify-around">
            <img src={icons.tools.bootstrap} alt="boot" className="h-12 w-12" />
            <img src={icons.tools.css3} alt="css" className="h-12 w-12" />
            <img src={icons.tools.git} alt="git" className="h-12 w-12" />
            <img src={icons.tools.html5} alt="html" className="h-12 w-12" />
            <img src={icons.tools.javascript} alt="js" className="h-12 w-12" />
            <img src={icons.tools.mysql} alt="sql" className="h-12 w-12" />
            <img src={icons.tools.node} alt="node" className="h-12 w-12" />
          </div>
          <Waypoint onEnter={enterAnimation5} />

          <div ref={ref5} className="flex flex-wrap justify-around pt-8 ">
            <img src={icons.tools.react} alt="react" className="h-12 w-12" />
            <img
              src={icons.tools.tailwind}
              alt="tailwind"
              className="h-12 w-12"
            />
            <img src={icons.tools.trello} alt="trello" className="h-12 w-12" />
            <img src={icons.tools.typescript} alt="ts" className="h-12 w-12" />
            <img src={icons.tools.vscode} alt="vscode" className="h-12 w-12" />
            <img src={icons.tools.github} alt="github" className="h-12 w-12" />
          </div>
        </div>
      </div>
      <div className=" flex gap-5 pt-12 flex-col lg:flex-row">
        {/* EDUCATION */}
        <Waypoint onEnter={enterAnimation6} />

        <div ref={ref6} className="lg:w-1/2 w-full flex flex-col">
          <div className="flex gap-5 text-4xl">
            {icons.verticalLines}
            {t("homepage.bodyContent.about.education.title")}
          </div>

          <div className="border-l mt-10 border-black md:px-6 px-3">
            <div className="flex items-center">
              {icons.graduation}
              <p className="px-2">2022</p>
            </div>
            <p className="py-2 font-bold">
              {t("homepage.bodyContent.about.education.course")}
            </p>
            <p className="py-2 text-justify">
              {t("homepage.bodyContent.about.education.content")}
            </p>
            <div className="flex items-center mt-10">
              {icons.graduation}
              <p className="px-2">2020</p>
            </div>
            <p className="py-2 font-bold">
              {t("homepage.bodyContent.about.education.master")}
            </p>
            <p className="py-2 text-justify">
              {t("homepage.bodyContent.about.education.content3")}
            </p>
            <div className="flex items-center mt-10">
              {icons.graduation}
              <p className="px-2">2018</p>
            </div>
            <p className="py-2 font-bold">
              {t("homepage.bodyContent.about.education.internship")}
            </p>
            <p className="py-2 text-justify">
              {t("homepage.bodyContent.about.education.content2")}
            </p>
            <div className="flex items-center mt-10">
              {icons.graduation}
              <p className="px-2">2013</p>
            </div>
            <p className="py-2 font-bold">
              {t("homepage.bodyContent.about.education.bachelor")}
            </p>
            <p className="py-2 text-justify">
              {t("homepage.bodyContent.about.education.content4")}
            </p>
          </div>
        </div>
        {/* EXPERIENCE */}
        <Waypoint onEnter={enterAnimation7} />

        <div ref={ref7} className="lg:w-1/2 w-full flex flex-col">
          <div className=" flex gap-5 text-4xl">
            {icons.verticalLines}
            {t("homepage.bodyContent.about.experience.title")}{" "}
          </div>
          <div className="border-l mt-10 border-black md:px-6 px-3">
            <div className="flex items-center mt-10">
              {icons.job}
              <p className="px-2">02/2022 - present</p>
            </div>
            <p className="py-2 font-bold">
              {t("homepage.bodyContent.about.experience.job1")}
            </p>
            <p className="py-2 text-justify">
              {t("homepage.bodyContent.about.experience.content")}
            </p>
            <div className="flex items-center mt-10">
              {icons.job}
              <p className="px-2">04/2017 - 10/2017</p>
            </div>
            <p className="py-2 font-bold">
              {t("homepage.bodyContent.about.experience.job2")}
            </p>
            <p className="py-2 text-justify">
              {t("homepage.bodyContent.about.experience.content2")}
            </p>
            <div className="flex items-center mt-10">
              {icons.job}
              <p className="px-2">06/2016 - 03/2017</p>
            </div>
            <p className="py-2 font-bold">
              {t("homepage.bodyContent.about.experience.job3")}
            </p>
            <p className="py-2 text-justify">
              {t("homepage.bodyContent.about.experience.content3")}
            </p>
            <div className="flex items-center mt-10">
              {icons.job}
              <p className="px-2">03/2013 - 12/2014</p>
            </div>
            <p className="py-2 font-bold">
              {t("homepage.bodyContent.about.experience.job4")}
            </p>
            <p className="py-2 text-justify">
              {t("homepage.bodyContent.about.experience.content4")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://drive.google.com/file/d/17ZzOQQ4Fyw3jpXCrhjPoMi-D8YMUAmwq/view?usp=sharing"
          className="text-lg mt-10 py-1 px-10 font-bold bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
