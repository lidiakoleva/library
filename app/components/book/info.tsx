"use client";

import {
  useGetBookEditionQuery,
  useGetBookInfoQuery,
} from "@/app/store/api/booksApi";
import BookRating from "./rating";

const BookInfo = ({ bookId }: { bookId: string }) => {
  const { data, error, isLoading } = useGetBookInfoQuery(bookId);
  const { data: edition, isLoading: isLoadingEditionQuery } =
    useGetBookEditionQuery("OL8155451M");

  console.log(edition);

  return (
    <>
      {!isLoading && data && (
        <section className="container grid grid-cols-2 gap-4 dark:text-slate-100">
          <div>Image</div>
          <div className="space-y-8">
            {data.title && <h1 className="font-bold text-3xl">{data.title}</h1>}
            <BookRating bookId={bookId} />
            {data.description && (
              <div>
                <h2 className="font-bold text-xl mb-4">Description</h2>
                <p className="">{data.description}</p>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default BookInfo;
