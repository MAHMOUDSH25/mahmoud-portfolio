import React from "react";

function Intro() {
  return (
    <>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl dark:text-white md:text-7xl mb-1 md:mb-3 font-bold">
          Mahmoud
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Software Engineer & Web Developer
        </p>

        <p className="text-sm max-w-xl mb-6 font-bold">
          <em>
            Enthusiastic web developer with commendable background in
            organising/gathering all necessary tools and expertise to design
            application in line with pre-defined goals.
          </em>
        </p>

        <p className="text-sm max-w-xl mb-6 font-normal">
          Proficient in utilising advanced technologies and software such as
          HTML, Bootstrap, CSS, JavaScript, and React.JS to perform key
          technical tasks under compressed deadlines across fast-paced
          environments{" "}
          <b>
            <em>
              <a
                href="https://github.com/MAHMOUDSH25"
                target="_blank"
                className="text-cyan-400 hover:underline underline-offset-2 decoration-2 decoration-violet-500"
                rel="noreferrer noopener"
              >
                MAHMOUDSH25
              </a>
            </em>
          </b>
          . Well-versed in providing professional mentorship to software
          learners. Articulate communicator with ability to foster and nurture
          positive and long-term relationships with team members and software
          developers to achieve all pre-defined goals.
        </p>
        {/* <p className="text-sm max-w-xl mb-6 font-bold">
          <em>
            Technically-astute and innovative graduate with ability to operate
            on both front-end and back-end development processes along with
            designing, developing, and maintaining fully-fledged and functioning
            websites proficiently.{" "}
          </em>
          <a href="https://github.com/MAHMOUDSH25" target="_blank" className="underline text-red-500" rel="noreferrer noopener">add your website</a>
        </p> */}
        {/* <p className="text-sm max-w-xl mb-6 font-normal">
          Accredited with a Bachelor’s degree in Software Engineering.
          Proficient in utilising advanced technologies and software such as
          HTML, Bootstrap, CSS, JavaScript, and React.JS to perform key
          technical tasks under compressed deadlines across fast-paced
          environments. Stellar record of leading implementation of back-end of
          website along with testing and identifying website-specific functional
          and non-functional requirements.
          <br />
          Enthusiastic web developer with commendable background in
          organising/gathering all necessary tools and expertise to design
          application in line with pre-defined goals. Well-versed in providing
          professional mentorship to software learners. Articulate communicator
          with ability to foster and nurture positive and long-term
          relationships with team members and software developers to achieve all
          pre-defined goals.
        </p> */}
      </div>
    </>
  );
}

export default Intro;
