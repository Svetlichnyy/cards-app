import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { FilterForm } from "../models/Filters";

const History = () => {
  const history = useAppSelector(
    (state) => state.userReducer.authorizedUser.history
  );
  return (
    <div className="container">
      <div className="row">
        <div className="collection">
          {history?.length
            ? history.map((params: FilterForm, index) => {
                // uniq kluchei net :(
                return (
                  <Link
                    key={index}
                    className="collection-item indigo lighten-1"
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
