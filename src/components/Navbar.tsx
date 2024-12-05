const Navbar = () => {
  return (
    <div className="w-full h-16 bg-red-600 flex justify-between pt-4 px-4">
      <div>Logo</div>
      <div className="flex gap-x-12">
        <div>About</div>
        <div>Project</div>
        <div>Contact</div>
      </div>
      <div>theme</div>
    </div>
  );
};

export default Navbar;
