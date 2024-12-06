import { Link } from "react-router-dom";

const StickyBar = () => {
  return (
    <div className="px-3 pt-2 rounded-t-lg w-full fixed bottom-0 dark:bg-yellow-300 bg-rose-700 flex justify-center justify-between font-doodle font-bold dark:text-black text-white">
      <div className="cursor-pointer">Projects</div>
      <div className="cursor-pointer"><Link to='/timeline'>Timeline</Link></div>
      <div className="cursor-pointer">About</div>
    </div>
  );
};

export default StickyBar;
