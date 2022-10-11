import { useTranslation } from "react-i18next";
import icons from "../../../utilities/Icons";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="py-20 px-12 md:px-40">
      <div className=" text-5xl flex gap-5">
        {icons.verticalLines}
        {t("homepage.bodyContent.about.title")}
      </div>
      <div className="pt-12 text-justify">
        {t("homepage.bodyContent.about.description")}
      </div>
      <div className=" text-4xl flex gap-5 pt-12">
        {icons.verticalLines}
        {t("homepage.bodyContent.about.tools")}
      </div>
      <div className="pt-10">
        <div className="flex flex-wrap justify-around">
          <img src={icons.tools.bootstrap} alt="boot" className="h-12 w-12" />
          <img src={icons.tools.css3} alt="css" className="h-12 w-12" />
          <img src={icons.tools.git} alt="git" className="h-12 w-12" />
          <img src={icons.tools.html5} alt="html" className="h-12 w-12" />
          <img src={icons.tools.javascript} alt="js" className="h-12 w-12" />
          <img src={icons.tools.mysql} alt="sql" className="h-12 w-12" />
          <img src={icons.tools.node} alt="node" className="h-12 w-12" />
        </div>
        <div className="flex flex-wrap justify-around pt-8 ">
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
      <div className=" flex gap-5 pt-12 flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full flex flex-col">
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
        <div className="md:w-1/2 w-full">
          <div className=" flex gap-5 text-4xl">
            {icons.verticalLines}
            {t("homepage.bodyContent.about.experience.title")}
          </div>

          <div className="border-l mt-10 border-black md:px-6 px-3">
            {" "}
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
          </div>
        </div>
      </div>
    </div>
  );
}
