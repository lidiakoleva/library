import Image from "next/image";

const Book = () => {
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
        <p className="text-lg font-bold">Title of this card</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          rutrum leo et pellentesque blandit. Praesent mattis non velit id
          pharetra. Maecenas ut nulla id turpis mollis elementum in sit amet
          nibh.
        </p>
      </div>
    </article>
  );
};

export default Book;
