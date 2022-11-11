import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./redux";

import { userSlice } from "../store/reducers/userSlice";
import { FilterForm } from "../models/Filters";

interface UserValues {
  login: string;
  password: string;
}
interface EnteredUser {
  login: string;
  password: string;
  favorites: number[];
  history: FilterForm[];
}

export const useAddUser = () => {
  const navigate = useNavigate();
  const { setAuthedUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  const checkAndRegister = (values: UserValues) => {
    const enteredUser = localStorage.getItem(`user_${values.login}`);
    if (!enteredUser) {
      localStorage.setItem(
        `user_${values.login}`,
        JSON.stringify({ ...values, favorites: [], history: [] }, null, 2)
      );
      navigate("/signIn");
    } else {
      return "User with same login has already been registered.";
    }
  };

  const checkAndLogin = (values: UserValues) => {
    const enteredUser = localStorage.getItem(`user_${values.login}`);
    let parsedUser: EnteredUser;
    if (enteredUser) {
      parsedUser = JSON.parse(enteredUser);
    } else return "User with this login is not registered yet";

    if (
      parsedUser.login === values.login &&
      parsedUser.password === values.password
    ) {
      dispatch(setAuthedUser(parsedUser));
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
