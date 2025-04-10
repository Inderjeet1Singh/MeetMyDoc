import profile_pic from "./profile_pic.png";
import dropdown_icon from "./dropdown_icon.svg";
import group_profiles from "./group_profiles.png";
import arrow_icon from "./arrow_icon.svg";
import header_img from "./header_img.png";
import appointment_img from "./appointment_img.png";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Dermatologist from "./Dermatologist.svg";
import Pediatricians from "./Pediatricians.svg";
import Neurologist from "./Neurologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import doc1 from "./Doctors/doc1.png";
import doc2 from "./Doctors/doc2.png";
import doc3 from "./Doctors/doc3.png";
import doc4 from "./Doctors/doc4.png";
import doc5 from "./Doctors/doc5.png";
import doc6 from "./Doctors/doc6.png";
import doc7 from "./Doctors/doc7.png";
import doc8 from "./Doctors/doc8.png";
import doc9 from "./Doctors/doc9.png";
import doc10 from "./Doctors/doc10.png";
import doc11 from "./Doctors/doc11.png";
import doc12 from "./Doctors/doc12.png";
import doc13 from "./Doctors/doc13.png";
import doc14 from "./Doctors/doc14.png";
import doc15 from "./Doctors/doc15.png";
import verified_icon from "./verified_icon.svg";
import info_icon from "./info_icon.svg";
import about_img from "./about_img.png";
import contact_image from "./contact_image.png";
export const assets = {
  profile_pic,
  dropdown_icon,
  group_profiles,
  arrow_icon,
  header_img,
  appointment_img,
  verified_icon,
  info_icon,
  about_img,
  contact_image,
};
export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Emily Johnson",
    speciality: "General physician",
    image: doc1,
    about:
      "Dr. Emily Johnson is a highly experienced general physician with over 10 years of practice. She has a special interest in preventive medicine and empowering patients through education.",
    address: { line1: "17th Cross, Richmond", line2: "Bangalore, India" },
    degree: "MBBS",
    experience: "10 Years",
    fees: 50,
  },
  {
    _id: "doc2",
    name: "Dr. Jane Smith",
    speciality: "Gynecologist",
    image: doc2,
    about:
      "Dr. Jane Smith is a dedicated gynecologist with 8 years of experience. She specializes in women’s health and prenatal care, offering compassionate and thorough treatment.",
    address: { line1: "Green Park Avenue", line2: "Delhi, India" },
    degree: "MBBS, MD (Gynecology)",
    experience: "8 Years",
    fees: 60,
  },
  {
    _id: "doc3",
    name: "Dr. John Doe",
    speciality: "Dermatologist",
    image: doc3,
    about:
      "Dr. John Doe is a dermatologist known for his expertise in treating skin disorders, acne, and hair loss with a holistic and modern approach.",
    address: { line1: "Palm Residency", line2: "Chennai, India" },
    degree: "MBBS, DDVL",
    experience: "6 Years",
    fees: 55,
  },
  {
    _id: "doc4",
    name: "Dr. Michael Brown",
    speciality: "Pediatricians",
    image: doc4,
    about:
      "Dr. Michael Brown is a compassionate pediatrician focusing on child growth, immunizations, and overall child wellness. Parents trust his friendly approach.",
    address: { line1: "Sunshine Towers", line2: "Mumbai, India" },
    degree: "MBBS, DCH",
    experience: "7 Years",
    fees: 45,
  },
  {
    _id: "doc5",
    name: "Dr. Sarah Davis",
    speciality: "Neurologist",
    image: doc5,
    about:
      "Dr. Sarah Davis has a strong commitment to delivering accurate diagnosis and treatment of neurological conditions including migraines and epilepsy.",
    address: { line1: "Cloudline Road", line2: "Kolkata, India" },
    degree: "MBBS, DM (Neurology)",
    experience: "4 Years",
    fees: 70,
  },
  {
    _id: "doc6",
    name: "Dr. Emma Martinez",
    speciality: "Gastroenterologist",
    image: doc6,
    about:
      "Dr. Emma Martinez is an expert in digestive disorders. She’s known for helping patients manage chronic conditions like IBS and acid reflux effectively.",
    address: { line1: "Lakeside View", line2: "Hyderabad, India" },
    degree: "MBBS, DM (Gastroenterology)",
    experience: "9 Years",
    fees: 75,
  },
  {
    _id: "doc7",
    name: "Dr. David Wilson",
    speciality: "General physician",
    image: doc7,
    about:
      "Dr. David Wilson is a family physician who provides preventive care, chronic disease management, and general medical consultations.",
    address: { line1: "Heritage Estate", line2: "Pune, India" },
    degree: "MBBS",
    experience: "6 Years",
    fees: 50,
  },
  {
    _id: "doc8",
    name: "Dr. James Anderson",
    speciality: "Gynecologist",
    image: doc8,
    about:
      "Dr. James Anderson has served in women’s healthcare for over 11 years, with a focus on fertility, menstrual health, and prenatal care.",
    address: { line1: "Lotus Boulevard", line2: "Noida, India" },
    degree: "MBBS, MS (Obgyn)",
    experience: "11 Years",
    fees: 65,
  },
  {
    _id: "doc9",
    name: "Dr. Olivia Taylor",
    speciality: "Dermatologist",
    image: doc9,
    about:
      "Dr. Olivia Taylor has helped countless patients achieve clear skin. She excels in cosmetic dermatology and non-invasive treatments.",
    address: { line1: "Bluebell Apartments", line2: "Ahmedabad, India" },
    degree: "MBBS, MD (Dermatology)",
    experience: "5 Years",
    fees: 60,
  },
  {
    _id: "doc10",
    name: "Dr. William Thomas",
    speciality: "Pediatricians",
    image: doc10,
    about:
      "Dr. William Thomas provides a nurturing and comfortable environment for kids and their families. He specializes in developmental disorders and allergies.",
    address: { line1: "Riverwalk Lane", line2: "Nagpur, India" },
    degree: "MBBS, DCH",
    experience: "7 Years",
    fees: 50,
  },
  {
    _id: "doc11",
    name: "Dr. Isabella Scott",
    speciality: "General physician",
    image: doc11,
    about:
      "Dr. Isabella Scott brings a blend of modern medicine and holistic care to treat her patients comprehensively.",
    address: { line1: "Maple Residency", line2: "Coimbatore, India" },
    degree: "MBBS",
    experience: "8 Years",
    fees: 55,
  },
  {
    _id: "doc12",
    name: "Dr. Ethan Moore",
    speciality: "Gynecologist",
    image: doc12,
    about:
      "Dr. Ethan Moore is known for his empathetic and evidence-based care in gynecology and obstetrics.",
    address: { line1: "Orchid Park", line2: "Thiruvananthapuram, India" },
    degree: "MBBS, MS (Gynecology)",
    experience: "10 Years",
    fees: 60,
  },
  {
    _id: "doc13",
    name: "Dr. Ava Martinez",
    speciality: "Dermatologist",
    image: doc13,
    about:
      "Dr. Ava Martinez has helped many patients with acne, pigmentation, and skin rejuvenation treatments with excellent results.",
    address: { line1: "Pearl Residency", line2: "Jaipur, India" },
    degree: "MBBS, DDVL",
    experience: "6 Years",
    fees: 65,
  },
  {
    _id: "doc14",
    name: "Dr. Benjamin Lee",
    speciality: "Pediatricians",
    image: doc14,
    about:
      "Dr. Benjamin Lee takes a personalized approach to pediatric care and ensures kids and parents feel safe and informed.",
    address: { line1: "Cedar Hills", line2: "Lucknow, India" },
    degree: "MBBS, MD (Pediatrics)",
    experience: "9 Years",
    fees: 50,
  },
  {
    _id: "doc15",
    name: "Dr. Mia Watson",
    speciality: "Neurologist",
    image: doc15,
    about:
      "Dr. Mia Watson specializes in neurodegenerative disorders and offers exceptional care for patients with Parkinson’s, Alzheimer’s, and epilepsy.",
    address: { line1: "Galaxy Enclave", line2: "Indore, India" },
    degree: "MBBS, DM (Neurology)",
    experience: "12 Years",
    fees: 80,
  },
];

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];
