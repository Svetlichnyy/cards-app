import React from "react";

import { Link } from "react-router-dom";

const SignedInLink = () => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/"> Log Out </Link>
      </li>
    </ul>
  );
};

export default SignedInLink;
