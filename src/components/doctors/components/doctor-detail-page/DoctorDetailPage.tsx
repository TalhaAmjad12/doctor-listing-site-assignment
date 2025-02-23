"use client";

import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function DoctorsDetail() {
  const { id } = useParams();

  const doctorsList = useSelector((state) => state.doctor.data);
  const currentDoctor =
    doctorsList && doctorsList.find((obj) => obj.id === Number(id));

  useEffect(() => {}, [currentDoctor]);

  return (
    <div className="card p-5 mb-5">
      <div className="card-body bg-base-100 rounded-lg">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-center gap-10">
            <figure className="mt-4">
              <img
                src={currentDoctor?.photoUrl}
                alt="Movie"
                className="rounded-full"
                height={340}
                width={185}
              />
            </figure>
          </div>
          <h3 className="text-[24px] font-semibold text-center">
            {currentDoctor?.name}
          </h3>
          <button className="btn btn-sm btn-primary self-center mt-1">
            Book Appointment
          </button>
        </div>

        <div className="divider divider-vertical">
          <h3 className="text-lg font-semibold text-center">Doctor Details</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center justify-center space-y-0">
            <p className="m-0">
              <strong>Gender:</strong> {currentDoctor?.gender}
            </p>
            <p className="mt-1">
              <strong>Speciality:</strong> {currentDoctor?.specialty}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-0">
            <p className="m-0">
              <strong>Hospital:</strong> {currentDoctor?.hospital}
            </p>
            <p className="m-0">
              <strong>City:</strong> {currentDoctor?.city}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-0">
            <p className="m-0">
              <strong>clinic:</strong> {currentDoctor?.clinic}
            </p>
          </div>
        </div>

        <div className="divider">
          <h3 className="text-lg font-semibold text-center">Contact</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center justify-center space-y-0">
            <p className="m-0">
              <strong>email:</strong> {currentDoctor?.contactInfo?.email}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-0">
            <p className="m-0">
              <strong>Phone number:</strong> {currentDoctor?.contactInfo?.phone}
            </p>
          </div>
        </div>

        <div className="divider">
          <h3 className="text-lg font-semibold text-center">Availibility</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center justify-center space-y-0">
            <p className="m-0">
              <strong>days:</strong> {currentDoctor?.workingDays}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-0">
            <p className="m-0">
              <strong>Working Hours:</strong> {currentDoctor?.timings}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
