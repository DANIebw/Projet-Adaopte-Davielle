import FiltersBar from "../adopt/FiltersBar";
import Pagination from "../adopt/Pagination";
import AnimalList from "../Components/Layout/Animals/AnimalList";

export default function AdaoptPage() {
  return (
    <main style={{ padding: 16 }}>
      <FiltersBar />
      <div className=" h-[70vh]" style={{ padding: 45 }}>
        <AnimalList />
      </div>

      <Pagination />
    </main>
  );
}
