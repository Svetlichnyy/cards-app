import { useEffect } from "react";
import { Link } from "react-router-dom";

import { getLastUser } from "../../../features/userFeatures";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/userSlice";
import useTheme from "../../../hooks/useTheme";
import SignedInLink from "../SignedInLink";
import SignedOutLink from "../SignedOutLink";

import "./Navbar.scss";

function Navbar() {
  const { setIsDark, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const { setAuthedUser } = userSlice.actions;

  useEffect(() => {
    const lastUser = getLastUser();
    if (lastUser) dispatch(setAuthedUser(lastUser));
  }, []);

  const isUserloggedIn = useAppSelector(
    (state) => state.userReducer.isUserLoggedIn
  );

  return (
    <nav className="navbar">
      <div className={"nav-wrapper"}>
        <Link to="/">
          <div className="brand-logo my-logo">R & M Multiverse</div>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down nav-buttons">
          <li>{isUserloggedIn ? <SignedInLink /> : <SignedOutLink />}</li>
          <li>
            <Link to="/search">
              <i className="material-icons theme">home</i>
            </Link>
          </li>
          <li>
            <i
              className="material-icons theme"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? "wb_sunny" : "brightness_3"}
            </i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
