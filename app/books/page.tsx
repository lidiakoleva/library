"use client";

import Image from "next/image";
import { useGetAllBooksQuery } from "../store/api/booksApi";
import BookListing from "../components/book/bookListing";

export default function BookListingPage() {
  const { data, error, isLoading } = useGetAllBooksQuery("0");

  return (
    <>
      <section className="-mt-28 mb-16 w-100 h-56 flex relative">
        <Image
          src="/cover.jpg"
          alt=""
          width="1920"
          height="224"
          className="w-100 h-full object-cover absolute -z-10"
        />
        <div className="flex flex-col justify-center px-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-sky-900">
            Books are a uniquely portable magic.
          </h1>
          <p className="text-lg text-slate-600 mt-2">
            Enjoy your fantasy library.
          </p>
        </div>
      </section>
      <section className="container grid grid-cols-[repeat(auto-fit,200px)] gap-6 justify-center content-stretch mx-auto">
        {data && <BookListing data={data} />}
      </section>
    </>
  );
}
