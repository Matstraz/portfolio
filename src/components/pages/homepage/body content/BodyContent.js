import About from "./About";

export default function BodyContent() {
  return (
    <div
      className="flex flex-col lg:pl-56 bg-gradient-to-tr from-green-200 via-yellow-100 to-green-200 min-h-screen relative"
      id="about"
    >
      <About />
    </div>
  );
}
