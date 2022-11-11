import { Dispatch } from "react";
import { useNavigate } from "react-router-dom";

import { Person } from "../../models/Person";

import "./Suggestions.scss";

interface Props {
  suggestions: Array<Person>;
  isSuggestionsActive: boolean;
  seIsSuggestionsActive: React.Dispatch<React.SetStateAction<boolean>>;
  error?: string;
}

function Suggestions({
  suggestions,
  error,
  isSuggestionsActive,
  seIsSuggestionsActive,
}: Props) {
  const navigate = useNavigate();
  let suggestionsContent;
  if (suggestions.length) {
    suggestionsContent = suggestions.map((item: Person) => {
      return (
        <li
          className="collection-item avatar hoverable"
          key={item.id}
          onClick={() => navigate("/card/" + item.id)}
        >
          <img src={item.image} alt={item.name} className="circle" />
          <span className="title">{item.name}</span>
          <p>
            gender:{item.gender} <br />
            status:{item.status}
          </p>
          <i className="material-icons arrow">arrow_forward</i>
        </li>
      );
    });
  } else if (error) {
    suggestionsContent = (
      <li className="collection-item hoverable"> No results </li>
    );
  }

  return (
    <ul
      onMouseLeave={() => seIsSuggestionsActive(false)}
      className={
        isSuggestionsActive ? "collection col s12 l6  left-align" : "hide"
      }
    >
      {suggestionsContent}
    </ul>
  );
}

export default Suggestions;
