import { useNavigate } from "react-router-dom";
// changer de page sans recharger
import { HomeCards } from "../Components/Layout/HomeCards";
import FiltersBar from "../adopt/FiltersBar";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main>
      {/* 
   Header
        - relative : sert de référence pour les éléments en position absolute
        - h-[70vh] : la section prend 70 % de la hauteur de l’écran
        - bg-cover : l’image couvre toute la section
        - bg-center : l’image est centrée automatiquement
      */}
      <section
        className="relative h-[70vh] bg-cover bg-center "
        style={{
          // IMPORTANT : on ne met jamais "public" dans le chemin
          backgroundImage:
            "url('/images/theme1_adaopte_images/images/background.jpg')",
        }}
      >
        {/*
        OVERLAY SOMBRE
        - absolute : se place par-dessus l’image
        - inset-0 : top / right / bottom / left = 0 (prend toute la section)
        - bg-black/40 : noir à 40 % d’opacité pour améliorer la lisibilité du texte
      */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/*
        CONTENEUR DU CONTENU
        - relative : nécessaire pour fonctionner avec z-index
        - z-10 : place le contenu AU-DESSUS de l’overlay
        - flex + items-center + justify-center : centrage vertical et horizontal
        - h-full : prend toute la hauteur de la section
        - px-4 : padding horizontal pour mobile
      */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          {/*
          TYLE DU TEXTE
          - text-center : texte centré
          - text-white : texte blanc
          - max-w-3xl : limite la largeur pour une meilleure lisibilité
        */}
          <div className="max-w-3xl text-center text-white">
            {/*
            TITRE PRINCIPAL
            - text-3xl → taille mobile
            - md:text-5xl → taille desktop
            - font-bold : texte épais
            - uppercase : lettres capitales
            - tracking-wide : espacement entre les lettres
            - mb-4 : marge en bas
          */}
            <h1 className="mb-4 text-3xl font-bold uppercase tracking-wide md:text-5xl ">
              DONNONS-LEUR AUTANT QU’ILS NOUS APPORTENT
            </h1>
            {/*
            TEXTE DESCRIPTIF
            - text-sm → mobile
            - md:text-lg → desktop
            - text-white/90 : blanc légèrement atténué
          */}

            <p className="text-sm text-white/90 md:text-lg">
              Chaque jour, des milliers d’animaux attendent une famille
              aimante.Trouvez votre compagnon idéal parmi nos animaux disponible
              à l'adoption.
            </p>
            {/* BARRE DE RECHERCHE */}
            <FiltersBar />
          </div>
        </div>
      </section>

      <div className="bg-[#f9f9f9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4 uppercase tracking-wide">
              NOS ANIMAUX À ADOPTER
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Découvrez en images tous nos animaux qui attendent une famille
              aimante. Chaque photo raconte une histoitre et un espoir.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/theme1_adaopte_images/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"
                  alt="CharlesDeluvio"
                  className="w-full h-140 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/theme1_adaopte_images/images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"
                  alt="Manja Vitolic"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/theme1_adaopte_images/images/chan-swan-NKyl19P5IHg-unsplash.jpg"
                  alt="Chan Swan"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/theme1_adaopte_images/images/alan-king-KZv7w34tluA-unsplash.jpg"
                  alt="Alan King"
                  className="w-full h-140 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/theme1_adaopte_images/images/jae-park-7GX5aICb5i4-unsplash.jpg"
                  alt="Jae Park"
                  className="w-full h-140 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/theme1_adaopte_images/images/yosei-g-OVgE3m4MHKM-unsplash.jpg"
                  alt="Yosei G"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/theme1_adaopte_images/images/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg"
                  alt="Melanie Kreutz"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/images/theme1_adaopte_images/images/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg"
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
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl font-semibold mb-4">Comment ça marche</h2>
        <p className="text-sm text-neutral-500">
          Adopter un animal est un engagement sérieux et à long terme. Voici
          notre processus d’adoption en quelques étapes simples.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-16">
        <HomeCards
          icon="🔍"
          title="1. Trouver votre compagnon idéal"
          description="Parcourez notre base de données d'animaux disponibles et utiliser nos filtres pour trouver celui qui correspond à votre mode de vie."
        />
        <HomeCards
          icon="📝"
          title="2. Remplissez une demande"
          description="Soumettez votre formulaire d'adoption pour l'animal qui vous intéresse. Nous examinons chaque demùande avec soin."
        />
        <HomeCards
          icon="👋"
          title="3. Rencontrez l'animal"
          description="Visitez le refuge pour rencontrer l'animal et voir si vous êtes compatibles. C'est une étape essentielle du processus."
        />
        <HomeCards
          icon="🏠"
          title="4. Bienvenue à la maison"
          description="Une fois votre demande approuvée, vous pouvez accueillir votre nouvel ami chez vous. Nous restons disponibles pour vous conseiller."
        />
      </div>

      <div className="bg-[#f9f9f9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
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
