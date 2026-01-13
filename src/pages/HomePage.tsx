import { useNavigate } from "react-router-dom";
// changer de page sans recharger

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
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          // IMPORTANT : on ne met jamais "public" dans le chemin
          backgroundImage:
            "url('images/theme1_adaopte_images/images/background.jpg')",
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
          </div>
        </div>
      </section>

      {/* SECTION GALERIE */}
      <section className="bg-[#f9f9f9] py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-[#333] md:text-4xl">
              Nos animaux à adopter
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
              Découvrez en images tous nos animaux qui attendent une famille
              aimante. Chaque photo raconte une histoire et un espoir.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <img
                  src="/images/theme1_adaopte_images/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"
                  alt="CharlesDeluvio"
                  className="h-80 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <img
                  src="/images/theme1_adaopte_images/images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"
                  alt="Manja Vitolic"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <img
                  src="/images/theme1_adaopte_images/images/chan-swan-NKyl19P5IHg-unsplash.jpg"
                  alt="Chan Swan"
                  className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <img
                  src="/images/theme1_adaopte_images/images/alan-king-KZv7w34tluA-unsplash.jpg"
                  alt="Alan King"
                  className="h-88 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <img
                  src="/images/theme1_adaopte_images/images/jae-park-7GX5aICb5i4-unsplash.jpg"
                  alt="Jae Park"
                  className="h-96 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <img
                  src="/images/theme1_adaopte_images/images/yosei-g-OVgE3m4MHKM-unsplash.jpg"
                  alt="Yosei G"
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <img
                  src="/images/theme1_adaopte_images/images/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg"
                  alt="Melanie Kreutz"
                  className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <img
                  src="/images/theme1_adaopte_images/images/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg"
                  alt="Peri Stojnic"
                  className="h-88 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/animals")}
              type="button"
              className="rounded-full bg-[#333] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#444]"
            >
              Voir tous les animaux
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
