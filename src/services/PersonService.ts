import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const personAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchSearchedPersons: build.query({
      query: (searchWord) => `/?name=${searchWord}`,
    }),
    fetchPerson: build.query({
      query: (id) => `/${id}`,
    }),
    fetchPageOfPersons: build.query({
      query: ({ page, name, status, gender }) => {
        return {
          params: { page, name, status, gender },
          url: "/",
        };
      },
    }),
  }),
});
