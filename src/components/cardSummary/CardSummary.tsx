import { useNavigate } from "react-router-dom";

import { setToFavorites } from "../../features/userFavorites";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Person } from "../../models/Person";
import { userSlice } from "../../store/reducers/userSlice";

import "./CardSummary.scss";

type CardProps = {
  card: Person;
};

const CardSummary = ({ card }: CardProps) => {
  const dispatch = useAppDispatch();
  const { setUserFavorites } = userSlice.actions;
  const favorites = useAppSelector(
    (state) => state.userReducer.authorizedUser.favorites
  );
  const loggedUserLogin = useAppSelector(
    (state) => state.userReducer.authorizedUser.login
  );
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setToFavorites(card, loggedUserLogin);
    dispatch(setUserFavorites(card.id));
  };

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
};

export default CardSummary;
