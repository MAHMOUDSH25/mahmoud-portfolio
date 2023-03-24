import React from "react";

function Footer() {
  return (
    <>
      <div className="py-5 text-center">
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()} Mahmoud AlShawish. All rights reserved
        </p>
        {/* <embed src="Mahmoud_AlShawish_CV.pdf" /> */}
      </div>
    </>
  );
}

export default Footer;
