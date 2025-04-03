import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const Services = () => {
  const name = "Our Services";
  return (
    <>
      <Breadcrumb name1={name} name2={name} />
      <div className="services">
        <div className="services-sec-1 my-3" style={{textAlign:"justify"}}>
          Neuro Cardio & Multispeciality Hospital Biratnagar provides a{" "}
          <i> comprehensive range of healthcare services</i>, including{" "}
          <i>diagnostic, surgical, emergency, and specialized care</i>. Our
          advanced medical technology, experienced doctors, and dedicated staff
          ensure that patients receive the highest quality care.
        </div>
        <div className="shadow py-3" >
          <p className="text-center h2 " style={{ color: "#2c52a0" }}>
            {" "}
            Diagnostic and Imaging Services
          </p>
          <p className="text-center">
            We offer state-of-the-art diagnostic tools to provide accurate and
            reliable results for various health conditions.
          </p>
          <div className="services-sec-2 ">
            <div className="mx-2">
              <ul style={{ textAlign: "justify" }}>
                <li>
                  <i>DEXA Scan (Dual-Energy X-ray Absorptiometry) –</i> Assesses
                  bone mineral density (BMD) to diagnose osteoporosis and
                  predict fracture risk.
                </li>
                <li>
                  <i>CT Scan (Computed Tomography) –</i> Provides detailed
                  cross-sectional images for diagnosing brain injuries, cancers,
                  cardiovascular diseases, and musculoskeletal disorders.
                </li>
                <li>
                  <i>MRI (Magnetic Resonance Imaging) – </i>A non-invasive
                  imaging technique offering high-resolution images for
                  neurological, orthopedic, and soft tissue conditions.
                </li>
                <li>
                  <i>EEG (Electroencephalogram) –</i> Evaluates brain activity
                  to diagnose epilepsy, seizures, and other neurological
                  disorders.
                </li>
                <li>
                  <i>ECG (Electrocardiogram) –</i> A quick and painless test to
                  check the heart’s electrical activity for arrhythmias and
                  other heart conditions.
                </li>
                <li>
                  <i>ECHO (Echocardiogram) –</i> Uses ultrasound to create
                  images of the heart, helping diagnose heart diseases and valve
                  disorders.
                </li>
                <li>
                  <i>TMT (Treadmill Test) –</i> A cardiac stress test used to
                  evaluate heart function during physical exertion.
                </li>
                <li>
                  <i>Holter Monitoring –</i> A portable ECG device that
                  continuously records heart rhythms for 24-48 hours to detect
                  irregularities.
                </li>
                <li>
                  <i>NCS/EMG (Nerve Conduction Study & Electromyography) –</i>{" "}
                  Helps diagnose nerve and muscle disorders like neuropathy,
                  carpal tunnel syndrome, and muscle weakness.
                </li>
                <li>
                  <i>X-Ray – </i>Provides quick and detailed imaging for
                  diagnosing fractures, lung infections, and other medical
                  conditions.
                </li>
                <li>
                  <i>Endoscopy –</i> A minimally invasive procedure to examine
                  the digestive tract and diagnose gastrointestinal conditions.
                </li>
              </ul>
            </div>
            <div className="m-2">
              <img
                src="/assets/images/services/2.jpg"
                alt="services-img-1"
                className="w-100"
              />
            </div>
          </div>
        </div>
        <div className="shadow py-3 my-3">
          <p className="text-center h2 " style={{ color: "#2c52a0" }}>
            {" "}
            Surgical Services
          </p>
          <p className="text-center">
            Our hospital is equipped with advanced surgical facilities and a
            highly skilled team to perform a wide range of procedures.
          </p>
          <div className="services-sec-2 ">
            <div className="m-2">
              <img
                src="/assets/images/services/3.jpg"
                alt="services-img-1"
                className="w-100"
              />
            </div>
            <div className="">
              <ul style={{ textAlign: "justify" }} className="mx-2">
                <li>
                  <i>Modular OT Setup –</i> Modern operating theaters designed
                  to maintain a sterile environment for complex and high-risk
                  surgeries.
                </li>
                <li>
                  <i>Major Surgeries:</i>
                  <ul>
                    <li>
                      <i>Neurosurgery –</i> Brain and spinal cord procedures.
                    </li>
                    <li>
                      <i>Orthopedic Surgery –</i> Musculoskeletal treatments,
                      fractures, and joint surgeries.
                    </li>
                    <li>
                      <i>General Surgery –</i> Comprehensive surgical care for
                      various conditions.
                    </li>
                    <li>
                      <i>Urosurgery – </i>Advanced surgical treatments for
                      kidney, bladder, and urinary tract diseases.
                    </li>
                    <li>
                      <i>Ophthalmic Surgery –</i> Surgical procedures for eye
                      conditions, including cataracts and glaucoma.
                    </li>
                    <li>
                      <i>Dermatology Procedures – </i>Specialized skin
                      treatments for various dermatological conditions,
                      including minor cosmetic surgeries.
                    </li>
                  </ul>
                </li>
                <li>
                  <i>Cath Lab –</i> Equipped with modern technology for advanced
                  cardiac and vascular procedures.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shadow py-3 my-3">
          <p className="text-center h2 " style={{ color: "#2c52a0" }}>
            {" "}
            Emergency and Critical Care Services
          </p>
          <p className="text-center">
            Our emergency services are available 24/7 to respond to medical
            emergencies with immediate care.
          </p>
          <div className="services-sec-2 ">
            <div className="m-2">
              <ul style={{ textAlign: "justify" }}>
                <li>
                  <i>24-Hour Emergency Services –</i> Trauma care, life-saving
                  treatments, and urgent consultations.
                </li>
                <li>
                  <i>Trauma Center –</i> Rapid diagnosis, stabilization, and
                  treatment for accident-related injuries and emergencies.
                </li>
                <li>
                  <i>Intensive Care Units (ICU) –</i> We provide specialized
                  critical care with state-of-the-art monitoring and
                  life-support systems.
                </li>
              </ul>
            </div>
            <div className="mx-2 my-2">
              <img
                src="/assets/images/services/4.jpg"
                alt="services-img-1"
                className="w-100"
              />
            </div>
          </div>
        </div>
        <div className="shadow py-3 my-3">
          <p className="text-center h2 " style={{ color: "#2c52a0" }}>
            {" "}
            Specialized Care Services
          </p>
          <p className="text-center">
            Our specialized departments offer expert care tailored to various
            medical needs.
          </p>
          <div className="services-sec-2 ">
            <div className="m-2">
              <img
                src="/assets/images/services/2.jpg"
                alt="services-img-1"
                className="w-100"
              />
            </div>
            <div className="mx-2">
              <ul style={{ textAlign: "justify" }}>
                <li>
                  <i>Dialysis Services –</i> High-quality dialysis for renal
                  failure patients, managed by trained professionals.
                </li>
                <li>
                  <i>Free Ambulance Service in Biratnagar –</i> Prompt emergency
                  transport equipped with life-saving medical equipment.
                </li>
                <li>
                  <i>Super Deluxe & Deluxe Cabins –</i>
                  <ul>
                    <li>
                      <i>Super Deluxe Cabin –</i> A premium recovery room with
                      enhanced comfort, privacy, and personalized services.
                    </li>
                    <li>
                      <i>Deluxe Cabin –</i> Comfortable and private rooms with
                      premium facilities for a peaceful recovery.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shadow py-3 my-3">
          <p className="text-center h2 " style={{ color: "#2c52a0" }}>
            {" "}
            Outpatient and Consultation Services
          </p>
          <p className="text-center">
            We offer outpatient services for routine checkups, specialist
            consultations, and follow-up care.
          </p>
          <div className="services-sec-2 ">
            <div className="m-2">
              <ul style={{ textAlign: "justify" }}>
                <li>
                  <i>Outpatient Department (OPD) –</i> Consultations with expert
                  doctors across multiple specialties.
                </li>
                <li>
                  <i>Online Appointment Booking –</i> Convenient online
                  scheduling for consultations and procedures. You can book your
                  appointment easily by visiting our website:{" "}
                  <Link to="https://neuro.danphecare.com/">
                    https://neuro.danphecare.com/
                  </Link>{" "}
                  or using our mobile application.
                </li>
                <li>
                  <i>MRI (Magnetic Resonance Imaging) – </i> A non-invasive
                  imaging technique offering high-resolution images for
                  neurological, orthopedic, and soft tissue conditions.
                </li>
              </ul>
            </div>
            <div className="m-2">
              <img
                src="/assets/images/services/5.png"
                alt="services-img-1"
                className="w-100"
              />
            </div>
          </div>
        </div>
        <div className="shadow py-3 my-3">
          <p className="text-center h2" style={{ color: "#2c52a0" }}>
            {" "}
            Special Days and Discounts
          </p>
          <p className="text-center">
            We provide affordable healthcare through various special days and
            discounts:
          </p>
          <div className="services-sec-2 ">
            <div className="m-2">
              <img
                src="/assets/images/services/pop_up.jpg"
                alt="services-img-1"
                className="w-100"
              />
            </div>
            <div className="">
              <ul style={{ textAlign: "justify" }} className="mx-2">
                <li>
                  <i>Free OPD & 25% Discount –</i> On designated days, enjoy
                  free OPD consultations and 25% off medical services.
                </li>
                <li>
                  <i>Gynecology Consultations (Thursday) –</i> Specialized
                  women’s health consultations.
                </li>
                <li>
                  <i>Pediatric Consultations (Wednesday) –</i> Expert care for
                  children’s health needs.
                </li>
                <li>
                  <i> Cardiology Consultations (Thursday) –</i>
                  Diagnosis and treatment of heart conditions.
                </li>
                <li>
                  <i>General Surgery Consultations (Friday) – </i>Consultation
                  for surgical procedures.
                </li>
                <li>
                  <i>
                    Pathology Services Discount (Saturday – Special Tests Only)
                    –
                  </i>
                  50% off on selected special pathology tests, ensuring
                  affordable diagnostic care.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className=" h2 my-3" style={{ color: "#2c52a0" }}>
          Conclusion
        </p>
        <p style={{textAlign:"justify"}}>
          Neuro Cardio & Multispeciality Hospital Biratnagar is committed to
          top-quality healthcare through advanced technology, expert doctors,
          and a patient-first approach. Explore our services, book an
          appointment online, and experience compassionate care tailored to your
          needs.
        </p>
      </div>
    </>
  );
};

export default Services;
