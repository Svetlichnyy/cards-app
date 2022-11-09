import CardSummary from "../components/cardSummary/CardSummary";
import Loader from "../components/layout/loader/Loader";
import { useAppSelector } from "../hooks/redux";
import { Person } from "../models/Person";
import { personAPI } from "../services/personService";

const Favorite = () => {
  const favorites = useAppSelector(
    (state) => state.userReducer.authorizedUser.favorites
  );
  let cardsField;
  const shouldFetch = favorites.length > 0;

  const { data, isFetching } = personAPI.useFetchPersonQuery(favorites, {
    skip: !shouldFetch,
  });

  if (Array.isArray(data)) {
    cardsField = data?.map((card: Person): JSX.Element => {
      return <CardSummary key={card.id} card={card} />;
    });
  } else if (!Array.isArray(data)) {
    cardsField = <CardSummary card={data} />;
  } else if (!data) {
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
