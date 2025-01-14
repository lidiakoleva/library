import Image from "next/image";

const Navigation = () => {
  return (
    <section className="fixed inset-x-0 top-0 bg-white p-6 shadow-lg z-50">
      <Image
        src="/logo.png"
        alt=""
        width="400"
        height="20"
        className="max-w-40"
      />
    </section>
  );
};

export default Navigation;
