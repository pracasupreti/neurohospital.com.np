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
const courseDataCTEVT = [
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
];

const containerCTEVT = document.getElementById("CTEVT");

courseDataCTEVT.forEach((course, index) => {
  const section = document.createElement("section");
  section.className = "row align-items-center my-2";

  const content = `
   <div class="container customer-success my-lg-5 my-2 ">
                    <div class="row align-items-center">
        <div class="col-md-6 p-2 ${index % 2 === 1 ? "" : "order-md-2"}">
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
  containerCTEVT.appendChild(section);
});
