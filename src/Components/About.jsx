import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-12 m-2 md:px-10 px-6 md:py-24 py-14"
    >
      <div className="col-span-1 md:col-span-4">
        <div className="md:sticky md:top-10">
          <span className="px-4 py-2 border-[1px] border-[#B9B9B9] rounded-3xl text-sm">
            About
          </span>
          <p className="md:w-2/3 w-full my-8 text-3xl font-semibold">
            Resilent Innovations Limited.
          </p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4">
          <span className="font-semibold">
            Resilient Innovations Limited (RIL)
          </span>
          , a company registered under the Companies Act of Bangladesh, is a
          Sourcing, Project Management, and Consulting Company whose ownership
          has over 20 years of experience in strategic planning, execution,
          management, and consulting that apply to a wide array of industries.
          RIL stays committed to specializing in indenting, engineering,
          technical design, project management, consultancy services, and more
          for the worldwide marine industry.
        </p>
        <div className="mb-4 flex md:flex-row flex-col justify-between">
          <img
            className="md:w-[49%] w-full md:mb-0 mb-2"
            src="/image_two.png"
          />
          <img className="md:w-[49%] w-full" src="/image_three.png" />
        </div>
        <p className="text-sm font-light text-[#5E5E5E]">
          Our approach is to build strong strategic alliances in marine and
          offshore markets forged by specialist knowledge and intelligent
          solutions. We pride ourselves on working with key stakeholders and
          strategic partners in the marine sphere, with a proven track record of
          creating better opportunities and synergies for our clients.
        </p>
      </div>
    </div>
  );
};

export default About;
