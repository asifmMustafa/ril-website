import React from "react";

const Projects = () => {
  const projects = [
    {
      img: "/image_five.png",
      title: "Procurement consultancy of 17 Tugboats for BIWTA",
      category: "Boats",
    },
    {
      img: "/image_six.png",
      title: "Mooring equipment supply to Bangladesh Navy",
      category: "Polyamide, Polyester, and HMPE Ropes",
    },
    {
      img: "/image_seven.png",
      title: "Representing Deno Compressors Netherlands",
      category: "Government Supply",
    },
    {
      img: "/image_eight.png",
      title:
        "Successful sourcing of various construction machinery for (BIWTA)",
      category: "Construction, Machinery",
    },
    {
      img: "/image_eleven.png",
      title: "Solar on-grid and off-grid solutions for RMG clients",
      category: "Solar, Energy",
    },
  ];

  return (
    <div
      id="projects"
      className="flex md:flex-row flex-col m-2 md:px-10 px-6 py-10"
    >
      <div className="md:w-[40%] w-full">
        <span className="px-4 py-2 border-[1px] border-[#B9B9B9] rounded-3xl text-sm">
          Projects
        </span>
        <p className="md:w-1/3 w-full my-8 text-3xl font-semibold">
          Our latest projects.
        </p>
      </div>
      <div className="md:w-[60%] w-full flex flex-col gap-4">
        {projects.map((project, i) => (
          <div className="relative">
            <img
              className="rounded-xl md:h-auto h-72 object-cover"
              src={project.img}
            />
            <div className="md:w-1/2 absolute bottom-0 left-0 bg-white p-5 m-5 rounded-2xl">
              <p className="text-[#5E5E5E] text-sm mb-2">{project.category}</p>
              <p className="font-semibold text-lg">{project.title}</p>
            </div>
          </div>
        ))}
        <div className="p-5 flex md:flex-row flex-col justify-between md:items-start items-center border-[1px] border-[#B9B9B9] rounded-xl">
          <p className="font-semibold text-xl md:text-start text-center md:mb-0 mb-5">
            Want to know view more?
          </p>
          <p className="inline-flex items-center px-3 py-1 border-[1px] border-[#B9B9B9] rounded-3xl text-sm w-auto cursor-pointer">
            View all
            <img
              className="w-[18px] ml-1"
              src="/icons/icon_six.png"
              alt="Icon"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
