import "./App.css";
import About from "./Components/About";
import Careers from "./Components/Careers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

const App = () => {
  return (
    <div className="inter">
      <Hero />
      <About />
      <Services />
      <div className="flex md:flex-row flex-col gap-4 m-2 md:px-10 px-6 md:py-10 py-5">
        <img className="w-[24%] md:block hidden" src="/image_two.png" />
        <img className="md:w-[24%] w-full" src="/image_four.png" />
        <img className="md:w-[24%] w-full" src="/image_two.png" />
        <img className="w-[24%] md:block hidden" src="/image_three.png" />
      </div>
      <Projects />
      <div className="px-6 md:py-10 py-5">
        <img
          className="md:h-auto h-72 object-cover rounded-xl"
          src="/image_twelve.png"
        />
      </div>
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
