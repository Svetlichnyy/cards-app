import { useNavigate } from "react-router-dom";

import { setToFavorites } from "../../features/userFavorites";
import { getLastUser } from "../../features/userFeatures";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Person } from "../../models/Person";
import { userSlice } from "../../store/reducers/userSlice";

import "./CardSummary.scss";
import CardSummaryComponent from "./CardSummaryComponent";

type CardProps = {
  card: Person;
};

const CardSummary = ({ card }: CardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUserLoggedIn = getLastUser();

  const { setUserFavorites } = userSlice.actions;
  const favorites = useAppSelector(
    (state) => state.userReducer.authorizedUser.favorites
  );

  const loggedUserLogin = useAppSelector(
    (state) => state.userReducer.authorizedUser.login
  );

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      setToFavorites(card, loggedUserLogin);
      dispatch(setUserFavorites(card.id));
    } else {
      navigate("/signIn");
    }
  };

  return (
    <CardSummaryComponent
      card={card}
      favorites={favorites}
      clickHandler={clickHandler}
    />
  );
};

export default CardSummary;
