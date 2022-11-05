import { Link } from "react-router-dom";

import { useAppDispatch } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/userSlice";

const SignedInLink = () => {
  const { setAuthedUser } = userSlice.actions;
  const dispatch = useAppDispatch();
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      setAuthedUser({
        login: "",
        password: "",
      })
    );
  };
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/favorite"> Favorite </Link>
      </li>
      <li>
        <Link to="/history"> History </Link>
      </li>
      <li>
        <button
          className="btn waves-effect light-blue darken-2"
          onClick={handleClick}
        >
          <Link to="/"> Log Out </Link>
        </button>
      </li>
    </ul>
  );
};

export default SignedInLink;
