import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Book } from "@types";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://openlibrary.org/" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<Book[], string>({
      query: (page?: string) => `/subjects/fantasy.json?page=${page ?? 0}`,
      transformResponse: (response: { works: Book[] }) => response.works,
    }),
  }),
});

export const { middleware: bookApiMiddleware, useGetAllBooksQuery } = bookApi;
