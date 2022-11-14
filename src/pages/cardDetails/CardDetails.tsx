import { useNavigate, useParams } from "react-router-dom";

import { personAPI } from "../../services/persService";

import "./CardDetails.scss";

const Details = () => {
  let { id } = useParams();

  const { data: person } = personAPI.useFetchPersonQuery(id);
  const navigate = useNavigate();

  return (
    <>
      {person && (
        <div className="container section card-details">
          <button
            onClick={() => navigate(-1)}
            className="material-icons btn arrow"
          >
            arrow_back
          </button>
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
                Origin : {person.origin.name} <br />
                Gender : {person.gender} <br />
                Species : {person.species}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
