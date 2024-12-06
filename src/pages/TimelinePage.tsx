import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";

const TimelinePage = () => {
  return (
    <div className="dark:dark:bg-neutral-900">
      <Navbar position="sticky" />
      <Timeline />
    </div>
  );
};

export default TimelinePage;
