import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Book, BookRating } from "@types";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://openlibrary.org/" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<Book[], string>({
      query: (page = "0") => `/subjects/fantasy.json?page=${page}`,
      transformResponse: (response: { works: Book[] }) => response.works,
    }),
    getBookInfo: builder.query<Book, string>({
      query: (id) => `/works/${id}.json`,
    }),
    getBookRaiting: builder.query<BookRating, string>({
      query: (id) => `/works/${id}/ratings.json`,
    }),
  }),
});

export const {
  middleware: bookApiMiddleware,
  useGetAllBooksQuery,
  useGetBookInfoQuery,
  useGetBookRaitingQuery,
} = bookApi;
