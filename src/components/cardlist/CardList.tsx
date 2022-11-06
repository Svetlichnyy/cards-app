import { Link } from "react-router-dom";

import { personAPI } from "../../services/personService";
import { useAppSelector } from "../../hooks/redux";
import { Person } from "../../models/Person";

import CardSummary from "../cardSummary/CardSummary";

const CardList = () => {
  const searchWord = useAppSelector((state) => state.userReducer.searchWord);
  const { data: persons } = personAPI.useFetchPageOfPersonsQuery({
    name: searchWord,
  });

  return (
    <div className="container">
      <div className="row">
        {persons &&
          persons.results.map((person: Person) => (
            <Link key={person.id} to={"/card/" + person.id}>
              <CardSummary key={person.id} card={person} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CardList;
