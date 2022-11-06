import { useState } from "react";
import SearchBar from "../../components/search/SearchBar";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="welcome-image">
        <SearchBar />
      </div>
    </div>
  );
};

export default Homepage;
