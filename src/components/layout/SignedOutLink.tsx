import React from "react";

import { Link } from "react-router-dom";

const SignedOutLink = () => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/SignUp"> Sign Up </Link>
      </li>
      <li>
        <Link to="/SignIn"> Log In </Link>
      </li>
    </ul>
  );
};

export default SignedOutLink;
