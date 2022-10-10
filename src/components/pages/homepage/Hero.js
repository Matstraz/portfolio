import { useTranslation } from "react-i18next";
import i18n from "../../utilities/i18n";
import italyFlag from "../../../assets/pics/italy_flag.png";
import ukFlag from "../../../assets/pics/UK_flag.png";

export default function Hero() {
  const { t } = useTranslation();

  function handleLanguage(event) {
    i18n.changeLanguage(event.target.alt);
  }

  return (
    <div className="flex items-center justify-center pl-0 lg:pl-56 px-4 lg:px-0 lg:pr-5 bg-gradient-to-tl from-green-200 via-yellow-100 to-green-200 min-h-screen">
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

      {t("homepage.aside.projects")}
    </div>
  );
}
