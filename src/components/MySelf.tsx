import { Smiley, Angry, Flatty } from "@/assets";
import { useMobileResponsive } from "@/hooks/useMobileResponsive";
import { useState } from "react";
import StickyBar from "./StickyBar";

const MySelf = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isMobile = useMobileResponsive();

  let imageAction = <img src={Flatty} width={300} height={300} />;

  if (isHovered) {
    imageAction = <img src={Smiley} width={300} height={300} />;
  }

  if (isClicked) {
    imageAction = <img src={Angry} width={300} height={300} />;
  }

  const handleDoubleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <div className="w-full h-screen dark:bg-neutral-900 bg-white dark:text-white flex flex-col items-center justify-center py-12">
      <div
        className="dark:bg-yellow-300 bg-rose-700 rounded-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDoubleClick={handleDoubleClick}
      >
        {imageAction}
      </div>
      <div className={isMobile ? "px-4" : "max-w-4xl"}>
        <p className={`text-center font-caveat font-semibold pt-8 text-2xl ${isMobile && 'text-sm'}`}>
          Software engineer by day, Harry Potter by night—casting spells to fix
          bugs, defending the web with cybersecurity, and exploring Web3, all
          with my cat sidekick plotting world domination!
        </p>
      </div>
      {isMobile && <StickyBar />}
    </div>
  );
};

export default MySelf;
