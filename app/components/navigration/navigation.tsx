import Image from "next/image";
import { ThemeButton } from "../ui/ThemeButton";

const Navigation = () => {
  return (
    <section className="fixed inset-x-0 top-0 flex justify-between bg-white dark:bg-slate-800 dark:text-slate-200 p-6 shadow-lg z-50">
      <Image
        src="/logo.png"
        alt=""
        width="400"
        height="20"
        className="max-w-40"
      />
      <ThemeButton />
    </section>
  );
};

export default Navigation;
