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

  const { data, isFetching } = personAPI.useFetchFavoritesQuery(favorites, {
    skip: !shouldFetch,
  });
  if (data && Array.isArray(data)) {
    cardsField = data?.map((card: Person): JSX.Element => {
      return <CardSummary key={card.id} card={card} />;
    });
  }
  if (!favorites[0]) {
    cardsField = <h2>No characters</h2>;
  }

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row center-align">
        <h3>Favorites</h3>
        {cardsField}
      </div>
    </div>
  );
};
export default Favorite;
