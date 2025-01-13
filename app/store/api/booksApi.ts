import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import type { Book } from "./types";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://openlibrary.org/" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<any, string>({
      query: (page?: string | number) =>
        `/subjects/fantasy.json?page=${page ?? 0}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { middleware: bookApiMiddleware, useGetAllBooksQuery } = bookApi;
