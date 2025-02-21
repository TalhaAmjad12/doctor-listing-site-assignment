"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoctorsListItem from "./components/doctor-list-item/index";
import { RootState, AppDispatch } from "../../lib/store";
import { fetchDoctors } from "../../lib/features/doctor/actions";
import { handleNextPage, handlePreviousPage } from "./helper";

export default function DoctorsList() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: doctorsList,
    totalPages,
    currentPage,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.doctor);
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchDoctors({ city, specialty, page, limit: 4 }));
  }, [dispatch, city, specialty, page]);

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
            value={city}
            onChange={(e) => setCity(e.target.value)}
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
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
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
        {isLoading ? (
          <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-[460px] w-full"></div>
          </div>
        ) : error ? (
          <div className="toast toast-top toast-end">
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          </div>
        ) : (
          doctorsList.map((doctor, index) => (
            <DoctorsListItem key={index} doctor={doctor} />
          ))
        )}
      </div>
      <div className="flex justify-center mt-5">
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
    </div>
  );
}
