import About from "./About";
import Projects from "./Projects";

export default function BodyContent() {
  return (
    <div>
      <div className="lg:pl-56 bg-gradient-to-tr from-green-200 via-yellow-100 to-green-200 min-h-screen relative">
        <About />
      </div>
      <div className="lg:pl-56 bg-gradient-to-tl from-green-200 via-yellow-100 to-green-200 min-h-screen relative">
        <Projects />
      </div>
    </div>
  );
}
