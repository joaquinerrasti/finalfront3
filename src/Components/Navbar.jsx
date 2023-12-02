import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "./darkmode";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <div className="left">
      <div className='backLink'>
        <Link to={`/home`} className="nav-link">Back to to Home</Link>
      </div>
      </div>
      <div className="right">
        <ul>
          <li>
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favs" className="nav-link">
              Favs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
