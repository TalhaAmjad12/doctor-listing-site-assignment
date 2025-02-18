import Image from "next/image";

export default function DoctorsListItem({ doctor }) {
  console.log(doctor, "doctor");
  return (
    <div
      className="card card-side bg-base-100 shadow-xl mb-3 h-40"
      key={doctor.id}
    >
      <div></div>
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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
}
