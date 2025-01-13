import Image from "next/image";

const Book = ({ data }: any) => {
  const { title, authors, cover_id } = data;
  const coverUrl = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : "";

  return (
    <article className="bg-white border shadow-xl rounded-lg overflow-hidden">
      {coverUrl && (
        <div className="flex justify-center">
          <Image
            src={coverUrl}
            alt="book_cover"
            width={208}
            height={256}
            className="h-72 object-cover"
          />
        </div>
      )}
      <div className="p-4 space-y-3 flex-1">
        <p className="text-md font-bold">{title}</p>
        <p className="text-sm line-clamp-2">
          {authors.map(({ name, key }: any) => (
            <span
              className="after:content-[','] last:after:content-[''] mr-1"
              key={key}
            >
              {name}
            </span>
          ))}
        </p>
      </div>
    </article>
  );
};

export default Book;
