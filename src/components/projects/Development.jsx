import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { FaReact, FaNodeJs, FaCss3 } from "react-icons/fa";
import { RiTailwindCssLine, RiFirebaseLine } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { SiCloudinary, SiJsonwebtokens } from "react-icons/si";

function Development() {
  return (
    <div className="w-full relative overflow-visible flex flex-wrap flex-col gap-10">
      {/* <div className="wrapper-card">
        <div className="content-card w-[200px] h-[200px]"></div>
      </div> */}
      <div className="w-full grid gap-10 sm:gap-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] ">
        <div className="flex flex-col gap-2">
          <div className="flip-wrapper h-[217px]">
            <div className="card-front bg-project-card h-[213px] flex justify-center items-center rounded-md overflow-hidden">
              <img
                className="w-[84%] h-auto rounded-md"
                src="./images/planit2.png"
                alt="plan-it-productivity-tracking"
              />
            </div>
            <div className="card-back flex flex-col gap-2 h-[213px] w-full rounded-md px-5 py-5 bg-project-card">
              <div className="p-1 w-fit  rounded-full bg-white">
                <img
                  className="size-8"
                  src="./logo/planit_logo.svg"
                  alt="productivity logo"
                />
              </div>
              <p className="font-normal text-sm text-txt-secondary mb-4">
                Plan-It is a productivity app to save ideas, set goals, and
                track personal growth.
              </p>
              <div className="font-normal flex flex-wrap gap-1 text-xs text-center text-txt-secondary">
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  React
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  Tailwind
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  Node.js
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  MongoDB
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  Firebase
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  Cloudinary
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg text-txt-primary">Plan-It</h4>
            {/* <div className="flex gap-2 items-center">
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <FaReact style={{ strokeWidth: 8, color: "#61DAFB" }} />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <RiTailwindCssLine
                  style={{
                    strokeWidth: 0,
                    color: "#38B2AC",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <FaNodeJs style={{ strokeWidth: 6, color: "#339933" }} />
              </span>

              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <TbBrandMongodb
                  style={{
                    strokeWidth: 2,
                    color: "#47A248",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <RiFirebaseLine
                  style={{
                    strokeWidth: 0,
                    color: "#e9b311",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <SiCloudinary
                  style={{
                    strokeWidth: 0.5,
                    color: "#5569eb",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <SiJsonwebtokens className="text-btn-main opacity-70" />
              </span>
            </div> */}
            <div className="flex gap-2 items-center">
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#61DAFB] hover:border-[#61DAFB] transition-colors duration-500">
                <FaReact style={{ strokeWidth: 8 }} />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#38B2AC] hover:border-[#38B2AC] transition-colors duration-500">
                <RiTailwindCssLine
                  style={{
                    strokeWidth: 0,
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#339933] hover:border-[#339933] transition-colors duration-500">
                <FaNodeJs style={{ strokeWidth: 6 }} />
              </span>

              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#47A248] hover:border-[#47A248] transition-colors duration-500">
                <TbBrandMongodb
                  style={{
                    strokeWidth: 2,
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#e9b311] hover:border-[#e9b311] transition-colors duration-500">
                <RiFirebaseLine
                  style={{
                    strokeWidth: 0,
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#5569eb] hover:border-[#5569eb] transition-colors duration-500">
                <SiCloudinary
                  style={{
                    strokeWidth: 0.5,
                  }}
                />
              </span>
            </div>
            <div className="flex gap-4 mt-2 font-medium text-sm text-txt-secondary ">
              <button className="border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a target="_blank" href="https://plan-it-mern-app.vercel.app/">
                  Demo
                </a>
              </button>
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a
                  target="_blank"
                  href="https://github.com/rajan-khadkaa/plan-it"
                >
                  Github
                </a>
                <ArrowUpRightIcon className="size-3" strokeWidth="2.5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flip-wrapper h-[217px]">
            <div className="card-front bg-project-card h-[213px] flex justify-center items-center rounded-md overflow-hidden">
              <img
                className="w-[84%] h-auto rounded-md"
                src="./images/spendly2.png"
                alt="spendly-income-expense-tracking"
              />
            </div>
            <div className="card-back flex flex-col gap-2 h-[213px] w-full rounded-md px-5 py-5 bg-project-card">
              <div className="p-1 w-fit  rounded-full bg-white">
                <img
                  className="size-8"
                  src="./logo/spendly_logo.svg"
                  alt="income expense logo"
                />
              </div>
              <p className="font-normal text-sm text-txt-secondary mb-4">
                Spendly is an app to track income, expenses, and manage budget
                easily.
              </p>
              <div className="font-normal flex flex-wrap gap-1 text-xs text-center text-txt-secondary">
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  React
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  Tailwind
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  Node.js
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  MongoDB
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  JWT
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg text-txt-primary">Spendly</h4>
            {/* <div className="flex gap-2 items-center">
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <FaReact style={{ strokeWidth: 8, color: "#61DAFB" }} />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <RiTailwindCssLine
                  style={{
                    strokeWidth: 0,
                    color: "#38B2AC",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <FaNodeJs style={{ strokeWidth: 6, color: "#339933" }} />
              </span>

              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <TbBrandMongodb
                  style={{
                    strokeWidth: 2,
                    color: "#47A248",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <RiFirebaseLine
                  style={{
                    strokeWidth: 0,
                    color: "#e9b311",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <SiCloudinary
                  style={{
                    strokeWidth: 0.5,
                    color: "#5569eb",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <SiJsonwebtokens className="text-btn-main opacity-70" />
              </span>
            </div> */}
            <div className="flex gap-2 items-center">
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#61DAFB] hover:border-[#61DAFB] transition-colors duration-500">
                <FaReact style={{ strokeWidth: 8 }} />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#38B2AC] hover:border-[#38B2AC] transition-colors duration-500">
                <RiTailwindCssLine
                  style={{
                    strokeWidth: 0,
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#339933] hover:border-[#339933] transition-colors duration-500">
                <FaNodeJs style={{ strokeWidth: 6 }} />
              </span>

              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#47A248] hover:border-[#47A248] transition-colors duration-500">
                <TbBrandMongodb
                  style={{
                    strokeWidth: 2,
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack opacity-90 hover:opacity-100 hover:text-txt-primary hover:border-txt-primary transition-colors duration-500">
                <SiJsonwebtokens />
              </span>
            </div>
            <div className="flex gap-4 mt-2 font-medium text-sm text-txt-secondary ">
              <button className="border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a
                  target="_blank"
                  href="https://income-expense-mern-app.vercel.app/"
                >
                  Demo
                </a>
              </button>
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a
                  target="_blank"
                  href="https://github.com/rajan-khadkaa/income-expense-tracker"
                >
                  Github
                </a>
                <ArrowUpRightIcon className="size-3" strokeWidth="2.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid gap-10 sm:gap-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] ">
        {/* <div className="flex flex-wrap max-w-full sm:max-w-[330px]"> */}
        <div className="flex flex-col gap-2">
          <div className="flip-wrapper h-[217px]">
            <div className="card-front bg-project-card h-[213px] flex justify-center items-center rounded-md overflow-hidden">
              <img
                className="w-[84%] h-auto rounded-md"
                src="./images/rockpaper2.png"
                alt="rock-paper-scissor"
              />
            </div>
            <div className="card-back flex flex-col gap-2 h-[213px] w-full rounded-md px-5 py-5 bg-project-card">
              <div className="p-1 w-fit  rounded-full bg-white">
                <img
                  className="size-8"
                  src="./logo/rockpaper_logo.svg"
                  alt="rock paper scissor logo"
                />
              </div>
              <p className="font-normal text-sm text-txt-secondary mb-4">
                Rock-Paper-Chimp is a fun game based on the classic rock, paper,
                scissors concept, created using React.
              </p>
              <div className="font-normal flex flex-wrap gap-1 text-xs text-center text-txt-secondary">
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  React
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  CSS
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg text-txt-primary">
              Rock-Paper-Chimp
            </h4>
            {/* <div className="flex gap-2 items-center">
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <FaReact style={{ strokeWidth: 8, color: "#61DAFB" }} />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <RiTailwindCssLine
                  style={{
                    strokeWidth: 0,
                    color: "#38B2AC",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <FaNodeJs style={{ strokeWidth: 6, color: "#339933" }} />
              </span>

              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <TbBrandMongodb
                  style={{
                    strokeWidth: 2,
                    color: "#47A248",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <RiFirebaseLine
                  style={{
                    strokeWidth: 0,
                    color: "#e9b311",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <SiCloudinary
                  style={{
                    strokeWidth: 0.5,
                    color: "#5569eb",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <SiJsonwebtokens className="text-btn-main opacity-70" />
              </span>
            </div> */}
            <div className="flex gap-2 items-center">
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#61DAFB] hover:border-[#61DAFB] transition-colors duration-500">
                <FaReact style={{ strokeWidth: 8 }} />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#264DE4] hover:border-[#264DE4] transition-colors duration-500">
                <FaCss3 style={{ strokeWidth: 1 }} />
              </span>
            </div>
            <div className="flex gap-4 mt-2 font-medium text-sm text-txt-secondary ">
              <button className="border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a
                  target="_blank"
                  href="https://rajan-khadkaa.github.io/rock-paper-scissor/"
                >
                  Demo
                </a>
              </button>
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a
                  target="_blank"
                  href="https://github.com/rajan-khadkaa/rock-paper-scissor"
                >
                  Github
                </a>
                <ArrowUpRightIcon className="size-3" strokeWidth="2.5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flip-wrapper h-[217px]">
            <div className="card-front bg-project-card h-[213px] flex justify-center items-center rounded-md overflow-hidden">
              <img
                // className="w-full h-auto rounded-md transition-transform ease-out duration-300 hover:scale-105"
                className="w-[84%] h-auto rounded-md"
                src="./images/working2.png"
                alt="quick-note-taking"
              />
            </div>
            <div className="card-back flex flex-col gap-2 h-[213px] w-full rounded-md px-5 py-5 bg-project-card">
              <div className="p-1 w-fit  rounded-full bg-white">
                <img
                  className="size-8"
                  src="./logo/quicknote_logo.svg"
                  alt="productivity logo"
                />
              </div>
              <p className="font-normal text-sm text-txt-secondary mb-4">
                A basic chrome extension developed with React to add, organize,
                and manage notes quickly and easily.
              </p>
              <div className="font-normal flex flex-wrap gap-1 text-xs text-center text-txt-secondary">
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  React
                </span>
                <span className="bg-white rounded-md px-[10px] py-[3px]">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
          {/* <Card imageSrc="./images/working.png" altText="quick-note-taking" /> */}
          {/* </div> */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg text-txt-primary">
              Quick-Note{" "}
              <span className="text-txt-secondary font-medium text-sm">
                (Chrome Extension)
              </span>
            </h4>
            {/* <div className="flex gap-2 items-center">
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <FaReact style={{ strokeWidth: 8, color: "#61DAFB" }} />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <RiTailwindCssLine
                  style={{
                    strokeWidth: 0,
                    color: "#38B2AC",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <FaNodeJs style={{ strokeWidth: 6, color: "#339933" }} />
              </span>

              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <TbBrandMongodb
                  style={{
                    strokeWidth: 2,
                    color: "#47A248",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <RiFirebaseLine
                  style={{
                    strokeWidth: 0,
                    color: "#e9b311",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <SiCloudinary
                  style={{
                    strokeWidth: 0.5,
                    color: "#5569eb",
                  }}
                />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt">
                <SiJsonwebtokens className="text-btn-main opacity-70" />
              </span>
            </div> */}
            <div className="flex gap-2 items-center">
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#61DAFB] hover:border-[#61DAFB] transition-colors duration-500">
                <FaReact style={{ strokeWidth: 8 }} />
              </span>
              <span className="p-1 rounded-full border-[1.5px] border-btn-opt text-tech-stack hover:text-[#38B2AC] hover:border-[#38B2AC] transition-colors duration-500">
                <RiTailwindCssLine
                  style={{
                    strokeWidth: 0,
                  }}
                />
              </span>
            </div>
            <div className="flex gap-4 mt-2 font-medium text-sm text-txt-secondary ">
              {/* <button className="border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a target="_blank" href="https://github.com/rajan-khadkaa">
                  Demo
                </a>
              </button> */}
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a target="_blank" href="https://github.com/rajan-khadkaa">
                  Github
                </a>
                <ArrowUpRightIcon className="size-3" strokeWidth="2.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
