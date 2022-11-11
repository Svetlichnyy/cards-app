import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setToHistory } from "../../features/userHistory";
import { userSlice } from "../../store/reducers/userSlice";
import { Filter } from "../../models/Filters";
import Filters from "../filters/Filters";

import { DebounceInput } from "react-debounce-input";
import { Person } from "../../models/Person";
import Suggestions from "../suggestions/Suggestions";

import "./SearchBar.scss";

const SearchBar = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setUserHistory } = userSlice.actions;
  const loggedUserLogin = useAppSelector(
    (state) => state.userReducer.authorizedUser.login
  );
  const [suggestions, setSuggestions] = useState<Array<Person>>([]);
  const [options, setOptions] = useState<Filter>({
    gender: "",
    status: "",
  });

  const [isFiltersActive, setIsFiltersActive] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [isSuggestionsActive, seIsSuggestionsActive] = useState(false);

  useEffect(() => {
    if (name !== "" || options.status !== "" || options.gender !== "") {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=${options.status}&gender=${options.gender}`
      )
        .then((res) => res.json())
        .then((data) => data.results.slice(0, 5))
        .then((results) => {
          setSuggestions(results);
        })
        .catch((e) => {
          if (e instanceof Error) {
            setError(e.message);
            setSuggestions([]);
          }
        });
    } else {
      setSuggestions([]);
    }
  }, [name, options]);

  const handleDebounceInput = (value: string) => {
    setName(value);
  };
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
  const handleBlur = (e: any) => {
    console.log(e);
    seIsSuggestionsActive(false);
  };

  return (
    <div className="row">
      <div className="search-wrapper col s12 m4 l12 center-align">
        <nav className="search-bar">
          <div className="nav-wrapper light-blue darken-3">
            <form>
              <div className="input-field">
                <DebounceInput
                  autoComplete="off"
                  onFocus={() => seIsSuggestionsActive(true)}
                  minLength={2}
                  debounceTimeout={500}
                  onChange={(e) => handleDebounceInput(e.target.value)}
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
                  className="button-search waves-effect btn"
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
          seIsSuggestionsActive={seIsSuggestionsActive}
        />
        <Suggestions
          seIsSuggestionsActive={seIsSuggestionsActive}
          isSuggestionsActive={isSuggestionsActive}
          suggestions={suggestions}
          error={error}
        />
      </div>
    </div>
  );
};

export default SearchBar;
