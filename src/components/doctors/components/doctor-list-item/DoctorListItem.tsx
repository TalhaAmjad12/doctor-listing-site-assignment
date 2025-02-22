"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MailIcon, PhoneIcon } from "../../../../utils/icons";

export default function DoctorsListItem({ doctor }) {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 638);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      router.push(`doctors/${doctor.id}`);
    }
  };

  return (
    <div
      className={`card bg-base-100 shadow-xl mb-5 ${
        isMobile
          ? "cursor-pointer hover:bg-gray-100 mb-5 overflow-y-nul -0 p-0l"
          : ""
      }`}
      key={doctor.id}
      onClick={isMobile ? handleCardClick : undefined}
    >
      <figure>
        <img
          className="hidden sm:flex md:flex h-[350px]"
          src="https://th.bing.com/th/id/OIP.qlmht6Rfwl-jbsK1f1T8AgHaHa?rs=1&pid=ImgDetMain"
          alt="Doctor"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {doctor.name} -
          <div className="badge badge-secondary">{doctor.specialty}</div>
        </h2>
        <div className="flex items-center">
          <MailIcon />
          <p className="pl-2">kkk</p>
        </div>
        <div className="flex items-center">
          <PhoneIcon />
          <p className="pl-2">+9786534351</p>
        </div>

        <p>{doctor.description}</p>
        <div className="card-actions justify-end hidden sm:flex md:flex">
          <button
            className="btn btn-primary"
            onClick={() => router.push(`doctors/${doctor.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
