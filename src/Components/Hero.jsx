import Navbar from "./Navbar";
import { Link } from "react-scroll";

const TopBar = () => {
  return (
    <div className="flex flex-row justify-between px-4 md:px-14 md:pt-10 pt-5">
      <img
        className="w-24 h-auto object-contain md:w-32"
        src="/logo_one.png"
        alt="Logo"
      />
      <Navbar />
    </div>
  );
};

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen max-h-screen relative flex flex-col space-y-10 md:space-y-[60vh] m-2 md:rounded-3xl rounded-xl text-white tracking-tight bg-cover bg-[url('/image_on.jpeg')]"
    >
      <TopBar />

      <div className="w-full md:pt-0 pt-14 flex md:flex-row flex-col">
        <h1 className="w-full md:w-1/2 px-4 md:px-14 md:pt-10 text-4xl md:text-6xl font-bold leading-tight">
          Build Strategic <br className="hidden md:block" />
          Alliances in Marine & <br className="hidden md:block" />
          Offshore Markets.
        </h1>
        <div className="md:static absolute bottom-10 w-full md:w-1/2 px-4 pt-20 flex flex-col items-start justify-center">
          <p className="mb-5 text-[#DCDCDC]">
            Specializing in indenting, engineering, technical design,
            <br className="hidden md:block" />
            project management, and consultancy services for the global
            <br className="hidden md:block" />
            marine industry
          </p>
          <Link
            to="services"
            spy={true}
            smooth={true}
            className="flex items-center justify-center p-[2px] rounded-md bg-[#4BA5EF] cursor-pointer hover:bg-[#3A8CC1] transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center p-[2px] rounded-md bg-[#4BA5EF] hover:bg-[#3A8CC1] transition-colors duration-300 cursor-pointer">
              <span className="mx-5">Learn More</span>
              <img className="w-10" src="/arrow.png" alt="Arrow" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
