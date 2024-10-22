const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-6 font-regular">
      <span>About Us</span>
      <span>Services</span>
      <span>Projects</span>
      <span>Careers</span>
      <span>Contact Us</span>
      <span className="hidden md:flex items-center justify-center p-[2px] rounded-md bg-[#4BA5EF] cursor-pointer">
        <span className="mx-5">+880 186767 273</span>
        <img className="w-10" src="/phone.png" />
      </span>
    </nav>
  );
};

export default Navbar;
