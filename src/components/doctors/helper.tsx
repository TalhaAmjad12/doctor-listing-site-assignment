import { SearchIcon } from "../../utils/icons";

// search options
const options = (city, setCity, specialty, setSpecialty) => {
  const SEARCH_OPTIONS = {
    ["CITY"]: {
      placeholder: "Search by City",
      value: city,
      onChange: (e) => setCity(e.target.value),
    },
    ["SPECIALTY"]: {
      placeholder: "Search by Specialty",
      value: specialty,
      onChange: (e) => setSpecialty(e.target.value),
    },
  };

  return Object.values(SEARCH_OPTIONS);
};

export const searchOptions = (city, setCity, specialty, setSpecialty) => {
  return (
    <div className="mb-3 flex flex-col sm:flex-row justify-end gap-2">
      {options(city, setCity, specialty, setSpecialty).map(
        (searchOption, index) => {
          return (
            <label
              key={index}
              className="input input-bordered flex items-center gap-2 w-80"
            >
              <input
                type="text"
                className="grow"
                placeholder={searchOption.placeholder}
                value={searchOption.value}
                onChange={(e) => searchOption.onChange(e)}
              />
              <SearchIcon />
            </label>
          );
        }
      )}
    </div>
  );
};

// debouncing
export function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// pagination
export const handleNextPage = (page, totalPages, setPage) => {
  if (page < totalPages) setPage(page + 1);
};
export const handlePreviousPage = (page, totalPages, setPage) => {
  if (page > 1) setPage(page - 1);
};
export const pagination = (page, totalPages, setPage, currentPage) => {
  return (
    <div className="flex justify-center mt-14">
      <div className="join">
        <button
          className="join-item btn bg-white"
          onClick={() => handlePreviousPage(page, totalPages, setPage)}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="join-item btn bg-white">
          Page {page} of {totalPages}
        </button>
        <button
          className="join-item btn bg-white"
          onClick={() => handleNextPage(page, totalPages, setPage)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
};
