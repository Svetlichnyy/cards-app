import { Link } from "react-router-dom";

import { personAPI } from "../../services/PersonService";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Person } from "../../models/Person";

import CardSummary from "../card-summary/CardSummary";

const CardList = () => {
  const searchWord = useAppSelector((state) => state.searchReducer.searchWord);
  const { data: persons } = personAPI.useFetchSearchedPersonsQuery(searchWord);

  return (
    <div className="container">
      <div className="row">
        {persons &&
          persons.results.map((person: Person) => (
            <Link key={person.id} to={"/Card/" + person.id}>
              <CardSummary key={person.id} card={person} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CardList;
