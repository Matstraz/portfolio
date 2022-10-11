import Aside from "./Aside";
import BodyContent from "./body content/BodyContent";
import Contacts from "./Contacts";

import Hero from "./Hero";

export default function Homepage() {
  return (
    <div>
      <Aside />
      <Hero />
      <BodyContent />
      <Contacts />
    </div>
  );
}
