import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setToHistory } from "../../features/userHistory";
import { userSlice } from "../../store/reducers/userSlice";
import { Filter } from "../../models/Filters";
import { Person } from "../../models/Person";

import "./SearchBar.scss";
import SearchBarComponent from "./SearchBarComponent";

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
    <SearchBarComponent
      seIsSuggestionsActive={seIsSuggestionsActive}
      handleDebounceInput={handleDebounceInput}
      showFilters={showFilters}
      handleClick={handleClick}
      options={options}
      setOptions={setOptions}
      isFiltersActive={isFiltersActive}
      isSuggestionsActive={isSuggestionsActive}
      suggestions={suggestions}
      error={error}
    />
  );
};

export default SearchBar;
