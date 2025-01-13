"use client";

import BookListing from "../components/book/bookListing";
import { useGetAllBooksQuery } from "../store/api/booksApi";

export default function Book() {
  const { data, error, isLoading } = useGetAllBooksQuery("0");

  return (
    <>
      <h1>My fantasy books listing</h1>
      <section className="grid grid-cols-[repeat(auto-fit,200px)] gap-6 justify-center content-stretch mx-auto">
        <BookListing data={data && data.works} isLoading={isLoading} />
      </section>
    </>
  );
}
