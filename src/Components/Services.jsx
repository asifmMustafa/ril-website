import React from "react";

const Services = () => {
  const services = [
    {
      icon: "/icons/icon_one.png",
      title: "Project Management & Business Consulting",
      description:
        "Expert management of marine and offshore projects, from planning to execution, ensuring efficiency, quality, and strategic alignment.",
    },
    {
      icon: "/icons/icon_two.png",
      title: "Engineering, Procurement, & Construction (EPC)",
      description:
        "Comprehensive EPC services, covering design, procurement, construction, and commissioning for marine projects, with a focus on innovation and partnerships.",
    },
    {
      icon: "/icons/icon_three.png",
      title: "Training & Capacity Development",
      description:
        "Specialized training programs to enhance skills, build capacity, and drive innovation within the marine and offshore sectors.",
    },
    {
      icon: "/icons/icon_four.png",
      title: "Indenting & Sourcing",
      description:
        "Strategic sourcing solutions to meet unique marine industry needs, leveraging strong relationships with global suppliers for reliable procurement.",
    },
    {
      icon: "/icons/icon_five.png",
      title: "Research & Development (R&D)",
      description:
        "Cutting-edge R&D services focused on developing data-driven solutions and innovative technologies for the marine industry.",
    },
  ];

  return (
    <div
      id="services"
      className="flex md:flex-row flex-col m-2 md:px-10 px-8 py-10"
    >
      <div className="md:w-[40%] w-full">
        <span className="px-4 py-2 border-[1px] border-[#B9B9B9] rounded-3xl text-sm">
          Services
        </span>
        <p className="md:w-1/2 w-full my-8 text-3xl font-semibold">
          See what we actually offer.
        </p>
      </div>
      <div className="md:w-[60%] w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="mb-6 flex flex-col items-start justify-center"
          >
            <span className="px-4 py-2 mb-6 border-[1px] border-[#B9B9B9] rounded-3xl text-sm">
              <img className="w-[24px]" src={service.icon} />
            </span>
            <p className="font-semibold mb-2">{service.title}</p>
            <p className="text-sm font-light text-[#5E5E5E]">
              {service.description}
            </p>
          </div>
        ))}
        <div className="relative p-5 flex items-center border-[1px] border-[#B9B9B9] rounded-xl">
          <div className="w-2/3">
            <p className="font-semibold md:mb-2 mb-5 text-xl">
              Want to know more about us?
            </p>
            <p className="inline-flex items-center px-3 py-1 border-[1px] border-[#B9B9B9] rounded-3xl text-sm w-auto">
              contact@rilbd.com
              <img
                className="w-[18px] ml-1"
                src="/icons/icon_six.png"
                alt="Icon"
              />
            </p>
          </div>
          <img
            className="absolute right-0 md:w-[120px] w-[100px]"
            src="@.png"
            alt="Decorative Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
