import FiltersBar from "../adopt/FiltersBar";
import Pagination from "../adopt/Pagination";
import AnimalList from "../Components/Layout/Animals/AnimalList";

export default function AdaoptPage() {
  return (
    <main className="px-4 py-8">
      <FiltersBar />
      <div className="mt-8">
        <AnimalList />
      </div>
      <div className="mt-8">
        <Pagination />
      </div>
    </main>
  );
}
