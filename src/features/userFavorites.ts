import { Person } from "../models/Person";
import { User } from "../models/User";

export const setToFavorites = (card: Person, loggedUserLogin: string): void => {
  const loggedUser: User = getUser(loggedUserLogin);

  if (loggedUser.favorites.includes(card.id)) {
    const newFavorites = loggedUser.favorites.filter(
      (value) => value !== card.id
    );
    loggedUser.favorites = [...newFavorites];
  } else {
    loggedUser.favorites.push(card.id);
  }
  localStorage.setItem(
    `user_${loggedUser.login}`,
    `${JSON.stringify(loggedUser)}`
  );
};

const getUser = (loggedUserLogin: string): User => {
  return JSON.parse(
    localStorage.getItem(`user_${loggedUserLogin}`) as string
  ) as User;
};
export const getLastUser = (): User => {
  return JSON.parse(localStorage.getItem(`lastAuthedUser`) as string) as User;
};
