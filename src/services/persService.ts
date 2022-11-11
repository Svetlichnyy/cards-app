import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Person } from "../models/Person";
import checkNull from "../utils/checkNull";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const personAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchPerson: build.query({
      query: (id) => `/${id}`,
    }),

    fetchFavorites: build.query({
      query: (favorites) => `/${favorites}`,
      transformResponse: (responseData: Person[] | Person) => {
        if (Array.isArray(responseData)) {
          return responseData;
        } else {
          return [responseData];
        }
      },
    }),

    fetchPageOfPersons: build.query({
      query: ({ page, name, status, gender }) => {
        return {
          params: {
            page: page ? page : 1,
            name: checkNull(name),
            status: checkNull(status),
            gender: checkNull(gender),
          },
          url: "/",
        };
      },
    }),
  }),
});
