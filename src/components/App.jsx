import React,{useRef, useEffect} from "react";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import { ParallaxProvider } from "react-scroll-parallax";

import "./App.scss";
import useLocalStorage from "use-local-storage";
import ParticlesBackground from "./ParticlesBackground";
import SideEmail from "./SideEmail";
import Home from "./Home";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const myRef =useRef()
  useEffect(()=>{
    console.log("myRef",myRef.current)
  })
  // const square = document.querySelector(".square");
  // square.classList.remove("square-transition");

  // // Create the observer, same as before:
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       square.classList.add("square-transition");
  //       return;
  //     }

  //     square.classList.remove("square-transition");
  //   });
  // });

  // observer.observe(document.querySelector(".square-wrapper"));

  return (
    <React.Fragment>
      <div data-theme={theme}>
        <ParallaxProvider>
          {/* <button className="switch" onClick={switchTheme}></button> */}
          <Header />
          <SideEmail />
          <Home />
          <About />
          <Contact />
          <div ref={myRef} className="square-wrapper">
            <div className="square square-transition"></div>
          </div>
          {/* <ParticlesBackground/> */}
        </ParallaxProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
