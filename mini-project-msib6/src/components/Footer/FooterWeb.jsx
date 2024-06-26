import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const FooterWeb = () => {
  return (
    <div className="mt-8 container flex flex-col gap-8 justify-center items-center">
      <img src="/lipsum.svg" alt="logo-lipsum" width={"215px"} />
      <div className="flex gap-8">
        <a href="https://www.instagram.com/krisna.wandhana/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.linkedin.com/in/krisna-wandhana" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
        <a href="https://www.facebook.com/krisna.wandhana.3/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} />
        </a>
      </div>
      <div className="w-[80vw] border-t-2 border-primary500 my-4"></div>
        <div className="justify-center text-center">
          <p>Copyright © 2024 Rangga Permana. All rights reserved.</p>
          <p>This website was designed by Rangga Permana and integrated into the web by Krisna Wandhana.</p>
        </div>
    </div>
  );
};

export default FooterWeb;


