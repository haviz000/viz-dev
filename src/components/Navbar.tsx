import { useMobileResponsive } from "@/hooks/useMobileResponsive";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

interface NavbarProps {
  position?: string;
}

const Navbar: React.FC<NavbarProps> = ({ position }) => {
  const isMobile = useMobileResponsive();
  return (
    <div className={`w-full h-16 dark:bg-neutral-900  bg-white dark:text-white  flex justify-between pt-6 px-8 ${position} top-0 z-50`}>
      <div className="font-doodle font-semibold text-center text-xl cursor-pointer">
        <Link to="/">Haviz.dev</Link>
      </div>
      {!isMobile && (
        <div className="flex gap-x-12 font-doodle ">
          <div className="cursor-pointer">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/timeline">Timeline</Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/about">About</Link>
          </div>
        </div>
      )}
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
