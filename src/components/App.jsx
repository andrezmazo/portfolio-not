import React from "react";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Hello from "./Hello";
import { ParallaxProvider } from 'react-scroll-parallax';

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

  return (
    <React.Fragment>
      <div data-theme={theme}>
      <ParallaxProvider>
        {/* <button className="switch" onClick={switchTheme}></button> */}
        <Header />
        <SideEmail />
        <Home />
        {/* <Hello/> */}
        <About />
        <Contact />
        {/* <ParticlesBackground/> */}
        </ParallaxProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
