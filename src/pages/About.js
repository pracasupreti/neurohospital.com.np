import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import Video from "../components/Video";
import AboutCpnt from "../components/AboutCpnt";

const About = () => {
  const name1 = "About Us";
  const name2 = "About Us";
  const img = "/assets/images/aboutus/abu3.png";
  const url = "https://www.youtube.com/watch?v=WYN_vQ-PdH4";
  const navigate = useNavigate();
  function load(link) {
    navigate(link);
    window.location.reload();
  }

  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const sec4Ref = useRef(null);
  const sec5Ref = useRef(null);
  const sec6Ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isSec3Visible, setIsSec3Visible] = useState(false);
  const [isSec4Visible, setIsSec4Visible] = useState(false);
  const [isSec5Visible, setIsSec5Visible] = useState(false);
  const [isSec6Visible, setIsSec6Visible] = useState(false);

  useEffect(() => {
    const sec2Element = sec2Ref.current;
    const sec3Element = sec3Ref.current;
    const sec4Element = sec4Ref.current;
    const sec5Element = sec5Ref.current;
    const sec6Element = sec6Ref.current;

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer2.unobserve(sec2Element);
        }
      },
      { threshold: 0.3 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec3Visible(true);
          observer3.unobserve(sec3Element);
        }
      },
      { threshold: 0.3 }
    );
    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec4Visible(true);
          observer4.unobserve(sec4Element);
        }
      },
      { threshold: 0.3 }
    );
    const observer5 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec5Visible(true);
          observer5.unobserve(sec5Element);
        }
      },
      { threshold: 0.3 }
    );
    const observer6 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSec6Visible(true);
          observer6.unobserve(sec6Element);
        }
      },
      { threshold: 0.3 }
    );

    if (sec2Element) observer2.observe(sec2Element);
    if (sec3Element) observer3.observe(sec3Element);
    if (sec4Element) observer4.observe(sec4Element);
    if (sec5Element) observer5.observe(sec5Element);
    if (sec6Element) observer6.observe(sec6Element);

    return () => {
      if (sec2Element) observer2.unobserve(sec2Element);
      if (sec3Element) observer3.unobserve(sec3Element);
      if (sec4Element) observer4.unobserve(sec4Element);
      if (sec5Element) observer5.unobserve(sec5Element);
      if (sec6Element) observer6.unobserve(sec6Element);
    };
  }, []);
  // Animated numbers state
  const [patients, setPatients] = useState(0);
  const [doctors, setDoctors] = useState(0);
  const [beds, setBeds] = useState(0);
  const [centers, setCenters] = useState(0);

  useEffect(() => {
    if (isSec3Visible) {
      animateNumber(setPatients, 100000, 3000);
      animateNumber(setDoctors, 31, 3000);
      animateNumber(setBeds, 150, 3000);
      animateNumber(setCenters, 473, 3000);
    }
  }, [isSec3Visible]);

  // Function to animate number smoothly
  const animateNumber = (setter, finalValue, duration) => {
    let start = 0;
    let increment = finalValue / (duration / 30);
    let interval = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        start = finalValue;
        clearInterval(interval);
      }
      setter(Math.floor(start));
    }, 20);
  };
  return (
    <>
      <Breadcrumb name1={name1} name2={name2} />

      {/* Section 1 */}
      <div className="abu-sec1" style={{ textAlign: "justify" }}>
        <div className="ab-sec1-cnt ">
          <div className="ab-sec1-cnt-1">
            <img src="/assets/images/aboutus/ab1.png" alt="ab1" />
          </div>
          <div className="ab-sec1-cnt-2">
            <div className="ab-sec1-cnt-2-1">
              <p className="abu-p1">Welcome to Nepal's Best Neuro Hospital</p>
              <p className="abu-p2">We trust in Service</p>
              <p className="abu-p3">
                Life matters a lot, and we do care for them with our dedication
                towards our duty and as a nation where we feel proud of
                providing the best neurological services as a team of the best
                doctors in Nepal.
              </p>
              <p className="abu-p3">
                Neuro Cardio & Multispecialty Hospital Pvt.Ltd. is a well-known
                multispecialty hospital that was established in 2000 AD to
                provide the best neurological and other medical facilities.
              </p>
              <div className="abu-p4 text-dark">Dr. Birendra Kumar Bista</div>
              <div className="abu-p5">Senior Consultant Neurologist</div>
              <Link to="https://neuro.danphecare.com/" className="abu-btn btn">
                Book an Appointment
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 (Appears on scroll) */}
      <div ref={sec2Ref} className={` abu-sec2 ${isVisible ? "show" : ""}`}>
        <div className="abu-sec2-cnt" style={{ textAlign: "justify" }}>
          <div className="abu-sec2-cnt1 ">
            <div className="abu-s2ct-1div mx-2">
              <div className="s2ct-p1">Highest Quality Care</div>
              <div className="s2ct-p2">
                Complete Medical Solutions in One Place
              </div>
              <div className="s2ct-p3">
                Medical solutions rank amongst the most exciting and interesting
                ways healthcare providers leverage digital technology to improve
                medical care. They have the potential to transform healthcare
                provision as we know it, improving access, clinical outcomes and
                engagement with services.
              </div>
              <div className="abu-sec-3-2row row">
                <div className="sec-3-2col cols col-md-6 col-sm-12">
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp; Service
                    optimisation
                  </div>
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp;
                    Cost-efficiency
                  </div>
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp;
                    Engagement medical care
                  </div>
                </div>
                <div className="sec-3-2col cols col-md-6 col-sm-12">
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp;
                    Accessibility
                  </div>
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp; Improved
                    communication
                  </div>
                  <div>
                    <i className="fa-solid fa-angles-right"></i>&nbsp;
                    Personalised healthcare
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="abu-sec2-cnt2">
            <img src="/assets/images/aboutus/abu2.jpg" alt="abu2" />
          </div>
        </div>
      </div>

      {/* Section 3 (Appears on scroll) */}
      <div className="abu-sec3 my-2">
        <div
          ref={sec3Ref}
          className={`abu-sec3-div1 ${isSec3Visible ? "show" : ""}`}
        >
          <div className="abu-sec3-div1-1">
            <img
              src="/assets/images/aboutus/cardiogram.png"
              alt="cardiogram"
              className="flat-icon"
            />
            <p className="abs3-p1 text-light h3 text-bold">{patients}</p>
            <p className="abs3-p2">Plus Happy Patients</p>
          </div>
          <div className="abu-sec3-div1-1">
            <img
              src="/assets/images/aboutus/doctor.png"
              alt="doctor"
              className="flat-icon"
            />
            <p className="abs3-p1 text-light h3 text-bold">{doctors}</p>
            <p className="abs3-p2">Qualified Doctors</p>
          </div>
          <div className="abu-sec3-div1-1">
            <img
              src="/assets/images/aboutus/bed.png"
              alt="bed"
              className="flat-icon"
            />
            <p className="abs3-p1 text-light h3 text-bold">{beds}</p>
            <p className="abs3-p2">Beds</p>
          </div>
          <div className="abu-sec3-div1-1">
            <img
              src="/assets/images/aboutus/location.png"
              alt="location"
              className="flat-icon"
            />
            <p className="abs3-p1 text-light h3 text-bold">{centers}</p>
            <p className="abs3-p2">Referring Center</p>
          </div>
        </div>
      </div>
      {/* Section 4 (Video Section) */}
      <div className="abu-sec4" style={{ textAlign: "justify" }}>
        <div className="abs4-cnt">
          <div className="abs4-cnt1">
            <Video img={img} url={url} />
          </div>
          <div
            ref={sec4Ref}
            className={`abs4-cnt2 ${isSec4Visible ? "show" : ""}`}
          >
            <div className="abs4-cnt2-cnt">
              <div className="abs4ct2cnt1">Modern Medicine</div>
              <div className="abs4ct2cnt2">World Class Equipments</div>
              <div className="abs4ct2cnt3">
                We need to be prepared for anything that might come through the
                doors. That’s why keeping key pieces of medical equipment
                on-hand at all times are so crucial to providing complete care.{" "}
              </div>
              <div className="abs4ct2cnt4">
                In order to provide comprehensive treatment for patients, we
                have a standard set of equipment that all hospitals should have
                it.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 (About Component) */}
      <div className="abu-sec5">
        <div className="abs5-cnt">
          <div
            ref={sec5Ref}
            className={`abs5-cnt1 ${isSec5Visible ? "show" : ""}`}
          >
            <AboutCpnt />
          </div>
          <div
            ref={sec6Ref}
            className={`abs5-cnt2 ${isSec6Visible ? "show" : ""}`}
          >
            <div className="abs5c21">
              <p className="abs5-p1 text-light">Opening Hours</p>
              <p className="abs5-p2">
                Major services are round the clock services at our hospital. OPD
                and other free counselling has handpicked hours mentioned below.
              </p>
              <p className="abs5-p3">
                Please book your appointment with our Appointment Booking
                System.
              </p>
              <div className="adiv1 d-flex">
                <div className="d1 text-light">Sun-Fri</div>
                <div className="d2 text-light">-</div>
                <div className="d3 text-light">10:30 AM - 05:00 PM</div>
              </div>
              <div className="adiv2 d-flex">
                <div className="d1 text-light">Emergency</div>
                <div className="d2 text-light">-</div>
                <div className="d3 text-light">24 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 (Doctor Info) */}
      <div className="abu-sec6">
        <div className="abs6-cnt text-center">
          <p className="abs6-p1">Experienced Doctors</p>
          <p className="abs6-p2">
            Team of Nepal's best doctors to provide round-the-clock services to
            the patients from Nepal, Bangladesh, India, Bhutan, etc.
          </p>
          <Link onClick={() => load("/doctors")} className="abs6-btn btn">
            View Doctors Team
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
