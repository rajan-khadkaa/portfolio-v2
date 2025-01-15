import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import profImage from "./assets/profile.png";
import {
  BeakerIcon,
  ArrowUpCircleIcon,
  ArrowUpRightIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Development from "./Development";
import Design from "./Design";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState("development");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      console.log("Saved theme:", savedTheme); // Debug log

      if (savedTheme) {
        setIsDark(savedTheme === "dark");
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        console.log("System prefers dark mode:", prefersDark); // Debug log
        setIsDark(prefersDark);
      }
    }
  }, []);

  // Apply theme changes to the DOM and save preference
  useEffect(() => {
    const root = document.documentElement;
    console.log("Setting theme:", isDark ? "dark" : "light"); // Debug log

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = (e) => {
        setIsDark(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${email.split("@")[0]}! \n\n I got your message.`);
  };

  return (
    <div className="flex bg-white justify-center w-full pb-20">
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="px-4 py-2 bg-btn-main h-fit text-white rounded-sm fixed right-10 top-4"
        aria-label="Toggle Theme"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
      <div className=" flex flex-col gap-12 items-start mt-24 max-w-[700px] min-w-[632px] w-full h-full">
        {/* profile */}
        <div className="flex flex-col gap-5">
          <div className="img-div border-2 border-gray-400 bg-btn-opt shadow-xl">
            <img
              className="img-profile"
              // src="../../assets/profile-2.jpg"
              src={profImage}
              alt="Image"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="text-4xl font-bold text-txt-highlight">
              Hi, I am Rajan
            </h2>
            <p className="text-txt-secondary font-medium">
              I am a MERN stack developer, looking for internships.
            </p>
          </div>
        </div>
        {/* my projects */}
        <div className="flex w-full flex-col gap-3">
          <h3 className="text-xl font-semibold text-txt-primary">
            My Projects
          </h3>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-5">
              <button
                onClick={() => setActive("development")}
                type="button"
                className={`${
                  active === "development"
                    ? "border-txt-secondary"
                    : "border-white"
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
        </div>
        {/* my skills */}
        <div className="flex w-full flex-col gap-3">
          <h3 className="text-xl font-semibold text-txt-primary">My Skills</h3>
          <div className="w-full flex flex-wrap gap-2">
            <div className="bg-btn-main text-white rounded-md py-[7px] px-4 text-sm h-fit">
              <p className="m-0 p-0">React</p>
            </div>
            <div className="bg-btn-main text-white rounded-md py-[7px] px-4 text-sm  h-fit">
              <p className="m-0 p-0">Node.js</p>
            </div>
            <div className="bg-btn-main text-white rounded-md py-[7px] px-4 text-sm  h-fit">
              <p className=" m-0 p-0">JavaScript</p>
            </div>
            <div className="bg-btn-main text-white rounded-md py-[7px] px-4 text-sm  h-fit">
              <p className="m-0 p-0">MongoDB</p>
            </div>
            <div className="bg-btn-opt text-txt-secondary rounded-md py-[7px] px-4 text-sm  h-fit">
              <p className=" m-0 p-0">UI/UX Design</p>
            </div>
            <div className="bg-btn-opt text-txt-secondary rounded-md py-[7px] px-4 text-sm  h-fit">
              <p className="m-0 p-0">Graphic Design</p>
            </div>
            <div className="bg-btn-opt text-txt-secondary rounded-md py-[7px] px-4 text-sm  h-fit">
              <p className="m-0 p-0">Git & GitHub</p>
            </div>
          </div>
        </div>
        {/* more about me */}
        <div className="flex w-full flex-col gap-3">
          <h3 className="text-xl font-semibold text-txt-primary">
            More about me
          </h3>
          <p className="text-base text-txt-secondary">
            I am an eager learner seeking an internship to grow as a frontend
            developer. <br></br>Learning from professionals and contributing to
            real projects excites me, and I'm ready to take on challenges to
            grow in this field.
          </p>
        </div>
        {/* contact me  */}
        <div className="flex w-full flex-col gap-3">
          <h3 className="text-xl font-semibold text-txt-primary">Contact me</h3>
          <div className="flex flex-col gap-3 w-full ">
            <form
              className="flex flex-col items-start gap-4 w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-1  w-full">
                <label
                  className="text-xs font-semibold text-txt-secondary"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="py-2 px-3 text-sm bg-white text-txt-primary rounded-md w-full max-w-[450px] placeholder:text-txt-placeholder border-2 border-bdr-opt outline-none focus:border-txt-highlight"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="johndoe@gmail.com"
                  type="email"
                />
              </div>
              <div className="flex w-full  flex-col gap-1">
                <label
                  className="text-xs font-semibold text-txt-secondary"
                  htmlFor="email"
                >
                  Message
                </label>
                <textarea
                  value={message}
                  className="py-2  px-3 text-sm bg-white text-txt-primary rounded-md w-full max-w-[450px] placeholder:text-txt-placeholder border-2 border-bdr-opt outline-none focus:border-txt-highlight min-h-[100px] max-h-[100px] resize-none"
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Say anything!"
                  type="text"
                />
              </div>
              <button
                className="flex gap-2 items-center py-2 px-4 bg-btn-cta rounded-md text-txt-cta text-sm"
                type="submit"
              >
                <span>Send Message</span>
                <PaperAirplaneIcon className="-rotate-45 size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
