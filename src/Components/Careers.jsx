import React from "react";

const Careers = () => {
  const positions = [
    {
      title: "Consultants (Marine Industry)",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "Ex-Army, Navy, Shipping Ministry Officials",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "Naval Architects",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "Engineers",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "Government Liaison Professionals",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "Project Management Professionals",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "Business consultants",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "IT & Innovations Advisors",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "People & Culture Enthusiasts",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "Students (Fresher)",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
    {
      title: "Data-driven finance professionals",
      location: "Chittagong",
      deadline: "16 Sep 2024",
    },
  ];

  return (
    <div
      id="careers"
      className="grid grid-cols-1 md:grid-cols-12 m-2 md:px-10 px-6 md:py-24 py-14"
    >
      <div className="col-span-1 md:col-span-4">
        <div className="md:sticky md:top-10">
          <span className="px-4 py-2 border-[1px] border-[#B9B9B9] rounded-3xl text-sm">
            Careers
          </span>
          <p className="w-1/2 my-8 text-3xl font-semibold">
            Want to join with us?
          </p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-8">
        <p className="font-light text-md">
          RIL BD has zero tolerance for workplace discrimination and is an
          equal-opportunity employer. We enjoy learning, innovating, and working
          on challenges with a 'Can Do' attitude. Our teams all share a common
          mindset—we like to see solutions where others see problems.
          <br />
          All professionals seeking to join our teams must go through essential
          gender and diversity training and understand the basic life skills
          modules that are widely accepted. We encourage the following
          professionals to drop their CVs for our reference:
        </p>
        <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-4">
          {positions.map((position, i) => (
            <div
              key={i}
              className="flex flex-row justify-between border-b-[1px] border-[#DCDCDC] pb-2"
            >
              <div className="md:w-1/2 w-[65%]">
                <p className="mb-2 font-semibold text-lg">{position.title}</p>
                <p className="text-[#5E5E5E] text-sm">
                  {position.location} &#x2022; {position.deadline}
                </p>
              </div>
              <div className="w-[30%] flex items-center">
                <span className="inline-flex items-center cursor-pointer">
                  <p className="text-sm">Apply now</p>
                  <img className="w-6" src="/arrow_.png" />
                </span>
              </div>
            </div>
          ))}
          <div className="md:py-0 py-10 flex items-center justify-center rounded-xl bg-cover bg-[url('image_two_.png')]">
            <p className="inline-flex items-center px-3 py-1 border-[1px] border-[#B9B9B9] rounded-3xl text-sm w-auto cursor-pointer bg-white">
              contact@rilbd.com
              <img
                className="w-[18px] ml-1"
                src="/icons/icon_six.png"
                alt="Icon"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
