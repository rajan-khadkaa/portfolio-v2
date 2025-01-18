import {
  ArrowUpRightIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText("");
    }, 1000);
  };

  return (
    <footer
      id="footer"
      className="flex flex-col h-fit w-full items-center  py-7  gap-3"
    >
      <div className="w-full px-2 sm:px-12 flex items-center justify-between">
        <p className="text-xs text-txt-cta">
          &copy; 2025 Rajan&nbsp; |&nbsp; All rights Reserved.
        </p>
        <div className="flex gap-[10px] ">
          <a
            className="size-7 flex items-center justify-center p-1 text-gray-200 border-gray-500 bg-gray-800 border-[1.4px] rounded-full"
            target="_blank"
            href="https://github.com/rajan-khadkaa"
          >
            <FaGithub />
          </a>
          <a
            className="size-7 flex items-center justify-center p-[5px] text-gray-200 border-gray-500 bg-gray-800 border-[1.4px] rounded-full"
            target="_blank"
            href="https://www.linkedin.com/in/rajan-khadka-106868268/"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="size-7 flex items-center justify-center p-[5px] text-gray-200 border-gray-500 bg-gray-800 border-[1.4px] rounded-full"
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&to=rajankhadkaa0809@gmail.com&su=Lets%20work%20together&body=Hello%20Rajan!"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      {/* <div className="w-full flex max-w-[84vw] justify-between items-start">
        <div className="flex flex-col gap-1">
          <a
            className="mb-3"
            href="https://mail.google.com/mail/?view=cm&to=rajankhadkaa0809@gmail.com&su=Internship%20Opportunity&body=Hello%20Rajan!"
            target="_blank"
          >
            <button
              className="flex gap-[7px] items-center py-[7px] px-6 border-[1.8px] border-btn-cta bg-btn-cta  rounded-md  text-txt-cta text-sm"
              type="button"
            >
              <span>Hire Me</span>
              <ArrowUpRightIcon
                className="size-[12px] -translate-y-[0px]"
                strokeWidth="2.5"
              />
            </button>
          </a>
          <div className="flex gap-2 items-center h-[24px]">
            <p className="text-sm text-txt-cta">rajankhadkaa0809@gmail.com</p>
            <DocumentDuplicateIcon
              onClick={() => handleCopy("rajankhadkaa0809@gmail.com")}
              className="size-4"
              // strokeWidth="1.5"
            />
            <span
              className={`${
                copiedText === "rajankhadkaa0809@gmail.com"
                  ? "bg-btn-cta text-txt-cta text-xs px-2 py-[2px] rounded-md"
                  : "hidden"
              } `}
            >
              {copiedText === "rajankhadkaa0809@gmail.com" ? <>Copied</> : ""}
            </span>
          </div>
          <div className="flex gap-2 items-center h-[24px]">
            <p className="text-sm text-txt-cta">+9779814364007</p>
            <DocumentDuplicateIcon
              onClick={() => handleCopy("+9779814364007")}
              className="size-4"
              // strokeWidth="1.5"
            />
            <span
              className={`${
                copiedText === "+9779814364007"
                  ? "bg-btn-cta text-txt-cta text-xs px-2 py-[2px] rounded-md"
                  : "hidden"
              } `}
            >
              {copiedText === "+9779814364007" ? <>Copied</> : ""}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a className="text-sm text-txt-cta" href="#home">
            Home
          </a>
          <a className="text-sm text-txt-cta" href="#projects">
            Projects
          </a>
          <a className="text-sm text-txt-cta" href="#skills">
            Skills
          </a>
        </div>
      </div>
      <div className="w-full px-10">
        <hr className="w-full" />
      </div>

      <div>
        <span className=""></span>
      </div> */}
    </footer>
  );
}

export default Footer;
