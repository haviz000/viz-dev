import Footer from "@/components/Footer";
import MySelf from "@/components/MySelf";
import Navbar from "@/components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar position="fixed" />
      <MySelf />
      <Footer position="fixed" />
    </div>
  );
};

export default Homepage;
