"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoctorsListItem from "./components/doctor-list-item/index";
import { RootState, AppDispatch } from "../../lib/store";
import { fetchDoctors } from "../../lib/features/doctor/actions";
import { searchOptions, pagination, debounce } from "./helper";

export default function DoctorsList() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: doctorsList,
    totalPages,
    currentPage,
    error,
  } = useSelector((state: RootState) => state.doctor);
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [page, setPage] = useState(1);

  const debouncedFetchDoctors = debounce((city, specialty, page) => {
    dispatch(fetchDoctors({ city, specialty, page, limit: 8 }));
  }, 500);

  useEffect(() => {
    debouncedFetchDoctors(city, specialty, page);
  }, [dispatch, city, specialty, page]);

  if (error) {
    return (
      <div className="toast toast-top toast-end">
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="flex justify-center">
        <h6 className="font-bold mb-5 text-2xl">Availible Doctors List</h6>
      </div>
      {searchOptions(city, setCity, specialty, setSpecialty)}
      <div className="h-[130vh] overflow-y-auto">
        <div className="overflow-y-none flex justify-center gap-3 flex-wrap">
          {doctorsList.map((doctor, index) => (
            <DoctorsListItem key={index} doctor={doctor} />
          ))}
        </div>
      </div>
      {pagination(page, totalPages, setPage, currentPage)}
    </div>
  );
}
