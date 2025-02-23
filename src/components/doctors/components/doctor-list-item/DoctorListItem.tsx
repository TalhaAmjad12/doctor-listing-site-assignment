"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MailIcon, PhoneIcon, LocationIcon } from "../../../../utils/icons";
import DoctorListItemSkeleton from "./skeleton";

export default function DoctorsListItem({ doctor }) {
  const router = useRouter();

  const DOCTORS_INFO = [
    { id: "1", label: () => <MailIcon />, value: doctor.contactInfo.email },
    { id: "2", label: () => <PhoneIcon />, value: doctor.contactInfo.phone },
    { id: "3", label: () => <LocationIcon />, value: doctor.city },
  ];

  if (doctor.isLoading) return <DoctorListItemSkeleton />;

  return (
    <div
      className={`card bg-base-100 shadow-xl mb-5 w-[340px]`}
      key={doctor.id}
    >
      <figure className="bg-base-200">
        <img
          className="h-[250px] rounded-lg mt-5 mb-5"
          src={doctor.photoUrl}
          alt="Doctor"
        />
      </figure>
      <div className="card-body p-5">
        <div className="card-title mt-[-17px]">
          <h1 className="truncate w-40" data-tip={doctor.name}>
            {doctor.name}
          </h1>{" "}
          <p className="badge bg-[#65FA38] text-white">{doctor.specialty}</p>
        </div>

        {DOCTORS_INFO.map((info, index) => (
          <div key={index} className="flex items-center mt-[-7px]">
            <info.label />
            <p className="pl-2">{info.value}</p>
          </div>
        ))}

        <div className="card-actions">
          <button
            className="btn btn-sm btn-primary w-full"
            onClick={() => router.push(`doctors/${doctor.id}`)}
          >
            View Information
          </button>
        </div>
      </div>
    </div>
  );
}
