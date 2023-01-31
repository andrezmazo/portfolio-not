import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./Header.scss";

function Header() {
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
         let moving = window.pageYOffset
         
         setVisible(position > moving);
         setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
  })

const headerHandler = visible ? "site-header" : "hidden";

  return (
    <header className={headerHandler}>
      <h2>AZM</h2>
      <ul>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Work">Work</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <a href="/CV-Andrés Zapata Mazo.pdf" className="btn">
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
