import React, { useState } from "react";
import Development from "./Development";
import Design from "./Design";

function Projects() {
  const [active, setActive] = useState("development");
  return (
    <section id="projects" className="flex w-full flex-col gap-3 pt-16">
      <h3 className="text-2xl font-semibold text-txt-primary">My Projects</h3>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-5">
          <button
            onClick={() => setActive("development")}
            type="button"
            className={`${
              active === "development" ? "border-txt-secondary" : "border-white"
            } border-b-2 pb-1 transition-all duration-150 ease-in-out text-sm text-txt-primary`}
          >
            <p>Development</p>
          </button>
          <button
            onClick={() => setActive("design")}
            type="button"
            className={`${
              active === "design" ? "border-txt-secondary" : "border-white"
            } border-b-2 pb-1 transition-all duration-150 ease-in-out text-sm text-txt-primary`}
          >
            <p>Design</p>
          </button>
        </div>
        <div className="w-full">
          {active === "development" ? <Development /> : <Design />}
        </div>
      </div>
    </section>
  );
}

export default Projects;
