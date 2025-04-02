import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/trending" element={<Posts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;