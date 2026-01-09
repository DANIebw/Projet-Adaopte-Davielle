import { NavLink } from "react-router-dom";

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
              <NavLink to="#" className="text-white">
                FAQs
              </NavLink>
            </li>
            <li className="flex justify-start sm:justify-center items-center gap-2">
              <NavLink to="#" className="text-white">
                Conseils d'adoption
              </NavLink>
            </li>
            <li className="flex justify-start sm:justify-center items-center gap-2">
              <NavLink to="#" className="text-white">
                Nous contacter
              </NavLink>
            </li>
            <li className="flex justify-start sm:justify-center items-center gap-2">
              <NavLink to="#" className="text-white">
                Mentions légales
              </NavLink>
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
              <NavLink
                to="mailto:contact@adopte.fr"
                className="hover:text-white transition-colors"
              >
                contact@adopte.fr
              </NavLink>
            </p>
            <p>
              Tél:{" "}
              <NavLink
                to="tel:+33123456789"
                className="hover:text-white transition-colors"
              >
                +33 1 23 45 67 89
              </NavLink>
            </p>
          </address>
        </div>
        <div className="border-t border-gray-500">
          <p className="text-white text-center mt-4">
            © 2025 ADAOPTE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
