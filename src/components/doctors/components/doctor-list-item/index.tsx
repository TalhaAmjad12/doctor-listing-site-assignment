"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorsListItem({ doctor }) {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      router.push(`doctors/${doctor.id}`);
    }
  };

  return (
    <div
      className={`card card-side bg-base-100 shadow-xl mb-3 h-40 ${
        isMobile ? "cursor-pointer hover:bg-gray-100" : ""
      }`}
      key={doctor.id}
      onClick={isMobile ? handleCardClick : undefined}
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
