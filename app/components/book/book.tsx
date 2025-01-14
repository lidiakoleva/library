import Link from "next/link";
import Image from "next/image";
import type { Book } from "@types";

type BookProps = {
  data: Book;
};

const Book = ({ data }: BookProps) => {
  const { title, authors, cover_id } = data;
  const coverUrl = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : "";

  return (
    <article className="bg-white border shadow-md rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:shadow-slate-500">
      <Link href={`/book/${cover_id}`}>
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
        </div>
      </Link>
    </article>
  );
};

export default Book;
