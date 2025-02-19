"use client";

import { useSelector } from "react-redux";
import DoctorsListItem from "./components/doctor-list-item/index";

export default function DoctorsList() {
  const doctorsList = useSelector((state) => state.doctor.data);

  console.log(doctorsList, "doctorsList");

  return (
    <div className="p-5">
      <div className="mb-3 flex justify-end gap-2">
        <label className="input input-bordered flex items-center gap-2 w-80">
          <input type="text" className="grow" placeholder="Search by City" />
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
        {doctorsList.map((doctor, index) => (
          <DoctorsListItem key={index} doctor={doctor} />
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <div className="join">
          <button className="join-item btn bg-white">«</button>
          <button className="join-item btn bg-white">Page 22</button>
          <button className="join-item btn bg-white">»</button>
        </div>
      </div>
    </div>
  );
}
