import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { personAPI } from "../services/persService";
import { Person } from "../models/Person";

import Pagination from "../components/pagination/Pagination";
import Loader from "../components/layout/loader/Loader";
import SearchBar from "../components/search/SearchBar";
import CardSummary from "../components/cardSummary/CardSummary";

const Main = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")));
  const { data, isFetching } = personAPI.useFetchPageOfPersonsQuery({
    page: searchParams.get("page"),
    name: searchParams.get("name"),
    status: searchParams.get("status"),
    gender: searchParams.get("gender"),
  });
  let cardsField;
  if (data) {
    cardsField = data.results.map((card: Person): JSX.Element => {
      return <CardSummary key={card.id} card={card} />;
    });
  } else {
    cardsField = <div>No characters</div>;
  }

  if (isFetching) {
    return <Loader />;
  }
  const pagesAmount = Number(data?.info.pages) || 0;

  return (
    <div className="container">
      <div className="row center-align">
        <SearchBar />
        {cardsField}
      </div>
      <div className="row center-align">
        <Pagination pagesAmount={pagesAmount} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Main;
