import SearchBar from "../../components/search/SearchBar";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage ">
      <div className="welcome-image">
        <div className="container">
          <div className="row"></div>
          <div className="col s12 m4 l2"></div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
