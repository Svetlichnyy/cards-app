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
                // uniq kluchei net :(
                return (
                  <Link
                    key={index}
                    className="collection-item"
                    to={`/search?name=${params.name}&status=${params.status}&gender=${params.gender}&page=${params.page}`}
                  >
                    {JSON.stringify(params)}
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
