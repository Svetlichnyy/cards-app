import { useNavigate } from "react-router-dom";
import { Person } from "../../models/Person";

interface Props {
  clickHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  card: Person;
  favorites: number[];
}

function CardSummaryComponent({ clickHandler, card, favorites }: Props) {
  const navigate = useNavigate();

  return (
    <div
      id="person-card"
      className=" col s12 l3  card-wrap"
      onClick={() => navigate("/card/" + card.id)}
    >
      <div className="card card-summary">
        <div className="card-content white-text">
          <div className="card-image">
            <img src={card.image} alt="Coming soon..." />
          </div>
          <span className="card-title">{card.name}</span>
        </div>
        <p className="card-title card-footer">
          First reveal : {new Date(card.created).toLocaleDateString()}
        </p>
        <i className="material-icons" onClick={clickHandler}>
          {favorites.includes(card.id) ? "favorite" : "favorite_border"}
        </i>
      </div>
    </div>
  );
}

export default CardSummaryComponent;
