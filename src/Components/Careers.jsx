import React from "react";

const Careers = () => {
  return (
    <div
      id="careers"
      className="grid grid-cols-1 md:grid-cols-12 m-2 md:px-10 px-6 md:py-24 py-14"
    >
      <div className="col-span-1 md:col-span-4">
        <div className="sticky top-0">
          <span className="px-4 py-2 border-[1px] border-[#B9B9B9] rounded-3xl text-sm">
            Careers
          </span>
          <p className="my-8 text-3xl font-semibold">Want to join with us?</p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-8">
        <p>
          RIL BD has zero tolerance for workplace discrimination and is an
          equal-opportunity employer. We enjoy learning, innovating, and working
          on challenges with a 'Can Do' attitude. Our teams all share a common
          mindset—we like to see solutions where others see problems. All
          professionals seeking to join our teams must go through essential
          gender and diversity training and understand the basic life skills
          modules that are widely accepted. We encourage the following
          professionals to drop their CVs for our reference:
        </p>
      </div>
    </div>
  );
};

export default Careers;
