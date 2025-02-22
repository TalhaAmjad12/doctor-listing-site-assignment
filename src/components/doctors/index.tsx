import dynamic from "next/dynamic";

const DoctorsList = dynamic(() => import("./DoctorList"));

export default DoctorsList;
