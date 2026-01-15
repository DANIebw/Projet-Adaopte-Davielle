// bar de recherche
import { useNavigate } from "react-router-dom";

export default function FiltersBar() {
  return (
    <div>
      {" "}
      <div className="mb-3 md:w-96 mx-auto border-2 ">
        <div>
          <strong>type d'animal</strong>
        </div>
      </div>
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon3"
        />

        {/* <!--Search button--> */}

        <button
          className="
    px-9 py-5
    rounded-full
    bg-[#1F2937]
    text-white font-bold
    cursor-pointer
    flex items-center gap-1
    text-[18px]
    border-none
  "
          type="button"
          id="button-addon3"
        >
          rechercher 🔎
        </button>
      </div>
    </div>
  );
}
