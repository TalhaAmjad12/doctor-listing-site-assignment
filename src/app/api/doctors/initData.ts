const IMAGES_URL = {
  P1: "https://th.bing.com/th/id/OIP.fMg97cjFdxjrG--rFl59zQHaHa?rs=1&pid=ImgDetMain",
  P2: "https://th.bing.com/th/id/OIP.RiZHfIQUN2N-Up55okw3EgHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  P3: "https://www.bing.com/th/id/OIP.ZxM9UTESrl4Ov3NChvzy6AHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  P4: "https://th.bing.com/th/id/OIP.qlmht6Rfwl-jbsK1f1T8AgHaHa?rs=1&pid=ImgDetMain",
};

export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Heart",
    city: "Islamabad",
    photoUrl: IMAGES_URL.P1,
    gender: "Female",
    description: "Experienced cardiologist with 15 years of practice.",
    contactInfo: {
      email: "jane.smith@example.com",
      phone: "+123456789",
    },
    hospital: "Islamabad Heart Hospital",
    clinic: "Heart Wellness Clinic",
    workingDays: "Monday to Friday",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: 2,
    name: "Dr. John Doe",
    specialty: "Neurology",
    city: "Karachi",
    photoUrl: IMAGES_URL.P2,
    gender: "Male",
    description: "Expert in treating neurological disorders.",
    contactInfo: {
      email: "john.doe@example.com",
      phone: "+987654321",
    },
    hospital: "Karachi Neurology Hospital",
    clinic: "Brain Health Clinic",
    workingDays: "Tuesday to Saturday",
    timings: "10:00 AM - 6:00 PM",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    specialty: "Dermatology",
    city: "Lahore",
    photoUrl: IMAGES_URL.P3,
    gender: "Female",
    description: "Specializes in skin conditions and treatments.",
    contactInfo: {
      email: "emily.davis@example.com",
      phone: "+123987654",
    },
    hospital: "Lahore Skin Hospital",
    clinic: "Dermatology Care Clinic",
    workingDays: "Monday to Thursday",
    timings: "8:00 AM - 4:00 PM",
  },
  {
    id: 4,
    name: "Dr. Michael Lee",
    specialty: "Pediatrics",
    city: "Rawalpindi",
    photoUrl: IMAGES_URL.P4,
    gender: "Male",
    description: "Pediatrician with a focus on early childhood care.",
    contactInfo: {
      email: "michael.lee@example.com",
      phone: "+124578963",
    },
    hospital: "Rawalpindi Children’s Hospital",
    clinic: "Pediatric Care Clinic",
    workingDays: "Wednesday to Sunday",
    timings: "11:00 AM - 7:00 PM",
  },
  {
    id: 5,
    name: "Dr. Sarah Brown",
    specialty: "Orthopedics",
    city: "Faisalabad",
    photoUrl: IMAGES_URL.P4,
    gender: "Female",
    description: "Orthopedic surgeon specializing in joint replacements.",
    contactInfo: {
      email: "sarah.brown@example.com",
      phone: "+125478951",
    },
    hospital: "Faisalabad Orthopedic Hospital",
    clinic: "Joint Replacement Clinic",
    workingDays: "Tuesday to Saturday",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: 6,
    name: "Dr. David Wilson",
    specialty: "Oncology",
    city: "Multan",
    photoUrl: IMAGES_URL.P3,
    gender: "Male",
    description: "Oncologist dedicated to cancer care and treatment.",
    contactInfo: {
      email: "david.wilson@example.com",
      phone: "+134689256",
    },
    hospital: "Multan Cancer Hospital",
    clinic: "Cancer Treatment Clinic",
    workingDays: "Monday to Friday",
    timings: "10:00 AM - 6:00 PM",
  },
  {
    id: 7,
    name: "Dr. Olivia Martinez",
    specialty: "Gynecology",
    city: "Quetta",
    photoUrl: IMAGES_URL.P2,
    gender: "Female",
    description: "Specializes in women’s health and gynecological treatments.",
    contactInfo: {
      email: "olivia.martinez@example.com",
      phone: "+1234567890",
    },
    hospital: "Quetta Women’s Hospital",
    clinic: "Gynecology Health Clinic",
    workingDays: "Tuesday to Saturday",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: 8,
    name: "Dr. William Taylor",
    specialty: "Psychiatry",
    city: "Peshawar",
    photoUrl: IMAGES_URL.P1,
    gender: "Male",
    description:
      "Psychiatrist with experience in treating mental health disorders.",
    contactInfo: {
      email: "william.taylor@example.com",
      phone: "+142589633",
    },
    hospital: "Peshawar Mental Health Hospital",
    clinic: "Psychiatry Wellness Clinic",
    workingDays: "Wednesday to Sunday",
    timings: "10:00 AM - 6:00 PM",
  },
  {
    id: 9,
    name: "Dr. Charlotte Harris",
    specialty: "Gastroenterology",
    city: "Sialkot",
    photoUrl: IMAGES_URL.P2,
    gender: "Female",
    description: "Gastroenterologist specializing in digestive health.",
    contactInfo: {
      email: "charlotte.harris@example.com",
      phone: "+125965738",
    },
    hospital: "Sialkot Gastro Hospital",
    clinic: "Digestive Health Clinic",
    workingDays: "Monday to Friday",
    timings: "8:00 AM - 4:00 PM",
  },
  {
    id: 10,
    name: "Dr. James Wilson",
    specialty: "Ophthalmology",
    city: "Islamabad",
    photoUrl: IMAGES_URL.P3,
    gender: "Male",
    description: "Ophthalmologist with expertise in eye surgeries.",
    contactInfo: {
      email: "james.wilson@example.com",
      phone: "+123254687",
    },
    hospital: "Islamabad Eye Hospital",
    clinic: "Ophthalmology Care Clinic",
    workingDays: "Tuesday to Saturday",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: 11,
    name: "Dr. Lucas White",
    specialty: "Endocrinology",
    city: "Karachi",
    photoUrl: IMAGES_URL.P4,
    gender: "Male",
    description: "Specializes in hormonal and metabolic disorders.",
    contactInfo: {
      email: "lucas.white@example.com",
      phone: "+123745693",
    },
    hospital: "Karachi Endocrine Center",
    clinic: "Hormone Health Clinic",
    workingDays: "Monday to Friday",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: 12,
    name: "Dr. Jessica Adams",
    specialty: "Rheumatology",
    city: "Lahore",
    photoUrl: IMAGES_URL.P4,
    gender: "Female",
    description: "Expert in autoimmune diseases and joint disorders.",
    contactInfo: {
      email: "jessica.adams@example.com",
      phone: "+123849257",
    },
    hospital: "Lahore Rheumatology Clinic",
    clinic: "Joint Health Clinic",
    workingDays: "Monday to Thursday",
    timings: "8:00 AM - 4:00 PM",
  },
  {
    id: 13,
    name: "Dr. Daniel Young",
    specialty: "Urology",
    city: "Rawalpindi",
    photoUrl: IMAGES_URL.P3,
    gender: "Male",
    description: "Specializes in urinary tract and male reproductive system.",
    contactInfo: {
      email: "daniel.young@example.com",
      phone: "+123456987",
    },
    hospital: "Rawalpindi Urology Hospital",
    clinic: "Urology Care Clinic",
    workingDays: "Tuesday to Saturday",
    timings: "10:00 AM - 6:00 PM",
  },
  {
    id: 14,
    name: "Dr. Lisa Brown",
    specialty: "Hematology",
    city: "Islamabad",
    photoUrl: IMAGES_URL.P2,
    gender: "Female",
    description: "Hematologist with experience in blood disorders.",
    contactInfo: {
      email: "lisa.brown@example.com",
      phone: "+123569871",
    },
    hospital: "Islamabad Blood Center",
    clinic: "Blood Health Clinic",
    workingDays: "Monday to Friday",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: 15,
    name: "Dr. Brian Black",
    specialty: "Plastic Surgery",
    city: "Faisalabad",
    photoUrl: IMAGES_URL.P1,
    gender: "Male",
    description: "Experienced in reconstructive and cosmetic surgery.",
    contactInfo: {
      email: "brian.black@example.com",
      phone: "+125489632",
    },
    hospital: "Faisalabad Plastic Surgery Center",
    clinic: "Cosmetic Care Clinic",
    workingDays: "Monday to Thursday",
    timings: "10:00 AM - 6:00 PM",
  },
  {
    id: 16,
    name: "Dr. Andrew Martin",
    specialty: "Nephrology",
    city: "Multan",
    photoUrl: IMAGES_URL.P2,
    gender: "Male",
    description: "Specializing in kidney diseases and dialysis.",
    contactInfo: {
      email: "andrew.martin@example.com",
      phone: "+134758902",
    },
    hospital: "Multan Kidney Hospital",
    clinic: "Kidney Health Clinic",
    workingDays: "Monday to Friday",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: 17,
    name: "Dr. Patricia Wilson",
    specialty: "Infectious Diseases",
    city: "Karachi",
    photoUrl: IMAGES_URL.P3,
    gender: "Female",
    description: "Expert in infectious disease management and prevention.",
    contactInfo: {
      email: "patricia.wilson@example.com",
      phone: "+123654798",
    },
    hospital: "Karachi Infectious Diseases Center",
    clinic: "Infectious Health Clinic",
    workingDays: "Tuesday to Saturday",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: 18,
    name: "Dr. George Harris",
    specialty: "Anesthesiology",
    city: "Lahore",
    photoUrl: IMAGES_URL.P4,
    gender: "Male",
    description: "Anesthesiologist with expertise in surgical procedures.",
    contactInfo: {
      email: "george.harris@example.com",
      phone: "+123765432",
    },
    hospital: "Lahore Surgical Center",
    clinic: "Pain Management Clinic",
    workingDays: "Monday to Friday",
    timings: "8:00 AM - 4:00 PM",
  },
  {
    id: 19,
    name: "Dr. Sophia Green",
    specialty: "Obstetrics",
    city: "Rawalpindi",
    photoUrl: IMAGES_URL.P1,
    gender: "Female",
    description: "Experienced obstetrician with a focus on prenatal care.",
    contactInfo: {
      email: "sophia.green@example.com",
      phone: "+124589762",
    },
    hospital: "Rawalpindi Obstetrics Hospital",
    clinic: "Prenatal Care Clinic",
    workingDays: "Tuesday to Saturday",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: 20,
    name: "Dr. Samuel Turner",
    specialty: "Radiology",
    city: "Sialkot",
    photoUrl: IMAGES_URL.P4,
    gender: "Male",
    description: "Radiologist with expertise in diagnostic imaging.",
    contactInfo: {
      email: "samuel.turner@example.com",
      phone: "+125489753",
    },
    hospital: "Sialkot Imaging Center",
    clinic: "Diagnostic Health Clinic",
    workingDays: "Monday to Friday",
    timings: "9:00 AM - 5:00 PM",
  },
];
