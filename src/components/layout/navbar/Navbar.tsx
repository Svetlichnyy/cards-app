import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";

import SignedInLink from "../SignedInLink";
import SignedOutLink from "../SignedOutLink";

import "./Navbar.scss";

function Navbar() {
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
