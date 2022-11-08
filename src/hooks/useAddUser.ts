import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./redux";

import { userSlice } from "../store/reducers/userSlice";

interface UserValues {
  login: string;
  password: string;
}

export const useAddUser = () => {
  const navigate = useNavigate();
  const { setAuthedUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  let parsedUser: UserValues;

  const checkAndRegister = (values: UserValues) => {
    const enteredUser = localStorage.getItem(`user_${values.login}`);
    if (!enteredUser) {
      localStorage.setItem(
        `user_${values.login}`,
        JSON.stringify(values, null, 2)
      );
      navigate("/signIn");
    } else {
      return "User with same login has already been registered.";
    }
  };

  const checkAndLogin = (values: UserValues) => {
    const enteredUser = localStorage.getItem(`user_${values.login}`);
    if (typeof enteredUser === "string") {
      parsedUser = JSON.parse(enteredUser);
    } else return "User with this login is not registered yet";

    if (
      parsedUser.login === values.login &&
      parsedUser.password === values.password
    ) {
      dispatch(setAuthedUser(values));
      navigate("/search");
    } else if (
      parsedUser.login === values.login &&
      parsedUser.password !== values.password
    ) {
      return "Invalid password";
    }
  };

  return { checkAndRegister, checkAndLogin };
};
