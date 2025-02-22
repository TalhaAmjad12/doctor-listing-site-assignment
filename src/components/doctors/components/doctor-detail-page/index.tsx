import dynamic from "next/dynamic";

const DoctorsDetail = dynamic(() => import("./DoctorDetailPage"));

export default DoctorsDetail;
