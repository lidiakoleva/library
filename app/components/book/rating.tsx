"use client";

import { StarIcon } from "@heroicons/react/16/solid";
import { useGetBookRaitingQuery } from "@/app/store/api/booksApi";

const BookRating = ({ bookId }: { bookId: string }) => {
  const { data, isLoading } = useGetBookRaitingQuery(bookId);
  const rating = Number(data?.summary.average);
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <>
      {!isLoading && rating && (
        <div className="flex">
          {fullStars &&
            Array.from({ length: fullStars }).map((_, key) => (
              <StarIcon key={key} className="text-yellow-400 size-6"></StarIcon>
            ))}
          {emptyStars &&
            Array.from({ length: emptyStars }).map((_, key) => (
              <StarIcon key={key} className="text-slate-200 size-6"></StarIcon>
            ))}
        </div>
      )}
    </>
  );
};

export default BookRating;
