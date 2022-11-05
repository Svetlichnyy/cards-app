import { Link, useParams } from "react-router-dom";

import { personAPI } from "../../services/personService";

import "./CardDetails.scss";

const Details = () => {
  let { id } = useParams();

  const { data: person } = personAPI.useFetchPersonQuery(id);

  return (
    <>
      {person && (
        <div className="container section">
          <Link to="/main" className="material-icons transparent arrow">
            arrow_back
          </Link>
          <div className="card">
            <div className="card-content">
              <span className="card-title">{person.name}</span>
              <p>
                current status : {person.status} <br />
              </p>
            </div>
            <div className="card-image">
              <img src={person.image} alt="Coming soon..." />
            </div>
            <div className="card-action">
              <p>
                Location : {person.location.name} <br />
                Home place : {person.location.name} <br />
                Gender : {person.gender}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
