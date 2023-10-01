import React from "react";
import { FaHome } from "react-icons/fa";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { SlEnvolope } from "react-icons/sl";

import { MotionDiv } from "./use.client";

const Navbar = (props: { animate?: boolean }) => {
  const { animate = true } = props;

  const handleContactClick = () => {
    const emailAddress = "pedraoh498@gmail.com";
    const subject = "Contact from your website";
    const body = "Hello, I would like to get in touch with you to talk about...";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="navbar-wrapper" style={{ overflowX: "hidden", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <header className="sticky top-0 z-50 mx-auto flex max-w-7xl items-start justify-between bg-stone-800 p-5 pt-8 xl:items-center" style={{ position: 'fixed', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <MotionDiv
          {...(animate && {
            initial: { opacity: 0, x: -500 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 1.5 },
          })}
          className="flex items-center"
        >
          <a href="/#hero">
            <FaHome
              className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300 font-bold"
              title="Go home"
            />
          </a>

          <a href="https://github.com/PedroHGaspar" target="_blank" rel="noreferrer">
            <SiGithub
              className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300 font-bold"
              title="Github"
            />
          </a>
          {/* <a href="https://instagram.com/pedroggaspar" target="_blank" rel="noreferrer">
            <SiInstagram
              className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300 font-bold"
              title="Instagram"
            />
          </a> */}
          <a href="https://www.linkedin.com/in/pedro-henrique-gaspar-826978239/" target="_blank" rel="noreferrer">
            <SiLinkedin
              className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300 font-bold"
              title="LinkedIn"
            />
          </a>
        </MotionDiv>

        <MotionDiv
          {...(animate && {
            initial: { opacity: 0, x: 500 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 1.5 },
          })}
          className="flex items-center"
        >
          <a href="#" className="group flex cursor-pointer items-center font-bold" onClick={handleContactClick}>
            <SlEnvolope className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors group-hover:fill-gray-300" />
            <span className="hidden font-cal text-sm uppercase text-gray-400 group-hover:text-gray-300 md:inline-flex">
              Contact
            </span>
          </a>
        </MotionDiv>
      </header>
    </div>
  );
};

export default Navbar;
