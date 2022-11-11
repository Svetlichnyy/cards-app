import { FilterForm } from "./Filters";

export interface User {
  login: string;
  password: string;
  favorites: number[];
  history: FilterForm[];
}
