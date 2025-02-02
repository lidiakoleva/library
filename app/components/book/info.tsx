"use client";

import { useGetBookInfoQuery } from "@/app/store/api/booksApi";

const BookInfo = ({ bookId }: { bookId: string }) => {
  const { data, error, isLoading } = useGetBookInfoQuery(bookId);

  console.log(data);

  return <></>;
};

export default BookInfo;
