import React from "react";
import "../../index.css";

function Skills() {
  return (
    <section id="skills" className="flex w-full flex-col gap-3 pt-16">
      <h3 className="text-2xl font-semibold text-txt-primary">My Skills</h3>
      <div className="w-full flex flex-wrap relative gap-2 overflow-visible">
        <div className="shinyCard bg-btn-main text-txt-cta rounded-md py-[7px] px-4 text-sm h-fit">
          <p className="m-0 p-0">React</p>
        </div>
        <div className="shinyCard bg-btn-main text-txt-cta rounded-md py-[7px] px-4 text-sm  h-fit">
          <p className="m-0 p-0">Node.js</p>
        </div>
        <div className="shinyCard bg-btn-main text-txt-cta rounded-md py-[7px] px-4 text-sm  h-fit">
          <p className=" m-0 p-0">JavaScript</p>
        </div>
        <div className="shinyCard bg-btn-main text-txt-cta rounded-md py-[7px] px-4 text-sm  h-fit">
          <p className="m-0 p-0">MongoDB</p>
        </div>
        <div className="shinyCard bg-btn-main text-txt-cta rounded-md py-[7px] px-4 text-sm  h-fit">
          <p className="m-0 p-0">Tailwind CSS</p>
        </div>
        <div className="shinyCardOpt bg-btn-opt text-txt-secondary rounded-md py-[7px] px-4 text-sm  h-fit">
          <p className=" m-0 p-0">UI/UX Design</p>
        </div>
        <div className="shinyCardOpt bg-btn-opt text-txt-secondary rounded-md py-[7px] px-4 text-sm  h-fit">
          <p className="m-0 p-0">Graphics Design</p>
        </div>
        <div className="shinyCardOpt bg-btn-opt text-txt-secondary rounded-md py-[7px] px-4 text-sm  h-fit">
          <p className="m-0 p-0">Git & GitHub</p>
        </div>
        <div className="shinyCardOpt bg-btn-opt text-txt-secondary rounded-md py-[7px] px-4 text-sm  h-fit">
          <p className="m-0 p-0">Java</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
