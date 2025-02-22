import React, { useState, useEffect } from "react";

export default function DoctorsListSkeleton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="skeleton h-[560px] bg-base-300 w-full"></div>
    </div>
  );
}
