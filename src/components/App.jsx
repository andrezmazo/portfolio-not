import React from "react";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";

import useLocalStorage from "use-local-storage";
import Parallax from "./Parallax";
import ParticlesBackground from "./ParticlesBackground";
import "./App.scss";

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
        <Header />
        {/* <Parallax /> */}
        <About />
        <Contact />
        {/* <ParticlesBackground/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
