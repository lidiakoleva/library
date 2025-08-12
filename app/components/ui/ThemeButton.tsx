"use client";

import { useTheme } from "@/app/providers/ThemeProvider";

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === "light" ? "fa-moon" : "fa-sun";
  const handleClick = () => {
    if (toggleTheme) toggleTheme();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex justify-center p-2 text-slate-600 dark:text-slate-200"
    >
      <i className={`fa-regular ${icon}`}></i>
    </button>
  );
};
