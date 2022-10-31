import { Link, useParams } from "react-router-dom";

import { personAPI } from "../../services/PersonService";

import "./CardDetails.scss";

const Details = () => {
  let { id } = useParams();

  const { data: currentPerson } = personAPI.useFecthCurrentPersonQuery(id);

  return (
    <>
      {currentPerson && (
        <div className="container section">
          <Link to="/main" className="material-icons transparent arrow">
            arrow_back
          </Link>
          <div className="card">
            <div className="card-content">
              <span className="card-title">{currentPerson.name}</span>
              <p>
                Current status : {currentPerson.status} <br />
              </p>
            </div>
            <div className="card-image">
              <img src={currentPerson.image} alt="Coming soon..." />
            </div>
            <div className="card-action">
              <p>
                Location : {currentPerson.location.name} <br />
                Homeplace : {currentPerson.location.name} <br />
                Gender : {currentPerson.gender}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
