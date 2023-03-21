import React from "react";
import Title from "./Title.jsx";

function Contact() {
  return (
    <>
      <div className="flex flex-col mb-10 mx-auto">
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/9ae7b0f1-3d4d-4513-8ec1-95a40fadde28"
            methos="POST"
            className="flex flex-col w-full md:w-7/12"
          >
            <Title>Contact</Title>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="10"
              className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <button
              type="button"
              className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md"
            >
              Work with me
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
