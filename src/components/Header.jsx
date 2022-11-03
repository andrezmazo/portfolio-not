import { React } from "react";
import "./Header.scss";

function Header() {
  return (
    <header id="site-header">
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
