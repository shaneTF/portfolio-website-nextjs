import { AiOutlineApi } from "react-icons/ai";
import { BsTypescript } from "react-icons/bs";
import { DiScrum } from "react-icons/di";
import { FaFigma, FaGitAlt, FaGithub, FaVial, FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { LuBrickWall } from "react-icons/lu";
import { MdSync } from "react-icons/md";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiPythonanywhere } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const webDevSymbols = [
  "<",
  ">",
  "</>",
  "/>",
  "{",
  "}",
  "()",
  "[]",
  "=>",
  "::",
  "/* */",
  "</div>",
  "<main>",
  "<header>",
  "</span>",
  "</section>",
  "</article>",
  "const",
  "let",
  "function",
  "return",
  "async",
  "await",
  "import",
  "export",
  "</html>",
  "<body>",
  "<script>",
  "TS",
  "JS",
  "CSS",
  "HTML",
  "</Next>",
  "<React/>",
];

export const briefBackground =
  "I am a Software Engineer with 5+ years of experience designing and developing scalable web applications using Javascript, Typescript, React, Vue.js, Next.js and REST APIs. Proven track record of improving business efficiency, delivering user-focused solutions, and collaborating in Agile/Scrum environments. Strong front-end focus with full-stack experience supporting enterprise applications.";

export const workExperience = [
  {
    title: "Freelance Web Developer",
    employer: "Self-Employed",
    location: { city: "Morgantown", stateCode: "IN" },
    timeFrame: {
      startMonth: "September",
      startYear: "2023",
      endMonth: "Present",
      endYear: "Present",
    },
    description:
      "During this career break, I have focused on expanding my technical skills through personal projects and professional development. I developed a client-facing website for a custom costume and needlework business using React, TypeScript, and Tailwind CSS, built a Discord bot that integrates with the Supercell REST API to retrieve Clash Royale statistics, and am currently developing a web-based dice rolling application for Dungeons & Dragons. I am also preparing for Power BI certification and beginning a master's degree program.",
  },
  {
    title: "Web Support Specialist III",
    employer: "Cherokee Nation System Solutions",
    location: { city: "Indianapolis", stateCode: "IN" },
    timeFrame: {
      startMonth: "March",
      startYear: "2024",
      endMonth: "September",
      endYear: "2024",
    },
    description:
      "Contributed to the development of a web application for managing USGS equipment, translating Figma designs into accessible, standards-compliant interfaces using JavaScript, TypeScript, and modern front-end frameworks. Served as one of three front-end engineers, building scalable UI components while also contributing features to a Vue.js financial management application. Consistently managed priorities independently, delivering high-quality work on schedule as the equipment management application was showcased at a national conference.",
  },
  {
    title: "Software Engineer Consultant",
    employer: "Sogeti",
    location: { city: "Indianapolis", stateCode: "IN" },
    timeFrame: {
      startMonth: "March",
      startyear: "2021",
      endMonth: "March",
      endYear: "2023",
    },
    description:
      "Developed and maintained underwriting and internal tooling applications using Angular, React, Vue.js, and RESTful APIs in an Agile Scrum environment. Built and enhanced a Forms Management Micro UI and supporting backend services, streamlining insurance application workflows and reducing underwriting tasks by 1–3 hours. Implemented over 250 insurance form additions and UI enhancements to improve document generation, accuracy, and user efficiency, while contributing to unit testing efforts that increased application reliability and reduced defects. During time between client engagements, earned the Splunk Core Certified Power User certification through independent study.",
  },
  {
    title: "Senior Software Associate",
    employer: "Infosys",
    location: { city: "Indianapolis", stateCode: "IN" },
    timeFrame: {
      startMonth: "July",
      startYear: "2018",
      endMonth: "September",
      endYear: "2020",
    },
    description:
      "Developed and optimized Python applications to collect, validate, and organize data from smart furnace filter systems. Designed and implemented a secondary client-facing demonstration database, enabling stakeholders to interact with and evaluate system data in a user-friendly environment.",
  },
];

export const skills = {
  languages: [
    { name: "Javascript", icon: IoLogoJavascript },
    { name: "Typescript", icon: BsTypescript },
    { name: "Python", icon: SiPythonanywhere },
  ],
  frameworks: [
    { name: "React.js", icon: IoLogoReact },
    { name: "Vue.js", icon: FaVuejs },
    { name: "Next.js", icon: RiNextjsLine },
  ],
  libraries: [
    { name: "MaterialUI", icon: SiMui },
    { name: "TailwindCSS", icon: RiTailwindCssFill },
  ],
  apis: [{ name: "RESTful API's", icon: AiOutlineApi }],
  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "Github", icon: FaGithub },
    { name: "Figma", icon: FaFigma },
    { name: "VScode", icon: VscVscode },
  ],

  practices: [
    { name: "Agile/Scrum", icon: DiScrum },
    { name: "Unit Testing", icon: FaVial },
    { name: "CI/CD", icon: MdSync },
    { name: "Component-Based Architecture", icon: LuBrickWall },
  ],
};

export const education = [
  {
    school: "Ball State University",
    location: { stateCode: "IN", city: "Muncie" },
    graduated: true,
    degree: "Bachelor of Science",
    study: "Computer Science",
    date: { startYear: "2014", endYear: "2018" },
  },
  {
    school: "Indiana University",
    location: { stateCode: "IN", city: "Bloomington" },
    graduated: false,
    degree: "Master of Science",
    study: "Data Science",
    date: { startYear: "2026", endYear: "2030" },
  },
];

export const hobbies = [
  {
    games: [
      { name: "World of Warcraft", abrev: "WoW" },
      { name: "Call of Duty Zombies", abrev: "COD Zombies" },
    ],
  },
  { social: [{ name: "Dungeons and Dragons", abrev: "DnD" }] },
  { graphicDesign: [{ name: "Clip Studio Paint", abrev: "CSP" }] },
];
