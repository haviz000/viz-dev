import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";

const TimelinePage = () => {
  return (
    <div className="dark:dark:bg-neutral-900">
      <Navbar position="sticky" />
      <Timeline />
      <Footer />
    </div>
  );
};

export default TimelinePage;
