import { useTranslation } from "react-i18next";
import i18n from "../../utilities/i18n";
import italyFlag from "../../../assets/pics/italy_flag.png";
import ukFlag from "../../../assets/pics/UK_flag.png";
import icons from "../../utilities/Icons";

export default function Hero() {
  const { t } = useTranslation();

  function handleLanguage(event) {
    i18n.changeLanguage(event.target.alt);
  }

  return (
    <div className="flex flex-col items-center justify-center lg:pl-56 bg-gradient-to-tl from-green-200 via-yellow-100 to-green-200 min-h-screen">
      <div className=" flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {/* language selectors*/}
        <div className="flex absolute top-5 right-5">
          <img
            src={italyFlag}
            alt="it"
            onClick={handleLanguage}
            className="h-9 mr-3 cursor-pointer"
          ></img>
          <img
            src={ukFlag}
            alt="en"
            onClick={handleLanguage}
            className="h-9 mr-3 cursor-pointer"
          ></img>
        </div>
        <div className="bgProfilePic w-44 h-44 md:w-72 md:h-72 rounded-full"></div>
        <div className="text-4xl lg:text-5xl saira font-bold">
          <div className="flex gap-3 justify-center md:justify-start">
            <div className="pb-3 ">{t("homepage.hero.welcome")}</div>
            <div className="pb-3 md:hidden">
              {t("homepage.hero.welcomeMessage")}
            </div>
          </div>
          <div className="py-3 hidden md:block">
            {t("homepage.hero.welcomeMessage")}
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="py-3 text-center">
              {t("homepage.hero.welcomeMessage2")}
            </div>
            <div className="py-3 text-center">
              {t("homepage.hero.welcomeMessage3")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 pt-6">
        <a href="https://www.linkedin.com/in/matteo-strazzera-ba26781b8/">
          {icons.linkedin}
        </a>
        <a href="https://github.com/Matstraz">{icons.github}</a>
        <a href="https://www.facebook.com/mat.strazzera">{icons.facebook}</a>
      </div>
      <a
        href="#projects"
        className="text-lg mt-10 py-2 px-5 font-bold bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4"
      >
        {t("homepage.hero.more")}
        {icons.arrowdown}
      </a>
    </div>
  );
}
