import { FilterFormParams } from "./Filters";

export interface User {
  login: string;
  password: string;
  favorites: number[];
  history: FilterFormParams[];
}
