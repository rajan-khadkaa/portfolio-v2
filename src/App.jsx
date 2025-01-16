import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [currentPos, setCurrentPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const newPos = scrollY;
      if (newPos > currentPos) {
        setShow(false);
      } else {
        // console.log("up up up!");
        setShow(true);
      }
      // console.log("scroll point is: ", scrollY);
      setCurrentPos(newPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPos]);
  return (
    <div className="flex bg-white justify-center w-full h-full pb-10">
      <div className="flex relative flex-col items-start max-w-[700px] min-w-[632px] w-full h-full">
        <Profile />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <div
          className={`${
            show ? "" : "translate-y-full opacity-0"
          } transition-all duration-500 fixed bottom-4 left-1/2 transform -translate-x-1/2 box-border rounded-full bg-white shadow-shadow-all-sides border-[1.5px] border-bdr-opt`}
        >
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
