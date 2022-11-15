import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { FilterFormParams } from "../models/Filters";

const History = () => {
  const history = useAppSelector(
    (state) => state.userReducer.authorizedUser.history
  );
  return (
    <div className="container history">
      <div className="row">
        <h3>History</h3>
        <div className="collection">
          {history?.length
            ? history.map((params: FilterFormParams, index: number) => {
                // there is no unique keys =(
                return (
                  <Link
                    key={index}
                    className="collection-item"
                    to={`/search?name=${params.name}&status=${params.status}&gender=${params.gender}&page=${params.page}`}
                  >
                    {params.name ? ` | Text : ${params.name}` : null}
                    {params.status ? ` | Status : ${params.status}` : null}
                    {params.gender ? ` | Gender : ${params.gender}` : null}
                  </Link>
                );
              })
            : "No history"}
        </div>
      </div>
    </div>
  );
};

export default History;
