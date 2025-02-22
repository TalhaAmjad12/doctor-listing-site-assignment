"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

export default function DoctorsDetail() {
  const { id } = useParams();

  const doctorsList = useSelector((state) => state.doctor.data);
  const currentDoctor = doctorsList.find((obj) => obj.id === Number(id));

  return (
    <div className="card p-5">
      <div className="card-body bg-base-100">
        <div className="flex justify-center gap-10">
          <figure className="mt-4">
            <Image
              src="https://th.bing.com/th/id/OIP.qlmht6Rfwl-jbsK1f1T8AgHaHa?rs=1&pid=ImgDetMain"
              alt="Movie"
              className="rounded-full"
              height={340}
              width={185}
            />
          </figure>
          <div className="mt-16">
            <h2 className="card-title">{currentDoctor?.name}</h2>
            <div className="flex items-center space-x-2">
              <span>📌📌📌📌</span>
              <span>214 rates</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>85% trust</span>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <h3 className="text-lg font-semibold text-center">User profile</h3>
        <div className="flex justify-center">
          <div>
            <p>
              <strong>Gender:</strong> Female
            </p>
            <p>
              <strong>Date of birth:</strong> 23/02/1987
            </p>
            <p>
              <strong>Phone number:</strong> 263 281 480
            </p>
          </div>
          <div>
            <p>
              <strong>Blood type:</strong> AB
            </p>
            <p>Diéo/ Khiént thinh</p>
            <p>Silent</p>
            <p>Blind</p>
          </div>
        </div>
        <div className="divider"></div>
        <h3 className="text-lg font-semibold text-center">Contact</h3>
        <div className="flex justify-evenly gap-4">
          <div>
            <p>
              <strong>Gender:</strong> Female
            </p>
            <p>
              <strong>Date of birth:</strong> 23/02/1987
            </p>
            <p>
              <strong>Phone number:</strong> 263 281 480
            </p>
          </div>
          <div>
            <p>
              <strong>Blood type:</strong> AB
            </p>
            <p>Diéo/ Khiént thinh hhhhhhhh skkskksks mmcncncn iiiikkk</p>
          </div>
        </div>
        <div className="divider"></div>
        <h3 className="text-lg font-semibold text-center">Availability</h3>
        <div className="flex justify-evenly gap-4">
          <div>
            <p>
              <strong>Gender:</strong> Female
            </p>
            <p>
              <strong>Date of birth:</strong> 23/02/1987
            </p>
            <p>
              <strong>Phone number:</strong> 263 281 480
            </p>
          </div>
          <div>
            <p>
              <strong>Blood type:</strong> AB
            </p>
            <p>Diéo/ Khiént thinh</p>
            <p>Silent</p>
            <p>Blind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
