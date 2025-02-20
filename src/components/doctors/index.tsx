"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import DoctorsListItem from "./components/doctor-list-item/index";

export default function DoctorsList() {
  const doctorsList = useSelector((state) => state.doctor.data);
  const itemsPerPage = 3;

  const [searchCity, setSearchCity] = useState("");
  const [searchSpecialty, setSearchSpecialty] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(doctorsList.length / itemsPerPage);

  // Calculate items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;

  const filteredDoctors = doctorsList.filter((doctor) => {
    const matchesCity = doctor.city
      .toLowerCase()
      .includes(searchCity.toLowerCase());
    const matchesSpecialty = doctor.specialty
      .toLowerCase()
      .includes(searchSpecialty.toLowerCase());
    return matchesCity && matchesSpecialty;
  });

  // Pagination controls
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="p-5">
      <div className="flex justify-center">
        <h6 className="font-bold mb-5 text-2xl">Availible Doctors List</h6>
      </div>
      <div className="mb-3 flex flex-col sm:flex-row justify-end gap-2">
        <label className="input input-bordered flex items-center gap-2 w-80">
          <input
            type="text"
            className="grow"
            placeholder="Search by City"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <label className="input input-bordered flex items-center gap-2 w-80">
          <input
            type="text"
            className="grow"
            placeholder="Search by Specialty"
            value={searchSpecialty}
            onChange={(e) => setSearchSpecialty(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="h-[62vh] overflow-y-auto">
        {filteredDoctors
          .slice(startIndex, startIndex + itemsPerPage)
          .map((doctor, index) => (
            <DoctorsListItem key={index} doctor={doctor} />
          ))}
      </div>
      <div className="flex justify-center mt-5">
        <div className="join">
          <button
            className="join-item btn bg-white"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button className="join-item btn bg-white">{currentPage}</button>
          <button
            className="join-item btn bg-white"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
