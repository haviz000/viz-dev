import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <div className="dark:dark:bg-neutral-900">
      <Navbar position="sticky" />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
