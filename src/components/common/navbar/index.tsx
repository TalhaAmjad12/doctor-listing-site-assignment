"use client";

import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl"
          onClick={() => router.push(`/doctors`)}
        >
          Doctors Listing Site
        </a>
      </div>
    </div>
  );
}
