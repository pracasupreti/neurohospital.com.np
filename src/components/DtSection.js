import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DtSection = () => {
  const list = [
    {
      name: "Dr. Nikesh Raj Shrestha",
      pic: "/assets/images/doctors/dr-nikesh-raj-shrestha.png",
      prof: "Senior Consultant Interventional Cardiologist",
      link: "/doctors",
      id: "NMC # : 3195",
    },
    {
      name: "Prof. Dr. Shailaja Chhetri (Shrestha)",
      pic: "/assets/images/doctors/dr-shailaja-chhetri-shrestha.png",
      prof: "Senior Consultant Gynaecologist",
      link: "/doctors",
      id: "NMC # : 6703",
    },
    {
      name: "Dr. Sudeep Khaniya",
      pic: "/assets/images/doctors/dr-sudeep-khaniya.png",
      prof: "Senior Consultant GI & Laparoscopic Surgeon",
      link: "/doctors",
      id: "NMC # : 3633",
    },
    {
      name: "Dr. Vivek Kattel",
      pic: "/assets/images/doctors/dr-vivek-kattel.png",
      prof: "Senior Consultant Physician & Rheumatologist",
      link: "/doctors",
      id: "NMC # : 7537",
    },
    {
      name: "Dr. Sunanda Poudel",
      pic: "/assets/images/doctors/dr-sunanda-poudel.png",
      prof: "Senior Consultant Neurologist",
      link: "/doctors",
      id: "NMC # : 8863",
    },
    {
      name: "Dr. Roshan Khatiwada",
      pic: "/assets/images/doctors/dr-roshan-khatiwada.png",
      prof: "Senior Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 8369",
    },
    {
      name: "Dr. Ashish Jung Thapa",
      pic: "/assets/images/doctors/dr-ashish-jung-thapa.png",
      prof: "Senior Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 11347",
    },
    {
      name: "Dr. Sunil Kumar Das",
      pic: "/assets/images/doctors/dr-sunil-kumar-das.png",
      prof: "Senior Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 13007",
    },
    {
      name: "Dr. Suresh Prasad Shah",
      pic: "/assets/images/doctors/dr-suresh-prasad-shah.png",
      prof: "Senior Consultant Paediatrician",
      link: "/doctors",
      id: "NMC # : 13307",
    },
    {
      name: "Dr. Ranjan Thapa",
      pic: "/assets/images/doctors/dr-ranjan-thapa.png",
      prof: "Consultant Psychiatrist",
      link: "/doctors",
      id: "NMC # : 3626",
    },
    {
      name: "Dr. Roshan Acharya",
      pic: "/assets/images/doctors/dr-roshan-acharya.png",
      prof: "Senior Consultant ENT Surgeon",
      link: "/doctors",
      id: "NMC # : 4116",
    },
    {
      name: "Dr. Sagar Raj Pandey",
      pic: "/assets/images/doctors/dr-sagar-raj-pandey.png",
      prof: "Senior Consultant Pathologist",
      link: "/doctors",
      id: "NMC # : 2586",
    },
    {
      name: "Dr. Pannalal Shah",
      pic: "/assets/images/doctors/dr-pannalal-shah.png",
      prof: "Senior Consultant Radiologist",
      link: "/doctors",
      id: "NMC # : 3637",
    },
    {
      name: "Dr. Niraj Regmi",
      pic: "/assets/images/doctors/dr-niraj-regmi.png",
      prof: "Consultant Radiologist",
      link: "/doctors",
      id: "NMC # : 5480",
    },
    {
      name: "Dr. Manzil Shrestha",
      pic: "/assets/images/doctors/dr-manzil-shrestha.png",
      prof: "Consultant Anesthesiologist",
      link: "/doctors",
      id: "NMC # : 4604",
    },
    {
      name: "Dr. Bhuwaneshwor Yadav",
      pic: "/assets/images/doctors/dr-bhuwaneshwor-yadav.png",
      prof: "Consultant Gastroenterologist",
      link: "/doctors",
      id: "NMC # : 10713",
    },
    {
      name: "Dr. Purushottam Parajuli",
      pic: "/assets/images/doctors/dr-purushottam-parajuli.png",
      prof: "Consultant Urologist",
      link: "/doctors",
      id: "NMC # : 12015",
    },
    {
      name: "Dr. Gaurav Chettri",
      pic: "/assets/images/doctors/dr-gaurav-chettri.png",
      prof: "Consultant Nephrologist",
      link: "/doctors",
      id: "NMC # : 9060",
    },
    {
      name: "Dr. Nisha Adhikari",
      pic: "/assets/images/doctors/dr-nisha-adhikari.png",
      prof: "Consultant Gynaecologist",
      link: "/doctors",
      id: "NMC # : 11384",
    },
    {
      name: "Dr. Rajan Karn",
      pic: "/assets/images/doctors/dr-rajan-karn.png",
      prof: "Consultant Cardiologist",
      link: "/doctors",
      id: "NMC # : 12949",
    },
    {
      name: "Dr. Amit Deo",
      pic: "/assets/images/doctors/dr-amit-deo.png",
      prof: "Consultant Orthopedic Surgeon",
      link: "/doctors",
      id: "NMC # : 9572",
    },
    {
      name: "Dr. Richa Sharma",
      pic: "/assets/images/doctors/dr-richa-sharma.png",
      prof: "Consultant Dermatologist",
      link: "/doctors",
      id: "NMC # : 14810",
    },
    {
      name: "Dr. Arjun Chettri",
      pic: "/assets/images/doctors/dr-arjun-chettri.png",
      prof: "Consultant Anesthesiologist",
      link: "/doctors",
      id: "NMC # : 8893",
    },
    {
      name: "Dr. Lokendra Narayan Mandal",
      pic: "/assets/images/doctors/dr-lokendra-narayan-mandal.png",
      prof: "Consultant Anesthesiologist",
      link: "/doctors",
      id: "NMC # : 12683",
    },
    {
      name: "Dr. Amit Pratap Shah",
      pic: "/assets/images/doctors/dr-amit-pratap-shah.png",
      prof: "Dental Surgeon",
      link: "/doctors",
      id: "NMC # : 6361",
    },
    {
      name: "Dr. Nabin Kumar Chaudhary",
      pic: "/assets/images/doctors/dr-nabin-kumar-chaudhary.png",
      prof: "Physiotherapist",
      link: "/doctors",
      id: "NMC # : 25PHY",
    },
    {
      name: "Join our Team",
      pic: "/assets/images/doctors/join-our-team.png",
      prof: "Apply Now",
      link: "/apply",
      id: "Apply now",
    },
  ];

  const navigate = useNavigate();
  const load = (link) => {
    navigate(link);
    window.location.reload();
  };

  return (
    <>
      <div className="ul-doc ">
        {list.map((item) => (
          <div key={item.id} className="li-doc">
            <div className="li-doc-1 text-center">
              <img src={item.pic} alt={item.name} />
              <div className="dcts-1-p1">{item.name}</div>
              <div className="dcts-1-p2">{item.prof}</div>
              <Link onClick={() => load(item.link)} className="dcts-btn btn">
                {item.id}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DtSection;
