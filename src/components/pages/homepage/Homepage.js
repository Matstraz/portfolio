import Aside from "./Aside";
import BodyContent from "./body content/BodyContent";

import Hero from "./Hero";

export default function Homepage() {
  return (
    <div>
      <Aside />
      <Hero />
      <BodyContent />
    </div>
  );
}
