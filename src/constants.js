// Skills Section Logo's
// import sassLogo from './assets/tech_logo/sass.png';

// import angularLogo from './assets/tech_logo/angular.png';

// import reduxLogo from './assets/tech_logo/redux.png';

// import gsapLogo from './assets/tech_logo/gsap.png';

// import springbootLogo from './assets/tech_logo/springboot.png';

// import javaLogo from './assets/tech_logo/java.png';
// import mcLogo from './assets/tech_logo/mc.png';

// import figmaLogo from './assets/tech_logo/figma.png';

// import csharpLogo from './assets/tech_logo/csharp.png';

import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import notionlogo from "./assets/work_logo/notion.jpg";
import bloodLinklogo from "./assets/work_logo/bloodlink.png";
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import chitchatlogo from "./assets/work_logo/chitchat.webp";
import tmulogo from "./assets/education_logo/TMU.jpg";
import svgmslogo from "./assets/education_logo/svgms.png";
// Project Section Logo's
// import movierecLogo from "./assets/work_logo/movie_rec.png";
// import githubdetLogo from "./assets/work_logo/github_det.png";
// import csprepLogo from "./assets/work_logo/cs_prep.png";
// import taskremLogo from "./assets/work_logo/task_rem.png";
// import npmLogo from "./assets/work_logo/npm.png";
// import webverLogo from "./assets/work_logo/web_dig.png";
// import cmLogo from "./assets/work_logo/cm.png";
// import imagesearchLogo from "./assets/work_logo/image_search.png";
// import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: notionlogo,
    role: "Fullstack Developer",
    link: "https://notion-clone-akn2.onrender.com",
    company: "Notion Clone",
    date: "April 2024 - Present",
    desc: "Created a Notion-inspired web app using React, Node.js, and Firebase. Features include real-time collaboration, rich-text editing, and organized page management. Focused on clean design, fast performance, secure authentication, and an intuitive user experience across all devices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Next Js",
    ],
  },
  {
    id: 1,
    img: bloodLinklogo,
    link: "https://bloodlink-flame.vercel.app/",
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: chitchatlogo,
    role: "Frontend Intern",
    link: "https://chitchat-es0h.onrender.com/",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: tmulogo,
    school: "Teerthanker Mahavir University, Moradabad",
    date: "Aug 2022 - June 2025",
    grade: "8.47 CGPA",
    desc: "I have completed my bACHELOR of Technology from Teerthanker Mahavir University, Moradabad. During my time at TMU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at TMU has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology in Computer Science - B-tech(CSE)",
  },
  
  {
    id: 1,
    img: svgmslogo,
    school: "Swami Vivekanand Govt. Model School, Deoli",
    date: "Apr 2020 - March 2022",
    grade: "77.6%",
    desc: "I completed my class 12 education from Swami Vivekanand Govt. Model School, Deoli, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Physical Education.",
    degree: "CBSE(XII) - PCM with Physical Education",
  },
  {
    id: 2,
    img: svgmslogo,
    school: "Swami Vivekanand Govt. Model School, Deoli",
    date: "Apr 2015 - March 2016",
    grade: "73.6%",
    desc: "I completed my class 10 education from Swami Vivekanand Govt. Model School, Deoli, under the CBSE board.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Notion Clone",
    description:
      "Created a Notion-inspired web app using React, Node.js, and Firebase. Features include real-time collaboration, rich-text editing, and organized page management. Focused on clean design, fast performance, secure authentication, and an intuitive user experience across all devices.",
    image: notionlogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/Aadityajain01/notion-clone",
    webapp: "https://notion-clone-akn2.onrender.com/",
  },
  {
    id: 1,
    title: "Chitchat",
    description:
      "Developed Chitchat, a real-time chat application using React, Node.js, and WebSocket. Enabled instant messaging with user authentication, responsive design, and smooth server-client communication, ensuring fast, secure, and seamless conversations across desktop and mobile platforms.",
    image: chitchatlogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Aadityajain01/chitchat",
    webapp: "https://chitchat-es0h.onrender.com/",
  },
  {
    id: 2,
    title: "Blood Donation portal",
    description:
      "Designed and developed BloodLink, a blood donation portal using React, Node.js, and MongoDB. Streamlined donor-recipient matching, integrated location-based search, and ensured secure authentication, helping users easily connect and contribute to life-saving blood donation efforts.",
    image: bloodLinklogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Aadityajain01/Elites-29",
    webapp: "https://bloodlink-flame.vercel.app/",
    // },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  },
];
