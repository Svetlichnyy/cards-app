import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToHistory } from "../../features/userHistory";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { Filter } from "../../models/Filters";
import { userSlice } from "../../store/reducers/userSlice";
import Filters from "../filters/Filters";

import "./SearchBar.scss";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { setUserHistory } = userSlice.actions;
  const loggedUserLogin = useAppSelector(
    (state) => state.userReducer.authorizedUser.login
  );
  console.log(loggedUserLogin);

  const [options, setOptions] = useState<Filter>({
    gender: "",
    status: "",
  });

  const [isFiltersActive, setIsFiltersActive] = useState<boolean>(false);

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(
      "/search?name=" +
        name +
        "&status=" +
        options.status +
        "&gender=" +
        options.gender +
        "&page=1"
    );
    const query = {
      name,
      status: options.status,
      gender: options.gender,
      page: 1,
    };
    setToHistory(query, loggedUserLogin);
    dispatch(setUserHistory(query));
  };

  const showFilters = () => {
    setIsFiltersActive(!isFiltersActive);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="search-wrapper col s12 m4 l12 center-align">
          <nav className="search-bar">
            <div className="nav-wrapper light-blue darken-3">
              <form>
                <div className="input-field indigo ">
                  <input
                    onChange={(e) => setName(e.target.value)}
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
                    onClick={handleClick}
                    type="submit"
                    className="button-search waves-effect indigo lighten-1 btn"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </nav>
          <Filters
            filters={options}
            setFilters={setOptions}
            isFiltersActive={isFiltersActive}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
