const courseData = [
  {
    title: "Neurosurgery",
    description:
      "This course provides a comprehensive introduction to neurosurgery, covering essential topics such as neuroanatomy, surgical techniques, and patient management. Students will gain hands-on experience in the operating room, learn to assess neurological conditions, and develop critical decision-making skills necessary for neurosurgical practice.",
    imageUrl:
      "images/acedemia/1.png",
  },
  {
    title: "Cardiology",
    description:
      "Explore the fundamentals of cardiology, including heart function, common diseases, and current treatment options. This course is tailored for medical students and healthcare professionals who want to specialize in cardiac care.",
    imageUrl:
      "images/acedemia/2.png",
  },
  {
    title: "General Medicine",
    description:
      "This course provides a comprehensive introduction to general medicine, covering essential topics such as anatomy, physiology, pathology, pharmacology, and diseases. Students will gain hands-on experience in the operating room, learn to assess patients, and develop critical decision-making skills necessary for medical practice.",
    imageUrl:
      "https://img.freepik.com/free-photo/border-from-stethoscope-pills_23-2147796533.jpg?t=st=1724132963~exp=1724136563~hmac=6ebf03917ba4ca03eeee547d86db5097c02b55e2bfa8d0a83e97269f0581e6a7&w=1380",
  },
  {
    title: "Orthopedic Surgery",
    description:
      "This course provides a comprehensive introduction to orthopedic surgery, covering essential topics such as anatomy, physiology, pathology, pharmacology, and diseases. Students will gain hands-on experience in the operating room, learn to assess patients, and develop critical decision-making skills necessary for medical practice.",
    imageUrl:
      "images/acedemia/4.png",
  },
  {
    title: "Surgery",
    description:
      "This course provides a comprehensive introduction to surgery, covering essential topics such as anatomy, physiology, pathology, pharmacology, and diseases. Students will gain hands-on experience in the operating room, learn to assess patients, and develop critical decision-making skills necessary for medical practice.",
    imageUrl:
      "images/acedemia/5.png",
  },
  {
    title: "PCL Nursing",
    description:
      "This course provides a comprehensive introduction to PCL nursing, covering essential topics such as anatomy, physiology, pathology, pharmacology, and diseases. Students will gain hands-on experience in the operating room, learn to assess patients, and develop critical decision-making skills necessary for medical practice.",
    imageUrl:
      "images/acedemia/6.png",
  },
  {
    title: "Health Assistant",
    description:
      "This course provides a comprehensive introduction to Health Assistant, covering essential topics such as anatomy, physiology, pathology, pharmacology, and diseases. Students will gain hands-on experience in the operating room, learn to assess patients, and develop critical decision-making skills necessary for medical practice.",
    imageUrl:
      "images/acedemia/7.png",
  },
  // Add more objects as needed
];

const container = document.getElementById("courses-container");

courseData.forEach((course, index) => {
  const section = document.createElement("section");
  section.className = "row align-items-center my-2";

  const content = `
   <div class="container customer-success my-lg-5 my-2 ">
                    <div class="row align-items-center">
        <div class="col-md-6 p-2 ${index % 2 === 0 ? "" : "order-md-2"}">
            <h3 class="my-1 px-4">${course.title}</h3>
            <p class="text-justify p-4">${course.description}</p>
        </div>
        <div class="col-md-6  ${index % 2 === 0 ? "" : "order-md-1"}">
            <img src="${course.imageUrl}" style="border-radius:10%;" alt="${
    course.title
  } Image" class="img-fluid px-4 " >
        </div>
        </div>
                </div>
    `;

  section.innerHTML = content;
  container.appendChild(section);
});

// 
// const courseDataPk = [
//   {
//     title: "Neurosurgery pk",
//     description:
//       "This course provides a comprehensive introduction to neurosurgery, covering essential topics such as neuroanatomy, surgical techniques, and patient management. Students will gain hands-on experience in the operating room, learn to assess neurological conditions, and develop critical decision-making skills necessary for neurosurgical practice.",
//     imageUrl:
//       "https://img.freepik.com/free-photo/researcher-looking-monitor-analysing-brain-scan-while-coworker-discussing-with-patient-background-about-side-effects-mind-functions-nervous-system-tomography-scan-working-laboratory_482257-13071.jpg?t=st=1724130800~exp=1724134400~hmac=09511eb03c08b8425047c82dc4b1cf6a6c40d23e39e110e8f92390d4c99256be&w=1380",
//   },
//   {
//     title: "Cardiology pk",
//     description:
//       "Explore the fundamentals of cardiology, including heart function, common diseases, and current treatment options. This course is tailored for medical students and healthcare professionals who want to specialize in cardiac care.",
//     imageUrl:
//       "https://img.freepik.com/free-photo/middle-age-hispanic-man-wearing-doctor-uniform-auscultating-heart-clinic_839833-7987.jpg?t=st=1724132727~exp=1724136327~hmac=cbdfaa4a5740fa1037d293538abc212adcb89e19a56790c492d17f9491d2d886&w=1380",
//   },];

// const containerpk = document.getElementById("pk");

// courseDataPk.forEach((course, index) => {
//   const section = document.createElement("section");
//   section.className = "row align-items-center my-2";

//   const content = `
//    <div class="container customer-success my-lg-5 my-2 ">
//                     <div class="row align-items-center">
//         <div class="col-md-6 p-2 ${index % 2 === 0 ? "" : "order-md-2"}">
//             <h3 class="my-1 px-4">${course.title}</h3>
//             <p class="text-justify p-4">${course.description}</p>
//         </div>
//         <div class="col-md-6  ${index % 2 === 0 ? "" : "order-md-1"}">
//             <img src="${course.imageUrl}" style="border-radius:10%;" alt="${
//     course.title
//   } Image" class="img-fluid px-4 " >
//         </div>
//         </div>
//                 </div>
//     `;

//   section.innerHTML = content;
//   containerpk.appendChild(section);
// });
