import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  let navigate = useNavigate();
  const handleClick = (e: any) => {
    e.preventDefault();
    navigate("/Main");
  };

  return (
    <nav className="serch-bar">
      <div className="nav-wrapper light-blue darken-3">
        <form onSubmit={handleClick}>
          <div className="input-field ">
            <input
              placeholder="type something..."
              id="search"
              type="search"
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>

          <button
            type="submit"
            className="button-search waves-effect light-blue darken-2 btn-large"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
