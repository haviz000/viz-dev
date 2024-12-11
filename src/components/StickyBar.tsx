import { Link } from "react-router-dom";

const StickyBar = () => {
  return (
    <div className="px-3 rounded-t-lg w-full fixed bottom-0 dark:bg-yellow-300 bg-rose-700 flex justify-center justify-between font-caveat font-bold text-2xl dark:text-black text-white">
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
  );
};

export default StickyBar;
