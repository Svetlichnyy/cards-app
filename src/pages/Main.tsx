import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../hooks/redux";
import { personAPI } from "../services/personService";
import { Person } from "../models/Person";
import CardSummary from "../components/cardSummary/CardSummary";
import Pagination from "../components/pagination/Pagination";
import Loader from "../components/layout/loader/Loader";
import SearchBar from "../components/search/SearchBar";
import Filters from "../components/filters/Filters";

const Main = () => {
  const [page, setPage] = useState<number>(1);
  const [isFiltersActive, setIsFiltersActive] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    gender: "",
  });

  const name = useAppSelector((state) => state.userReducer.searchWord);
  const [status, setSatus] = useState("");
  const [gender, setGender] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    setSatus(filters.status);
    setGender(filters.gender);
    setIsSearching(false);
  }, [isSearching]);

  const { data, isFetching } = personAPI.useFetchPageOfPersonsQuery({
    page,
    name,
    status,
    gender,
  });
  const pagesAmount = Number(data?.info.pages) || 0;
  let cardsField;

  if (data) {
    cardsField = data.results.map((card: Person): JSX.Element => {
      return (
        <Link key={card.id} to={"/card/" + card.id}>
          <CardSummary key={card.id} card={card} />
        </Link>
      );
    });
  } else {
    cardsField = <div>No characters</div>;
  }

  if (isFetching) {
    return <Loader />;
  }
  return (
    <>
      <div className="container">
        <div className="row center-align">
          <SearchBar
            setPage={setPage}
            setIsFiltersActive={setIsFiltersActive}
            isFiltersActive={isFiltersActive}
            setIsSearching={setIsSearching}
            isSearching={isSearching}
          />
          <Filters
            isFiltersActive={isFiltersActive}
            setFilters={setFilters}
            filters={filters}
          />
          {cardsField}
        </div>
        <div className="row center-align">
          <Pagination page={page} setPage={setPage} pagesAmount={pagesAmount} />
        </div>
      </div>
    </>
  );
};

export default Main;
