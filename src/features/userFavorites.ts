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

export const getFavorites = (loggedUserLogin: string): number[] => {
  const loggedUser: User = getUser(loggedUserLogin);
  return loggedUser.favorites;
};

const getUser = (loggedUserLogin: string) => {
  let user: User;
  const userStr = localStorage.getItem(`user_${loggedUserLogin}`);

  if (userStr) {
    return (user = JSON.parse(userStr));
  }
};
