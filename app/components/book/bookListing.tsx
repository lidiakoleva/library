import Book from "./book";

const BookListing = (props: any) => {
  const { data, isLoading } = props;

  return (
    <>
      {!isLoading &&
        data &&
        data.map((book: any) => <Book key={book.key} data={book} />)}
    </>
  );
};

export default BookListing;
