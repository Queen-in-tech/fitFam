const LandingHero = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen animate-pulse">
      <img
        src="Mask group.png"
        alt="logo"
        className="w-52 h-52 object-contain"
      />
      <h1 className="text-lemon font-bold text-7xl">FitFam</h1>
    </div>
  );
};

export default LandingHero;
