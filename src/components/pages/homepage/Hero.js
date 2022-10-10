import { css } from "aphrodite";
import styles from "../../utilities/Animations";

export default function Hero() {
  return (
    <div className="flex items-center justify-center pl-0 lg:pl-56 px-4 lg:px-0 lg:pr-5 bg-gradient-to-tl from-green-200 via-yellow-100 to-green-200 min-h-screen">
      <div>
        <p className={css(styles.fadeInRight)}>prova</p>
      </div>
    </div>
  );
}
