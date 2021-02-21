import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [nav, setNav] = useState("Home");
  const navClick = (link) => {
    setNav(link);
  };
  return (
    <nav className="nav">
      <div className="link">{nav}</div>
      <div className="nav-links">
        <Link to="/" className="nav-link" onClick={() => navClick("Home")}>
          Home
        </Link>
        <Link
          to="plant"
          className="nav-link"
          onClick={() => navClick("Plants")}
        >
          Plants
        </Link>
        <Link
          to="add-plant"
          className="nav-link"
          onClick={() => navClick("Add Plant")}
        >
          Add Plant
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
