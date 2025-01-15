import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function Development() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))]">
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] border-[1.5px] border-bdr-opt rounded-md overflow-hidden">
            <img
              className="w-full h-full transition-transform ease-out duration-300 hover:scale-105"
              src="./img-4.png"
              alt="plan-it"
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
                <a target="_blank" href="https://github.com/rajan-khadkaa">
                  Demo
                </a>
              </button>
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a target="_blank" href="https://github.com/rajan-khadkaa">
                  Github
                </a>
                <ArrowUpRightIcon className="size-3" stroke-width="2.5" />
              </button>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] border-[1.5px] border-bdr-opt rounded-md overflow-hidden">
            <img
              className="w-full h-full transition-transform ease-out duration-300 hover:scale-105"
              src="./img-2.png"
              alt="plan-it"
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
                  href="https://income-expense-haql.onrender.com/"
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
                <ArrowUpRightIcon className="size-3" stroke-width="2.5" />
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))]">
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] border-[1.5px] border-bdr-opt rounded-md overflow-hidden">
            <img
              className="w-full h-full transition-transform ease-out duration-300 hover:scale-105"
              src="./img-3.png"
              alt="plan-it"
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
                <ArrowUpRightIcon className="size-3" stroke-width="2.5" />
              </button>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] border-[1.5px] border-bdr-opt rounded-md overflow-hidden">
            <img
              className="w-full h-full transition-transform ease-out duration-300 hover:scale-105"
              src="./img-1.png"
              alt="plan-it"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg text-txt-primary">
              Quick-List
            </h4>
            <p className="font-normal text-sm text-txt-secondary mb-3">
              A basic app made using React to add, track, and manage daily
              tasks.
            </p>
            <p className="flex gap-4 font-medium text-sm text-txt-secondary ">
              <button className="border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a target="_blank" href="https://github.com/rajan-khadkaa">
                  Demo
                </a>
              </button>
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a target="_blank" href="https://github.com/rajan-khadkaa">
                  Github
                </a>
                <ArrowUpRightIcon className="size-3" stroke-width="2.5" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
