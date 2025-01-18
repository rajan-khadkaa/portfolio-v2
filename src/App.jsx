import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [currentPos, setCurrentPos] = useState(0);

  //this is to hide the navbar just like linked-in feature but some issues need to be solved
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const newPos = scrollY;
  //     if (newPos > currentPos) {
  //       setShow(false);
  //     } else {
  //       // console.log("up up up!");
  //       setShow(true);
  //     }
  //     // console.log("scroll point is: ", scrollY);
  //     setCurrentPos(newPos);
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [currentPos]);

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight; //eg. 2000px
    const viewportHeight = document.documentElement.clientHeight; //eg. 800px
    const scrolledHeight = window.scrollY; //it never ie total window height, must add viewport height then it will be. so 1200px

    // now add viewportHeight and scrolledHeight and if it is greater or equals to totalHeight then it should hide the
    // navbar.All this is done to hide navbar when it reaches footer so navbar won't block footer contents
    if (viewportHeight + scrolledHeight >= totalHeight) {
      setShow(false);
    } else {
      setShow(true);
    }
  });

  return (
    <div className="flex flex-col items-center bg-none w-full h-full">
      <div className="flex flex-col bg-white items-center w-full h-full pb-10">
        <div className="flex relative flex-col items-start max-w-[700px] px-3  w-full h-full">
          <Profile />
          <Projects />
          <Skills />
          <About />
          <Contact />
          <div
            className={`${
              // show ? "" : "translate-y-full opacity-0" //this works to hide the navbar but then some top portions are still hoverable so use below part
              show ? "" : "translate-y-[calc(100%+50px)]" //this will hide and further push down the navbar by 50px so nothing appears
              // show ? "" : ""
            } transition-all duration-500 fixed bottom-4 left-1/2 transform -translate-x-1/2 box-border rounded-full bg-white shadow-shadow-all-sides border-[1.5px] border-bdr-opt`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-clr-footer w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
