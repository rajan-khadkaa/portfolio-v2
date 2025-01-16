import React, { useState, useEffect } from "react";
import {
  RectangleStackIcon,
  UserIcon,
  HomeIcon,
  FolderIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  PhoneIcon,
  DevicePhoneMobileIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [active, setActive] = useState("profile");
  const [isDark, setIsDark] = useState(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [isDark]);

  return (
    <div className="w-full flex h-[60px] px-[6px] py-[2px] items-center justify-center">
      <a
        onClick={() => {
          setActive("profile");
        }}
        className={`h-full flex flex-col items-center justify-center relative group`}
        href="#profile"
      >
        <span
          className={`text-xs absolute -top-7 opacity-0 bg-btn-main text-white px-2 py-1 rounded-md  group-hover:opacity-100 transition-opacity`}
        >
          Profile
        </span>
        <div
          className={`${
            active === "profile" ? "bg-btn-opt" : ""
          }  rounded-full p-[14px] text-txt-primary flex items-center justify-center`}
        >
          <HomeIcon className={`size-5`} />
        </div>
      </a>

      <a
        onClick={() => {
          setActive("projects");
        }}
        className={`h-full flex flex-col items-center justify-center relative group`}
        href="#projects"
      >
        <span
          className={`text-xs absolute -top-7 opacity-0 bg-btn-main text-white px-2 py-1 rounded-md  group-hover:opacity-100 transition-opacity`}
        >
          Project
        </span>
        <div
          className={`${
            active === "projects" ? "bg-btn-opt" : ""
          }  rounded-full p-[14px] text-txt-primary flex items-center justify-center`}
        >
          <BriefcaseIcon className={`size-5`} />
        </div>
      </a>
      <a
        onClick={() => {
          setActive("skills");
        }}
        className={`h-full flex flex-col items-center justify-center relative group`}
        href="#skills"
      >
        <span
          className={`text-xs absolute -top-7 opacity-0 bg-btn-main text-white px-2 py-1 rounded-md  group-hover:opacity-100 transition-opacity`}
        >
          Skills
        </span>
        <div
          className={`${
            active === "skills" ? "bg-btn-opt" : ""
          }  rounded-full p-[14px] text-txt-primary flex items-center justify-center`}
        >
          {/* <CodeBracketIcon className={`size-5`} /> */}
          <CodeBracketSquareIcon className={`size-5`} />
        </div>
      </a>
      <a
        onClick={() => {
          setActive("contact");
        }}
        className={`h-full flex flex-col items-center justify-center relative group`}
        href="#contact"
      >
        <span
          className={`text-xs absolute -top-7 opacity-0 bg-btn-main text-white px-2 py-1 rounded-md  group-hover:opacity-100 transition-opacity`}
        >
          Contact
        </span>
        <div
          className={`${
            active === "contact" ? "bg-btn-opt" : ""
          }  rounded-full p-[14px] text-txt-primary flex items-center justify-center`}
        >
          <PhoneIcon className={`size-5`} />
        </div>
      </a>

      <span className={`${active === "contact" ? "ml-3" : ""} py-2 h-full`}>
        <hr className=" bg-bdr-opt w-[1.8px] h-full" />
      </span>
      <div
        onClick={() => setIsDark((prev) => !prev)}
        className={`${
          isDark ? "" : ""
        }  rounded-full p-[14px] h-10 w-10 ml-2 mr-1 text-txt-primary flex items-center justify-center`}
      >
        {isDark ? (
          <div>
            <MoonIcon className={`size-5`} />
          </div>
        ) : (
          <div>
            <SunIcon className={`size-6`} />
          </div>
        )}
      </div>
      {/* <button
        
        className="px-4 py-2 bg-btn-main text-sm h-fit text-white rounded-sm right-0 top-4"
        aria-label="Toggle Theme"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button> */}

      {/* <a className="p-4 bg-btn-opt rounded-full" href="#about">
        About
      </a> */}
    </div>
  );
}

export default Navbar;
