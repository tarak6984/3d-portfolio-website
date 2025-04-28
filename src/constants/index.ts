import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  

  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Customer Support",
    companyName: "Robi 10 Minute School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2019 - June 2022",
    points: [
      "Assisted customers by resolving inquiries and providing effective solutions through multiple communication channels.",
      "Collaborated with cross-functional teams, including technical support and content creators, to enhance user experience.",
      "Managed and maintained customer interactions, ensuring prompt responses and high-quality service.",
      "Provided feedback and insights to improve support processes and enhance overall customer satisfaction.",
    ],
  },
  {
    title: "Head of Product Management",
    companyName: "Instant School",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2022 - Feb 2023",
    points: [
      "Leading the development and execution of the product strategy for online skill-based courses.",
      "Collaborating with cross-functional teams, including designers, engineers, and instructors, to create high-quality educational products.",
      "Conducting market research to identify trends and user needs, ensuring our courses remain competitive and relevant.",
      "Ensuring seamless user experience by working closely with UX/UI designers and developers.",
    ],
  },
  {
    title: "Officer Cadet",
    companyName: "Bangladesh Naval Academy",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2023 - December 2023",
    points: [
      "Undergoing rigorous military and academic training to develop leadership, discipline, and technical skills.",
      "Participating in naval operations training, including navigation, seamanship, and maritime warfare strategies.",
      "Collaborating with senior officers and fellow cadets to enhance teamwork and problem-solving abilities.",
      "Adapting to diverse roles and responsibilities as part of a structured officer training program.",
    ],
  },
  {
    title: "IRays Teknology Ltd",
    companyName: "Mobile App Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining mobile applications using Android Studio and other related technologies.",
      "Implementing responsive and intuitive UI/UX designs to enhance user experience.",
      "Debugging and troubleshooting issues to improve application stability and reliability.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    "testimonial": "Tarak is an exceptional student, always eager to learn and improve. His dedication to web development is truly inspiring.",
    "name": "Prof. David Miller",
    "designation": "Instructor",
    "company": "Introduction to Java Programming, UoPeople",
    "image": "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    "testimonial": "I've seen many students with technical skills, but Tarak stands out because of his problem-solving mindset and attention to detail.",
    "name": "Dr. Susan Carter",
    "designation": "Professor",
    "company": "Technical Writing, UoPeople",
    "image": "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    "testimonial": "Tarak’s ability to grasp complex sociological concepts and apply them in discussions is commendable. He is a critical thinker with a bright future ahead!",
    "name": "Dr. Michael Reed",
    "designation": "Professor",
    "company": "Sociology 1502-01, UoPeople",
    "image": "https://randomuser.me/api/portraits/men/15.jpg"
  }
];


const projects: TProject[] = [
  {
    name: "HealthCare Management System",
    description:
      "A healthcare patient management application that allows patients to register, book, and manage appointments with doctors. Includes admin tools, SMS notifications, and more — built with Next.js, TailwindCSS, and Appwrite.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "Appwrite", color: "blue-text-gradient" },
      { name: "Twilio", color: "green-text-gradient" },
      { name: "Sentry", color: "pink-text-gradient" },
    ],
    image: "https://i.postimg.cc/K8xf0M4m/healthcare-banner.png", // placeholder, you can change it
    sourceCodeLink: "https://github.com/tarak6984/health_care.git",
  },
  {
    name: "University Website",
    description:
      "Web-based platform designed for universities to manage courses, faculty, and student interactions efficiently, providing an intuitive interface for seamless communication and organization.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "Bootstrap 5", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: "https://i.postimg.cc/pLzhtY4V/Screenshot-2025-03-31-160532.png",
    sourceCodeLink: "https://github.com/tarak6984/University-Website.git",
  },
  {
    name: "Travel Website",
    description:
      "A travel booking platform that helps users discover destinations, plan trips, and book accommodations seamlessly with an interactive and user-friendly interface.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: "https://i.postimg.cc/ZRc6zF9v/Screenshot-2025-03-31-154325.png",
    sourceCodeLink: "https://github.com/tarak6984/Travel-Website.git",
  },
];


export { services, technologies, experiences, testimonials, projects };
