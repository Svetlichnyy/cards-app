import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";

import { userSlice } from "../../store/reducers/userSlice";

import "./SearchBar.scss";

interface Props {
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  setIsFiltersActive?: React.Dispatch<React.SetStateAction<boolean>>;
  isFiltersActive?: boolean;
  setIsSearching?: React.Dispatch<React.SetStateAction<boolean>>;
  isSearching?: boolean;
}

const SearchBar = ({
  setPage,
  setIsFiltersActive,
  isFiltersActive,
  setIsSearching,
  isSearching,
}: Props) => {
  const { setSearchWord } = userSlice.actions;
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSearching && setIsSearching(true);
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    dispatch(setSearchWord(target.search.value));
    setPage && setPage(1);
    navigate("/main");
  };

  const showFilters = () => {
    setIsFiltersActive && setIsFiltersActive(!isFiltersActive);
  };
  return (
    <nav className="search-bar">
      <div className="nav-wrapper light-blue darken-3">
        <form onSubmit={handleSubmit}>
          <div className="input-field indigo ">
            <input
              placeholder="type something..."
              id="search"
              type="search"
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={showFilters}>
              filter_list
            </i>
            <button
              type="submit"
              className="button-search waves-effect indigo lighten-1 btn"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
