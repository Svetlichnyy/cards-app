import { useFormik, FormikErrors } from "formik";
import { useNavigate } from "react-router-dom";

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
  }

  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const SignIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      signedIn: "false",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem(
        `user_${values.login}`,
        JSON.stringify(values, null, 2)
      );
      navigate("/main");
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4 l2"></div>
        <div className="col s12 m4 l8 center-align wrap">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="login">Login</label>
            <input
              id="login"
              name="login"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.login}
            />
            <div className="error-message">
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
export default SignIn;
