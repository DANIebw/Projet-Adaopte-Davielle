const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        <div>
          <h3 className="text-red-500 text-lg mb-4">ADOPTE</h3>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Notre mission est de trouver des foyers aimants pour chaque animal
            abandonné et de promouvoir le bien-être animal.
          </p>
        </div>
        <div className="sm:text-center">
          <h3 className="text-red-500 text-lg mb-4">INFORMATIONS UTILES</h3>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed"></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
