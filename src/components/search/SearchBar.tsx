import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";

import { searchSlice } from "../../store/reducers/PersonSlice";

const SearchBar = () => {
  const { setSearchWord } = searchSlice.actions;
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    dispatch(setSearchWord(target.search.value));
    navigate("/main");
  };
  return (
    <nav className="search-bar">
      <div className="nav-wrapper light-blue darken-3">
        <form onSubmit={handleSubmit}>
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
