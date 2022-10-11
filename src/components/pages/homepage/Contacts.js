import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import icons from "../../utilities/Icons";
import emailjs from "@emailjs/browser";
import { css } from "aphrodite";
import styles from "../../utilities/Animations";
import { Waypoint } from "react-waypoint";

export default function Contacts() {
  const { t } = useTranslation();
  const formRef = useRef();

  const animationRef = useRef();

  function enterAnimation() {
    animationRef.current.classList.add(`${css(styles.pulse)}`);
  }

  const [data, setData] = useState({
    name: "",
    lastName: "",
    user_email: "",
    message: "",
  });

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9wzee3",
        "template_0zywg33",
        formRef.current,
        "f9BocO_ldWDcRVRwp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contacts"
      className="lg:pl-56 bg-gradient-to-tr from-green-200 via-yellow-100 to-green-200 min-h-screen"
    >
      <div id="about" className="py-20 px-12 md:px-40 h-full">
        <div className=" text-5xl flex gap-5">
          {icons.verticalLines}
          {t("homepage.bodyContent.contacts.title")}
        </div>
        <div className="flex pt-12">
          <Waypoint onEnter={enterAnimation} />
          <div
            ref={animationRef}
            className="w-1/2 flex justify-center items-center"
          >
            <div>
              <div className="flex justify-center gap-8">
                <a href="https://github.com/Matstraz">
                  <img
                    className="rounded-lg"
                    src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                    alt="github"
                  />
                </a>
                <a href="https://www.facebook.com/mat.strazzera">
                  <img
                    className="rounded-lg"
                    src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                    alt="facebook"
                  />
                </a>
              </div>
              <div className="mt-8 flex justify-center gap-8 flex-wrap">
                <a href="https://www.linkedin.com/in/matteo-strazzera-ba26781b8/">
                  <img
                    className="rounded-lg"
                    src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
                    alt="linkedin"
                  />
                </a>
                <a href="mailto:mat.strazzera@gmail.com">
                  <img
                    className="rounded-lg"
                    src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                    alt="gmail"
                  />
                </a>
                <a href="https://wa.me/393423878435?text=Ciao%20,%20ti%20contatto%20perchè%20ho%20visto%20il%20tuo%20sito">
                  <img
                    className="rounded-lg"
                    src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                    alt="whatsapp"
                  />
                </a>
              </div>
            </div>
          </div>
          <form
            className="w-1/3 m-auto flex flex-col justify-around border-2  border-green-300 bg-green-100 p-5 rounded-lg"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <p className=" text-center pb-5 font-bold text-lg">
              {icons.contactsInfinite} &nbsp; &nbsp;
              {t("homepage.bodyContent.contacts.formTitle")}
            </p>
            <input
              type="text"
              name="name"
              className="p-2 mb-1 bg-green-200 rounded-lg"
              placeholder={t("homepage.bodyContent.contacts.firstName")}
              onChange={inputHandle}
              value={data.name}
            />
            <input
              type="text"
              name="lastName"
              className="p-2 mb-1 bg-green-200 rounded-lg"
              placeholder={t("homepage.bodyContent.contacts.lastName")}
              onChange={inputHandle}
              value={data.lastName}
            />
            <input
              type="email"
              name="user_email"
              className="p-2 mb-1 bg-green-200 rounded-lg"
              placeholder={t("homepage.bodyContent.contacts.email")}
              onChange={inputHandle}
              value={data.user_email}
            />
            <textarea
              className="bg-green-200 p-2 rounded-lg"
              placeholder={t("homepage.bodyContent.contacts.message")}
              onChange={inputHandle}
              name="message"
              value={data.message}
              rows="5"
            ></textarea>
            <div className="flex items-center justify-center px-4 pt-4 rounded-b">
              <button
                className="text-lg mt-3 px-4 bg-green-200 text-slate-700 hover:bg-green-300 hover:text-slate-900 flex justify-center items-center gap-4 rounded-lg border-2 border-green-300"
                type="submit"
              >
                {t("homepage.bodyContent.contacts.send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
