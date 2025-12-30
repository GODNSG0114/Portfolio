import PreDys_Thumbnail from './PreDys_Thumbnail.png'
import Remova_Thumbnail from './Remova_Thumbnail.png'
import lms from './LMS.png'
export const projects = [
    {
      id: 1,
      title: "PreDys",
      description: "PreDys is a machine learning-based dyslexia detection system that combines CNN and Random Forest models to analyze and identify dyslexia patterns. This mini project leverages deep learning for image-based analysis and ensemble methods for robust classification, providing an accessible tool for early dyslexia screening.",
      tech: "Python, CNN Model, Random Forest Model, OCR",
      image: PreDys_Thumbnail,
      codeLink: "https://drive.google.com/drive/folders/1_jfo1syWBBODw2_apKEsC0preeIxZjAC",
      demoLink: "https://drive.google.com/drive/folders/1_jfo1syWBBODw2_apKEsC0preeIxZjAC"
    },
    {
      id: 2,
      title: "Learning Management System",
      description:"Developed a full-stack LMS with Clerk authentication and Stripe payment integration, enabling secure user access and seamless course purchases. The platform supports course management, enrollment, and scalable learning workflows." ,
      tech: "React, Stripe, Tailwind, Clerk, MongoDB, Express.JS, Node.js  ",
      image: lms,
      codeLink: "https://github.com/GODNSG0114/Learning_Management_System",
      demoLink: "https://lms-frontend-git-main-nikhil-gods-projects.vercel.app/"
    },
    {
      id: 3,
      title: "Remova",
      description: "Remova is an AI-powered background removal tool that enables users to seamlessly extract subjects from images with a single click. The application features a credit-based system with 5 free credits for new users, allowing them to purchase additional credits through secure Razorpay payment integration. Built with Clerk authentication for user management, it combines computer vision technology with a scalable monetization model.",
      tech: "React, Tailwind, Clerk, MongoDB, Express.JS, Node.js, Webhook, Razorpay ",
      image: Remova_Thumbnail,
      codeLink: "https://github.com/GODNSG0114/BG_Removal",
      demoLink: "https://bg-remova-git-main-nikhil-gods-projects.vercel.app/"
    },
   
  ];

export const EducationsDetail = [
    {
      id:1,
      name:"Walchand College of Engineering, Sangli",
      TimeSpan:"2023 - 2027 | Sangli | Maharashtra",
      Class: "Degree : B.Tech in Computer Science and Engineering",
      Grade:"Grade : 8.26"
    },
    {
      id:2,
      name:"Balwant College, Vita",
      TimeSpan:"2021 - 2023 | Vita | Maharashtra",
      Class: "Class : XII (Science)",
      Grade:" Percentage : 84.33 %"
    },
    {
      id:3,
      name:"Vita Highschool, Vita",
      TimeSpan:"2016 - 2021 | Vita | Maharashtra",
      Class: "Class : X",
      Grade:" Percentage : 95.20 %"
    },
]

export const ExperienceDetails = [
  {
    id:1,
    Name:"WCE ACM",
    Position:"Assistant Tech. Director",
    Description : {
      1:"Presented the session in DSA Launchpad 5.0.",
      2:"Conducted Hackathon 2024",
      3:"Conducted MongoDB Bootcamp for 1st year students"
    },
    Tenure:"2024- 2025"
  },
  {
    id:2,
    Name:"WCE ACSES",
    Position:"Assistant Designer",
    Description : {
      1:"Provided the workflow for the events held during the 2024-25 tenure",
      2:"Coordinated Techumen, CPP Bootcamp, and Genesis"
    },
    Tenure:"2024- 2025"
  },

]



 