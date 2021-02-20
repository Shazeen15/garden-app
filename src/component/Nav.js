import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="plant">Plants</Link>
      <Link to="add-plant">Add Plant</Link>
    </nav>
  );
}

export default Nav;
