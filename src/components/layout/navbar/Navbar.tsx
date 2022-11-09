import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getLastUser } from "../../../features/userFavorites";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/userSlice";

import SignedInLink from "../SignedInLink";
import SignedOutLink from "../SignedOutLink";

import "./Navbar.scss";

function Navbar() {
  const dispatch = useAppDispatch();
  const { setAuthedUser } = userSlice.actions;
  useEffect(() => {
    dispatch(setAuthedUser(getLastUser()));
  }, []);

  const isUserloggedIn = useAppSelector(
    (state) => state.userReducer.isUserLoggedIn
  );
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <Link to="/">
          <div className="brand-logo my-logo">R & M Multiverse</div>
        </Link>
        {isUserloggedIn ? <SignedInLink /> : <SignedOutLink />}
      </div>
    </nav>
  );
}

export default Navbar;
