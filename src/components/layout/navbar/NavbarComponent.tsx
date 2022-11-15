import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

import SignedInLink from "../SignedInLink";
import SignedOutLink from "../SignedOutLink";

interface Props {
  isUserloggedIn: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
}

function NavbarComponent({ isUserloggedIn, setIsDark, isDark }: Props) {
  return (
    <nav className="navbar">
      <div className={"nav-wrapper"}>
        <Link to="/">
          <div className="brand-logo my-logo">R & M Multiverse</div>
        </Link>
        <ul id="nav-mobile" className="right  nav-buttons">
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

export default NavbarComponent;
