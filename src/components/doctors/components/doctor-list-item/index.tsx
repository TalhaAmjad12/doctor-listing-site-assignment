"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorsListItem({ doctor }) {
  const router = useRouter();
  console.log(doctor, "doctor");
  return (
    <div
      className="card card-side bg-base-100 shadow-xl mb-3 h-40"
      key={doctor.id}
    >
      <figure className="pl-3">
        <Image
          src="https://th.bing.com/th/id/OIP.qlmht6Rfwl-jbsK1f1T8AgHaHa?rs=1&pid=ImgDetMain"
          alt="Movie"
          height={120}
          width={125}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {doctor.name} - <span className="text-sm">({doctor.specialty})</span>
        </h2>
        <div className="p-2 flex flex-row items-center justify-between w-96">
          {" "}
          {/* Horizontal layout */}
          <div className="text-center">
            <p className="text-xs">Location</p>
            <h2 className="text-sm font-bold w-15">{doctor.city}</h2>
          </div>
          <div className="divider divider-horizontal"></div>{" "}
          {/* Horizontal divider */}
          <div className="text-center">
            <p className="text-xs">Email</p>
            <h2 className="text-sm font-bold">{doctor.contactInfo.email}</h2>
          </div>
          <div className="divider divider-horizontal"></div>{" "}
          {/* Horizontal divider */}
          <div className="text-center">
            <p className="text-xs">Phone</p>
            <h2 className="text-sm font-bold">{doctor.contactInfo.phone}</h2>
          </div>
        </div>
        <p className="text-sm">{doctor.description}</p>
      </div>
      <div className="card-actions justify-end items-center mr-5 hidden sm:flex md:flex">
        <button
          className="btn btn-primary"
          onClick={() => router.push(`doctors/${doctor.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
