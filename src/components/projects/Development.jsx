import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function Development() {
  return (
    <div className="w-full flex flex-wrap flex-col gap-10">
      <div className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] ">
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-center items-center h-[213px] rounded-md overflow-hidden">
            <img
              className="w-full h-auto rounded-md transition-transform ease-out duration-300 hover:scale-105"
              src="./images/planit.png"
              alt="plan-it-productivity-tracking"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg text-txt-primary">Plan-It</h4>
            <p className="font-normal text-sm text-txt-secondary mb-3">
              Plan-It is a productivity app to save ideas, set goals, and track
              personal growth.
            </p>
            <p className="flex gap-4 font-medium text-sm text-txt-secondary ">
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
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] flex justify-center items-center rounded-md overflow-hidden">
            <img
              className="w-full h-auto rounded-md transition-transform ease-out duration-300 hover:scale-105"
              src="./images/spendly.png"
              alt="spendly-income-expense-tracking"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg text-txt-primary">Spendly</h4>
            <p className="font-normal text-sm text-txt-secondary mb-3">
              Spendly is an app to track income, expenses, and manage budget
              easily.
            </p>
            <p className="flex gap-4 font-medium text-sm text-txt-secondary ">
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
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] ">
        {/* <div className="flex flex-wrap max-w-full sm:max-w-[330px]"> */}
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] flex justify-center items-center rounded-md overflow-hidden">
            <img
              className="w-full h-auto rounded-md transition-transform ease-out duration-300 hover:scale-105"
              src="./images/rockpaper.png"
              alt="rock-paper-scissor"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg text-txt-primary">
              Rock-Paper-Chimp
            </h4>
            <p className="font-normal text-sm text-txt-secondary mb-3">
              Rock-Paper-Chimp is a fun game of rock, paper, scissors built with
              React.
            </p>
            <p className="flex gap-4 font-medium text-sm text-txt-secondary ">
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
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] flex justify-center items-center rounded-md overflow-hidden">
            <img
              className="w-full h-auto rounded-md transition-transform ease-out duration-300 hover:scale-105"
              src="./images/working.png"
              alt="quick-note-taking"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg text-txt-primary">
              Quick-Note{" "}
              <span className="text-txt-secondary font-medium text-sm">
                (Chrome Extension)
              </span>
            </h4>
            <p className="font-normal text-sm text-txt-secondary mb-3">
              A basic chrome extension made using React to add and manage quick
              notes.
            </p>
            <p className="flex gap-4 font-medium text-sm text-txt-secondary ">
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
