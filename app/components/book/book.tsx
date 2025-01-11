import Image from "next/image";

const Book = ({ data }: any) => {
  const { title, authors } = data;

  return (
    <article className="bg-white border shadow-xl rounded-lg overflow-hidden">
      {/* <Image
        src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width="300"
        height="150"
        className="w-100 object-cover"
      /> */}
      <div className="p-4 space-y-3">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm">
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
