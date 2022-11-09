import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Person } from "../models/Person";

const BASE_URL = "https://rickandmortyapi.com/api/character";
//
//      Оно понадобится позже,правда...
//
// interface IdResponse {
//   status: string;
//   endpointName: string;
//   requestId: string;
//   originalArgs: number[] | number;
//   startedTimeStamp: number;
//   data: Person[] | Person;
//   fulfilledTimeStamp: number;
// }

export const personAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
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
