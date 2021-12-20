import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Team Members</span>
        </Link>
        <Link to="/add">
          <button className="btn btn-primary">Add New</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
