import { useEffect, useState } from "react";
import { Moon, Sun } from "@/assets";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="">
      {theme === "light" ? <img src={Moon} /> : <img src={Sun} />}
    </button>
  );
};

export default ThemeToggle;
