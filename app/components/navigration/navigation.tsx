import Image from "next/image";

const Navigation = () => {
  return (
    <section className="fixed inset-x-0 top-0 bg-white p-2 shadow-lg">
      <Image
        src="https://gpsites.co/dc/wp-content/uploads/sites/69/2020/09/logo-6.svg"
        alt=""
        width="400"
        height="20"
        className="max-w-40"
      />
    </section>
  );
};

export default Navigation;
