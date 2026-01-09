import {} from "react-router/dom";

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
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="flex justify-start sm:justify-center items-center gap-2">
              <a href="#" className="text-white">
                FAQs
              </a>
            </li>
            <li className="flex justify-start sm:justify-center items-center gap-2">
              <a href="#" className="text-white">
                Conseils d'adoption
              </a>
            </li>
            <li className="flex justify-start sm:justify-center items-center gap-2">
              <a href="#" className="text-white">
                Nous contacter
              </a>
            </li>
            <li className="flex justify-start sm:justify-center items-center gap-2">
              <a href="#" className="text-white">
                Mentions légales
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:text-right">
          <h3 className="text-red-500 text-lg mb-4">CONTACT</h3>
          <address className="text-white space-y-2 text-sm">
            <p>116 Rue du Faubourg Saint-Martin</p>
            <p>75010 Paris, France</p>
            <p className="mt-4">
              Email:{" "}
              <a
                href="mailto:contact@adopte.fr"
                className="hover:text-white transition-colors"
              >
                contact@adopte.fr
              </a>
            </p>
            <p>
              Tél:{" "}
              <a
                href="tel:+33123456789"
                className="hover:text-white transition-colors"
              >
                +33 1 23 45 67 89
              </a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
