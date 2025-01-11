"use client";

import BookListing from "../components/book/bookListing";
import { useGetAllBooksQuery } from "../store/api/booksApi";

export default function Book() {
  const { data, error, isLoading } = useGetAllBooksQuery("0");

  return (
    <section className="columns-1 sm:columns-2 gap-4 mx-auto space-y-6">
      <BookListing data={data && data.works} isLoading={isLoading} />
    </section>
  );
}
