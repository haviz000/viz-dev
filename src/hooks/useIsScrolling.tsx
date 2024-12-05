import { useEffect, useState } from "react";

const useIsScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout: string | number | NodeJS.Timeout | null | undefined = null;

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }

      // Clear the timeout and set it again
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Adjust the delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isScrolling]);

  return isScrolling;
};

export default useIsScrolling;
