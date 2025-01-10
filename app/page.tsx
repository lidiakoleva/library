import Book from "./components/book/book";

export default function Home() {
  return (
    <section className="columns-1 sm:columns-2 gap-4 mx-auto space-y-6">
      <Book />
      <Book />
    </section>
  );
}
