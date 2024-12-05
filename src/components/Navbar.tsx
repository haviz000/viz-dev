import { useMobileResponsive } from "@/hooks/useMobileResponsive";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const isMobile = useMobileResponsive();
  return (
    <div className="w-full h-16 dark:bg-neutral-900  bg-white dark:text-white  flex justify-between pt-6 px-8 sticky top-0 z-50">
      <div className="font-doodle font-semibold text-center text-xl cursor-pointer">
        Haviz.dev
      </div>
      {!isMobile && (
        <div className="flex gap-x-12 font-doodle ">
          <div className="cursor-pointer">Projects</div>
          <div className="cursor-pointer">Timeline</div>
          <div className="cursor-pointer">About</div>
        </div>
      )}
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
