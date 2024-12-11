import { useMobileResponsive } from "@/hooks/useMobileResponsive";

interface NavbarProps {
  position?: string;
}

const Footer: React.FC<NavbarProps> = ({ position }) => {
  const isMobile = useMobileResponsive();

  if (isMobile) {
    return null; // Tidak menampilkan footer pada mobile.
  }

  return (
    <div
      className={`dark:bg-neutral-900 ${
        position === "fixed" && "fixed z-50 bottom-0"
      } w-full dark:text-white flex justify-center`}
    >
      <p className="font-caveat text-lg">
        &copy;2024 Mochamad Haviz Tasmara. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
