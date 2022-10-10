import { StyleSheet } from "aphrodite";
import {
  bounce,
  fadeInRight,
  tada,
  zoomIn,
  rubberBand,
  headShake,
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
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "1s",
  },
  zoomIn: {
    animationName: zoomIn,
    animationDuration: "1s",
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
