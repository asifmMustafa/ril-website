import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Services from "./Components/Services";

const App = () => {
  return (
    <div className="inter">
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default App;
