import React, { useRef } from "react";
import Title from "./Title.jsx";
import emailjs from "@emailjs/browser";

function Contact() {
  

  return (
    <>
      <div className="flex flex-col mb-10 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="flex flex-col items-center mb-10 text-cyan-300 text-2xl">
            Feel free to reach out{" "}
            <b>
              <em>
                <a
                  className="text-violet-400 hover:underline underline-offset-1 decoration-2 decoration-cyan-500"
                  href="mailto:mhmoodsh1996@gmail.com"
                >
                  Mhmoodsh1996@gmail.com
                </a>
              </em>
            </b>
          </p>
          <a
            target="_blank"
            href="Mahmoud_AlShawish_Resume.pdf"
          >
            <button className="text-center text-3xl inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-violet-500 to-cyan-500 drop-shadow-md">
              OPEN CV
            </button>
          </a>

         
        </div>
      </div>
    </>
  );
}

export default Contact;


// const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_y6ujb9c",
  //       "template_yab4jzt",
  //       form.current,
  //       "gm489VFihzyYH6Bzf"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_565msza",
  //       "template_yab4jzt",
  //       form.current,
  //       // U have to put your user ID here
  //       "5s-n7zU51w7AmJpM4"
  //     )
  //     .then(
  //       () => {
  //         alert("Massege successfuly sent");
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert("failed to send the message, please try again");
  //       }
  //     );
  // };


// 
// 
// 
// 
// 



   {/* <form ref={form} onSubmit={sendEmail} method="POST">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form> */}
          {/* <form
            // action="https://getform.io/f/9ae7b0f1-3d4d-4513-8ec1-95a40fadde28"
            // methos="POST"
            className="flex flex-col w-full md:w-7/12"
            onSubmit={sendEmail}
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
            <input
                className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md"
                type="submit"
                value="SEND"
              />
            {/* <button
              type="submit"
              value="SEND"
              className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md"
            > */}
          {/* Work with me */}
          {/* </button> */}
          {/* </form> */}