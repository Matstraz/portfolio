import { StyleSheet } from "aphrodite";
import {
  bounce,
  fadeInUp,
  tada,
  zoomIn,
  rubberBand,
  headShake,
  slideInDown,
  fadeInLeftBig,
  fadeInRightBig,
  pulse,
} from "react-animations";

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: "1s",
  },
  headShake: {
    animationName: headShake,
    animationDuration: "1s",
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "1.5s",
  },
  fadeInLeftBig: {
    animationName: fadeInLeftBig,
    animationDuration: "1.5s",
  },
  fadeInRightBig: {
    animationName: fadeInRightBig,
    animationDuration: "1.5s",
  },
  pulse: {
    animationName: pulse,
    animationDuration: "2s",
  },
  slideInDown: {
    animationName: slideInDown,
    animationDuration: "1.7s",
    animationIterationCount: "infinite",
  },
  zoomIn: {
    animationName: zoomIn,
    animationDuration: "1.3s",
  },
  rubberBand: {
    animationName: rubberBand,
    animationDuration: "1s",
  },
  tada: {
    animationName: tada,
    animationDuration: "1.5s",
  },
  tada2: {
    animationName: tada,
    animationDuration: "3.5s",
    animationIterationCount: "infinite",
  },
});

export default styles;
