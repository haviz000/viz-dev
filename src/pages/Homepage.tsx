import MySelf from "@/components/MySelf";
import Navbar from "@/components/Navbar";

const Homepage = () => {
  return (
    <div className="overflow-y-hidden" id="no-scroll">
      <Navbar />
      <MySelf />
    </div>
  );
};

export default Homepage;
