import React from "react";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Hello from "./Hello";

import "./App.scss";
import useLocalStorage from "use-local-storage";
import ParticlesBackground from "./ParticlesBackground";
import SideEmail from "./SideEmail";
// import Parallax from "./Parallax";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <React.Fragment>
      <div data-theme={theme}>
        {/* <button className="switch" onClick={switchTheme}></button> */}
        {/* <Parallax /> */}
        <Header />
        <Hello/>
        <SideEmail />
        <About />
        <Contact />
        {/* <ParticlesBackground/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
