import { useState } from "react";
import CardSummary from "../components/cardSummary/CardSummary";
import Loader from "../components/layout/loader/Loader";
import { getFavorites } from "../features/userFavorites";
import { useAppSelector } from "../hooks/redux";
import { Person } from "../models/Person";
import { personAPI } from "../services/personService";

const Favorite = () => {
  const loggedUserLogin = useAppSelector(
    (state) => state.userReducer.authorizedUser.login
  );
  const [selected, setSelected] = useState<number[]>(
    getFavorites(loggedUserLogin)
  );
  let cardsField;
  const shouldFetch = selected.length > 0;

  const { data, isFetching } = personAPI.useFetchPersonQuery(selected, {
    skip: !shouldFetch,
  });

  if (data) {
    cardsField = data?.map((card: Person): JSX.Element => {
      return <CardSummary key={card.id} card={card} />;
    });
  } else {
    cardsField = <div>No characters</div>;
  }

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row center-align">{cardsField}</div>
    </div>
  );
};
export default Favorite;
