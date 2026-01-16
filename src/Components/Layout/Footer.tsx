import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        <div>
          <h3 className="text-[#ff6d38] text-lg mb-4">ADOPTE</h3>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Notre mission est de trouver des foyers aimants pour chaque animal
            abandonné et de promouvoir le bien-être animal.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
            >
              <FaFacebook className="text-white" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
            >
              <FaLinkedin className="text-white" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
            >
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[#ff6d38] text-lg mb-4">INFORMATIONS UTILES</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="flex justify-start items-center gap-2">
              <NavLink to="#" className="text-gray-400">
                FAQs
              </NavLink>
            </li>
            <li className="flex justify-start items-center gap-2">
              <NavLink to="#" className="text-gray-400">
                Conseils d'adoption
              </NavLink>
            </li>
            <li className="flex justify-start items-center gap-2">
              <NavLink to="#" className="text-gray-400">
                Nous contacter
              </NavLink>
            </li>
            <li className="flex justify-start items-center gap-2">
              <NavLink to="#" className="text-gray-400">
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#ff6d38] text-lg mb-4">CONTACT</h3>
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
      </div>
      <div className="w-full border-t border-gray-800 mt-12 pt-8"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 ADAOPTE. Tous droits réservés.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Ce site a été développé par l'équipe ADAOPTE dans le cadre d'un projet
          pour Ada Tech School
        </p>
      </div>
    </footer>
  );
};

export default Footer;
