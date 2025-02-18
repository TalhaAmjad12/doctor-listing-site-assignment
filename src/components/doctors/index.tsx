import DoctorsListItem from "./components/doctor-list-item/index";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Cardiology",
    city: "NewYork",
    photoUrl: "https://example.com/photo.jpg",
    description: "Experienced cardiologist with 15 years of practice.",
    contactInfo: {
      email: "jane.smith@example.com",
      phone: "+123456789",
    },
  },
  {
    id: 2,
    name: "Dr. Smith Jane",
    specialty: "General Physisan",
    city: "Lahore",
    photoUrl: "https://example.com/photo.jpg",
    description: "Experienced cardiologist with 15 years of practice.",
    contactInfo: {
      email: "jane.smith@example.com",
      phone: "+123456789",
    },
  },
];

export default function DoctorsList() {
  return (
    <div className="p-5">
      {DUMMY_DATA.map((doctor, index) => (
        <DoctorsListItem key={index} doctor={doctor} />
      ))}
    </div>
  );
}
