import { User } from "../models/User";

export const getUser = (loggedUserLogin: string): User => {
  return JSON.parse(
    localStorage.getItem(`user_${loggedUserLogin}`) as string
  ) as User;
};
export const getLastUser = (): User => {
  return JSON.parse(localStorage.getItem(`lastAuthedUser`) as string) as User;
};
