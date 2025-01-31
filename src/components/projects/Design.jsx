import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function Design() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] ">
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] flex justify-center items-center rounded-md overflow-hidden">
            <img
              className="w-full h-auto rounded-md transition-transform ease-out duration-300 hover:scale-105"
              src="./images/safetrack.png"
              alt="child-safety tracking"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg text-txt-primary">
              SafeTrack
            </h4>
            <p className="font-normal text-sm text-txt-secondary mb-3">
              A mobile app UI to track children's safety, routine and an
              emergency alert mode.
            </p>
            <p className="flex gap-4 font-medium text-sm text-txt-secondary ">
              {/* <button className="border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a target="_blank" href="https://github.com/rajan-khadkaa">
                  Demo
                </a>
              </button> */}
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a
                  target="_blank"
                  href="https://rajankhadka.notion.site/SafeTrack-Child-Monitoring-App-2221fb7474b14dc4854f7a0840207f35"
                >
                  Case Study
                </a>
                <ArrowUpRightIcon className="size-3" stroke-width="2.5" />
              </button>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] flex justify-center items-center rounded-md overflow-hidden">
            <img
              className="w-full h-auto rounded-md transition-transform ease-out duration-300 hover:scale-105"
              src="./images/hrms.png"
              alt="human-resource-management"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg text-txt-primary">
              Human Resource MS
            </h4>
            <p className="font-normal text-sm text-txt-secondary mb-3">
              A web app UI to manage employee data like attendance, tasks, and
              payroll.
            </p>
            <p className="flex gap-4 font-medium text-sm text-txt-secondary ">
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a
                  target="_blank"
                  href="https://rajankhadka.notion.site/HRMS-Human-Resource-Management-79e46b9f123248069996c822633b6893"
                >
                  Case Study
                </a>
                <ArrowUpRightIcon className="size-3" stroke-width="2.5" />
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] ">
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] flex justify-center items-center rounded-md overflow-hidden">
            <img
              className="w-full h-auto rounded-md transition-transform ease-out duration-300 hover:scale-105"
              src="./images/dashboard.png"
              alt="human-resource-dashboard"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg text-txt-primary">
              Dashboard (HRMS)
            </h4>
            <p className="font-normal text-sm text-txt-secondary mb-3">
              A dashboard design to track employee metrics and manage HR data
              efficiently.
            </p>
            <p className="flex gap-4 font-medium text-sm text-txt-secondary ">
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a
                  target="_blank"
                  href="https://rajankhadka.notion.site/Dashboard-HRMS-f006888043b1442d9e88e313b9e2c531"
                >
                  Case Study
                </a>
                <ArrowUpRightIcon className="size-3" stroke-width="2.5" />
              </button>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full h-[213px] flex justify-center items-center rounded-md overflow-hidden">
            <img
              className="w-full h-auto rounded-md transition-transform ease-out duration-300 hover:scale-105"
              src="./images/donate.png"
              alt="blood-donation"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg text-txt-primary">
              Blood Donation
            </h4>
            <p className="font-normal text-sm text-txt-secondary mb-3">
              A site connecting blood donors with organizations for easier and
              faster donations.
            </p>
            <p className="flex gap-4 font-medium text-sm text-txt-secondary">
              <button className="flex items-center gap-1 border-b-[1.8px] border-txt-secondary hover:text-txt-primary hover:border-txt-primary transition-colors duration-150 ease-out">
                <a
                  target="_blank"
                  href="https://rajankhadka.notion.site/DonateRed-Blood-Donation-6caf81b95a9e4c6a8b926a64837433a1"
                >
                  Case Study
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

export default Design;
