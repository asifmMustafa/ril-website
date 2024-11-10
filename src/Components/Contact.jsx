import emailjs from "emailjs-com";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    emailjs
      .send(
        "service_96bpirl",
        "template_qp0ryzx",
        { name, email, message },
        "YXKaNaiH0Jxb1TK0z"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="m-2 md:px-20 px-6 md:py-20 py-16 flex md:flex-row flex-col rounded-2xl bg-cover bg-[url('/image_ten.png')]"
    >
      <div className="md:w-1/2 md:mb-0 mb-10 w-full flex flex-col justify-center text-white">
        <p className="mb-10 font-semibold text-4xl">Get In Touch</p>

        <p className="uppercase text-[#DCDCDC] text-xs mb-2">Contact</p>
        <span className="inline-flex items-center mb-5 text-sm">
          <img className="h-5 mr-2" src="/arrow_white.png" />
          <p>info@ril-bd.com</p>
        </span>

        <p className="uppercase text-[#DCDCDC] text-xs mb-2">Phone</p>
        <span className="inline-flex items-center mb-5 text-sm">
          <p className="">+880 1740827761</p>
        </span>

        <p className="uppercase text-[#DCDCDC] text-xs mb-2">Address</p>
        <span className="inline-flex items-center mb-5 text-sm">
          <p className="">
            Level 10, House 80, Road 17/A, Block E, Banani, <br />
            Dhaka - 1213, Bangladesh
          </p>
        </span>
      </div>
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="w-full p-5 rounded-xl bg-white text-xs">
          <p className="mb-4">Full Name</p>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-6 pb-2 border-0 border-b-[1px] border-[#DCDCDC] text-gray-700 placeholder-[#b6b3b3] focus:outline-none"
          />
          <p className="mb-4">Email Address</p>
          <input
            type="text"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-6 pb-2 border-0 border-b-[1px] border-[#DCDCDC] text-gray-700 placeholder-[#b6b3b3] focus:outline-none"
          />
          <p className="mb-4">Your Message</p>
          <textarea
            type="text"
            placeholder="Start writing..."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-6 pb-2 border-0 border-b-[1px] border-[#DCDCDC] text-gray-700 placeholder-[#b6b3b3] focus:outline-none"
          />
          <span
            onClick={() => handleSubmit()}
            className="inline-flex items-center justify-center p-[2px] rounded-md bg-[#4BA5EF] cursor-pointer hover:bg-[#3A8CC1] transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="mx-5 text-white">Submit</span>
            <img className="w-10" src="/arrow.png" alt="Arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
