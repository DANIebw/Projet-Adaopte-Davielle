interface Homecards {
  icon: string;
  title: string;
  description: string;
}

export const homeCardsData: Homecards[] = [
  { icon: "icon1", title: "Title 1", description: "Description 1" },
  { icon: "icon2", title: "Title 2", description: "Description 2" },
  { icon: "icon3", title: "Title 3", description: "Description 3" },
];

export const HomeCards = ({ icon, title, description }: Homecards) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-4xl text-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
