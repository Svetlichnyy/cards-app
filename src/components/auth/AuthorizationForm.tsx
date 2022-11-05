import { useFormik, FormikErrors } from "formik";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useAddUser } from "../../hooks/useAddUser";

import "./FormStyles.scss";

interface Values {
  login: string;
  password: string;
}

const validate = (values: Values) => {
  const errors: FormikErrors<Values> = {};
  if (!values.login) {
    errors.login = "Required";
  } else if (values.login.length > 15) {
    errors.login = "Must be 15 characters or less";
  } else if (values.login.length < 3) {
    errors.login = "Must be 3 characters or more";
  }

  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const AuthorizationForm = () => {
  let location = useLocation();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const { checkAndRegister, checkAndLogin } = useAddUser();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },

    validate,

    onSubmit: (values) => {
      let signError: string | undefined;

      location.pathname === "/SignUp"
        ? (signError = checkAndRegister(values))
        : (signError = checkAndLogin(values));

      if (typeof signError === "string") {
        setErrorMessage(signError);
      }
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4 l2"></div>
        <div className="col s12 m4 l8 center-align wrap">
          <h1>{location.pathname === "/SignUp" ? "Registration" : "Login"}</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="login">login</label>
            <input
              id="login"
              name="login"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.login}
            />
            <div className="error-message">
              {errorMessage ? <p>{errorMessage}</p> : null}
              {formik.errors.login ? <p>{formik.errors.login}</p> : null}
            </div>

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="error-message">
              {formik.errors.password ? <p>{formik.errors.password}</p> : null}
            </div>

            <button
              className="btn indigo lighten-2 waves-effect waves-light"
              type="submit"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AuthorizationForm;
