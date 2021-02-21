import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="links">
        Home
      </Link>
      <Link to="plant" className="links">
        Plants
      </Link>
      <Link to="add-plant" className="links">
        Add Plant
      </Link>
    </nav>
  );
}

export default Nav;
