import React from "react";
import Navbar from "./Navbar";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

const Index = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Search />
        <Tracks />
      </div>
    </React.Fragment>
  );
};

export default Index;
