import { useNavigate } from "react-router-dom";
// changer de page sans recharger

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4 uppercase tracking-wide">
            Nos animaux à adopter
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Découvrez en images tous nos animaux qui attendent une famille
            aimante. Chaque photo raconte une histoire et un espoir.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/public/images/theme1_adaopte_images/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"
                alt="CharlesDeluvio"
                className="w-full h-140 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/public/images/theme1_adaopte_images/images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"
                alt="Manja Vitolic"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/public/images/theme1_adaopte_images/images/chan-swan-NKyl19P5IHg-unsplash.jpg"
                alt="Chan Swan"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/public/images/theme1_adaopte_images/images/alan-king-KZv7w34tluA-unsplash.jpg"
                alt="Alan King"
                className="w-full h-140 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/public/images/theme1_adaopte_images/images/jae-park-7GX5aICb5i4-unsplash.jpg"
                alt="Jae Park"
                className="w-full h-140 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/public/images/theme1_adaopte_images/images/yosei-g-OVgE3m4MHKM-unsplash.jpg"
                alt="Yosei G"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/public/images/theme1_adaopte_images/images/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg"
                alt="Melanie Kreutz"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/public/images/theme1_adaopte_images/images/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg"
                alt="Peri Stojnic"
                className="w-full h-140 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/animals")}
            type="button"
            className="bg-[#333] text-white px-8 py-3 rounded-full font-medium hover:bg-[#444] transition-colors text-sm uppercase tracking-wide cursor-pointer"
          >
            Voir tous les animaux
          </button>
        </div>

        <div className="bg-[#f9f9f9] py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4 uppercase tracking-wide">
              PRÊT.E À CHANGER UNE VIE ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Adoptez, partagez, soutenez... Chaque geste compte. Que vous
              ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde
              chance à un animal abandonné.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <button
            onClick={() => navigate("/animals")}
            type="button"
            className="bg-[#333] text-white px-8 py-3 rounded-full font-medium hover:bg-[#444] transition-colors text-sm uppercase tracking-wide cursor-pointer"
          >
            Adopter un animal
          </button>

          <button
            onClick={() => navigate("/animals")}
            type="button"
            className="bg-[#f15b4a] text-white px-8 py-3 rounded-full font-medium hover:bg-[#444] transition-colors text-sm uppercase tracking-wide cursor-pointer"
          >
            Faire un don🫶
          </button>

          <button
            onClick={() => navigate("/animals")}
            type="button"
            className="bg-[#00a652] text-white px-8 py-3 rounded-full font-medium hover:bg-[#444] transition-colors text-sm uppercase tracking-wide cursor-pointer"
          >
            Devenir bénévole
          </button>
        </div>
      </div>
    </main>
  );
}
