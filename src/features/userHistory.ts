import { FilterForm } from "../models/Filters";
import { User } from "../models/User";
import { getUser } from "./userFeatures";

export const setToHistory = (
  query: FilterForm,
  loggedUserLogin: string
): void => {
  const loggedUser: User = getUser(loggedUserLogin);

  loggedUser.history.push(query);

  localStorage.setItem(
    `user_${loggedUser.login}`,
    `${JSON.stringify(loggedUser)}`
  );
  localStorage.setItem("lastAuthedUser", `${JSON.stringify(loggedUser)}`);
};
