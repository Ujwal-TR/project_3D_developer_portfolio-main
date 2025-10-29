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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Studio",
    icon: mobile,
  },
  {
    title: "Electronics enthusiast",
    icon: backend,
  },
  {
    title: "Content editor",
    icon: creator,
  },
];

const technologies = [
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

const experiences = [
  {
    title: "Electronics enthusiast",
    company_name: "SCS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - Present",
    points: [
      "Developing own projects for different events.",
      "Collaborating with friends and teams for better growth and learning",
      "Working on different marathons and achieving results.",
      "Participating in coding marathons for experience and outreach",
    ],
  },
  {
    title: "Video editinggg",
    company_name: "Myself",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Always been interested in video editing for some reason.",
      "Always with the urge to capture and record moments.",
      "Enjoyed tiny tweraks in footage and making good videos.",
      "The love for videography and photography only increases day by day.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "utrx",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2020 - present",
    points: [
      "Developing and maintaining web applications for myself and few others.",
      "Understanding trends and changes in technology and learning new things",
      "Exploring new technology and applications along with AI",
      "Working with friends and fellow classmates.",
    ],
  },
  {
    title: "WIX developer",
    company_name: "AuraActive",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using Wix and other related technologies.",
      "Collaborating with teams including friends, and classmates along with teachers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Enjoyed working and deploying their website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "testinmony goes here",
    name: "dash dash",
    designation: "designation",
    company: "org dash dash",
    image: "image goes here",
  },
  {
    testimonial:
      "testinmony goes here",
    name: "dash dash",
    designation: "designation",
    company: "org dash dash",
    image: "image goes here",
  },
  {
    testimonial:
      "testinmony goes here",
    name: "dash dash",
    designation: "designation",
    company: "org dash dash",
    image: "image goes here",
  },
];

const projects = [
  {
    name: "CoreAI_Campus",
    description:
      "An AI project involving CV along with comprehensive algorithms using Roboflow and OpenCV to implement AI in schools and educational institutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.linkedin.com/in/ujwal-tr-407b95317/",
  },
  {
    name: "AuraActive",
    description:
      "Made a fitness website for a TYE team...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "WIX",
        color: "green-text-gradient",
      },
      {
        name: "SCS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://bit.ly/aura-active",
  },
  {
    name: "Ornithopter",
    description:
      "A comprehensive project to show the mechanism of flight of birds.",
    tags: [
      {
        name: "mechanics",
        color: "blue-text-gradient",
      },
      {
        name: "aerodynamics",
        color: "green-text-gradient",
      },
      {
        name: "flight",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.linkedin.com/in/ujwal-tr-407b95317/",
  },
];

export { services, technologies, experiences, testimonials, projects };
