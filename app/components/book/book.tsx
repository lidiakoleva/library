import { useEffect, useState } from "react";
import { useGetBookRaitingQuery } from "@/app/store/api/booksApi";
import type { Book } from "@types";
import Link from "next/link";
import Image from "next/image";
import BookRating from "./rating";

type BookProps = {
  data: Book;
};

const Book = ({ data }: BookProps) => {
  const { title, authors, cover_id, key } = data;
  const coverUrl = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : "";
  const bookId = key.split("/").pop();

  return (
    <article className="bg-white rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:shadow-slate-300">
      <Link href={`/books/${bookId}`}>
        {coverUrl && (
          <div className="flex justify-center">
            <Image
              src={coverUrl}
              alt="book_cover"
              width={208}
              height={224}
              className="h-56 object-contain"
            />
          </div>
        )}
        <div className="p-4 space-y-3 flex-1">
          <p className="text-md font-bold">{title}</p>
          <p className="text-sm line-clamp-1">
            {authors.map(({ name, key }: any) => (
              <span
                className="after:content-[','] last:after:content-[''] mr-1"
                key={key}
              >
                {name}
              </span>
            ))}
          </p>
          <BookRating bookId={bookId ?? ""} />
        </div>
      </Link>
    </article>
  );
};

export default Book;
