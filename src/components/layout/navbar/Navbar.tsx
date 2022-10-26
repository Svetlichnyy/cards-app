import React from "react";
import { Link } from "react-router-dom";

import SignInLink from "../SignedInLink";
import SignOutLink from "../SignedOutLink";

import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <Link to="/">
          <div className="brand-logo my-logo">Logo</div>
        </Link>
        <SignInLink />
        <SignOutLink />
      </div>
    </nav>
  );
}

export default Navbar;
