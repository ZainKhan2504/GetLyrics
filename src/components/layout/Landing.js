import React from "react";
import { Link } from "react-router-dom";
import "./css/Landing.css";

const Landing = () => {
  return (
    <div className="background">
      <div id="landing-header">
        <h1>Welcome to GetLyrics!</h1>
        <Link to="/index" className="btn btn-lg btn-success">
          View Song Lyrics
        </Link>
      </div>
      <ul className="slideshow">
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
};

export default Landing;
