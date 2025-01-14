import Book from "./book";

const BookListing = ({ data }: { data: Book[] }) => {
  return (
    <>
      {data.map((book: Book) => (
        <Book key={book.key} data={book} />
      ))}
    </>
  );
};

export default BookListing;
