import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Person } from "../models/Person";

const BASE_URL = "https://rickandmortyapi.com/api/character/";

export const personAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchSearchedPersons: build.query({
      query: (serchWord) => `/?name=${serchWord}`,
    }),
    fecthCurrentPerson: build.query({
      query: (id) => `${id}`,
    }),
  }),
});
