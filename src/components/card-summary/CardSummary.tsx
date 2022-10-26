import { Link } from "react-router-dom";

const CardSummary = () => {
  return (
    <div className="col s12 l3">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
          <p>
            I am Link very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div className="card-action">
          <Link to="#">This is Link link</Link>
          <Link to="#">This is Link link</Link>
        </div>
      </div>
    </div>
  );
};

export default CardSummary;
