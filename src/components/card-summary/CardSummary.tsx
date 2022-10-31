import { Person } from "../../models/Person";
import "./CardSummary.scss";

type cardProps = {
  card: Person;
};

const CardSummary = ({ card }: cardProps) => {
  return (
    <div id="person-card" className=" col s12 l3 ">
      <div className="card indigo lighten-2">
        <div className="card-content white-text">
          <div className="card-image">
            <img src={card.image} alt="Coming soon..." />
          </div>
          <span className="card-title">{card.name}</span>
        </div>
        <p className="card-title card-footer">
          First reveal : {new Date(card.created).toLocaleDateString()}
        </p>
        <i className="material-icons">favorite_border</i>
      </div>
    </div>
  );
};

export default CardSummary;
