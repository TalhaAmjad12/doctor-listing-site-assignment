import dynamic from "next/dynamic";

const DoctorsListItem = dynamic(() => import("./DoctorListItem"));

export default DoctorsListItem;
