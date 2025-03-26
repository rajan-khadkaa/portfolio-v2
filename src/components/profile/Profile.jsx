import profImage from "../../assets/profile.png";
import "../../App.css";
import {
  PaperAirplaneIcon,
  EnvelopeIcon,
  DocumentIcon,
  ArrowDownTrayIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

function Profile() {
  return (
    <section
      id="home"
      className="flex justify-between items-start w-full pt-10"
    >
      <div className="flex flex-col gap-5">
        <div className="img-div border-2 border-gray-400 bg-btn-opt shadow-xl">
          <img
            className="img-profile"
            // src="../../assets/profile-2.jpg"
            src={profImage}
            // src="/img"
            alt="Image"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl font-bold text-txt-highlight">
            Hi, I am Rajan
          </h2>
          <p className="text-txt-secondary text-lg font-medium">
            I am a MERN/Next.js developer, looking for internships.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <a
              href="https://mail.google.com/mail/?view=cm&to=rajankhadkaa0809@gmail.com&su=Internship%20Opportunity&body=Hello%20Rajan!"
              target="_blank"
            >
              <button
                className="flex gap-[7px] items-center py-[10px] sm:py-[9px] px-6 bg-btn-cta border-[1.8px] border-btn-cta  rounded-md  text-txt-cta text-sm hover:bg-[#144bc2] hover:border-[#144bc2]"
                type="button"
              >
                <span>Hire Me</span>
                <ArrowUpRightIcon
                  className="size-[12px] -translate-y-[0px]"
                  strokeWidth="2.5"
                />
              </button>
            </a>
            <div className="flex gap-0 items-center border-[1.8px] border-bdr-opt rounded-md">
              <a href="/Rajan_Khadka_Resume.pdf" target="_blank">
                <button
                  className="flex gap-[10px] items-center py-[10px] sm:py-[9px] px-5 bg-none border-none rounded-md text-txt-secondary hover:text-btn-cta text-sm "
                  type="button"
                >
                  <span>View Resume</span>
                  {/* <DocumentIcon className="size-4" /> */}
                </button>
              </a>
              <div className="h-full w-fit">
                <span className="border-[1px] border-bdr-opt"></span>
              </div>
              <a
                href="/Rajan_Khakdka_Resume.pdf"
                target="_blank"
                download="Rajan_Khadka_Resume.pdf"
              >
                <button
                  className="flex bg-none px-[12px] border-none rounded-md text-txt-secondary hover:text-btn-cta"
                  type="button"
                >
                  <ArrowDownTrayIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
