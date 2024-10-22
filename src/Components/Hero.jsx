import Navbar from "./Navbar";

const TopBar = () => {
  return (
    <div className="flex flex-row justify-between px-14 pt-10">
      <img className="w-32" src="/logo_one.png" alt="Logo" />
      <Navbar />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-[60vh] m-2 rounded-3xl inter text-white tracking-tight bg-cover bg-[url('/image_one.png')]">
      <TopBar />

      <div className="w-full pb-28 flex flex-row">
        <h1 className="w-1/2 px-14 text-6xl font-bold leading-tight">
          Build Strategic
          <br />
          Alliances in Marine &<br />
          Offshore Markets.
        </h1>
        <div className="w-1/2 px-20 flex flex-col items-start justify-center">
          <p className="mb-5 text-[#DCDCDC]">
            Specializing in indenting, engineering, technical design,
            <br /> project management, and consultancy services for the global
            <br />
            marine industry
          </p>
          <span className="flex items-center justify-center p-[2px] rounded-md bg-[#4BA5EF] cursor-pointer">
            <span className="mx-5">Learn More</span>
            <img className="w-10" src="/arrow.png" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
