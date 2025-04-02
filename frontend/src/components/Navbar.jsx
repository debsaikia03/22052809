import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-4">
      <Link to="/" className="mr-4">Top Users</Link>
      <Link to="/trending" className="mr-4">Trending Posts</Link>
      <Link to="/feed">Feed</Link>
    </nav>
  );
};

export default Navbar;