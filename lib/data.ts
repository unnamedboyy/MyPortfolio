import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import avasara from "@/public/avasara.png";
import reusemart from "@/public/reusemart.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
      title: "Asistant Lecturer of Website-based Information System Batch 2024/2025",
      location: "Universitas Atma Jaya Yogyakarta",
      description:
        "Worked as a Teaching Assistant for Website-based Information Systems, actively supporting students in both conceptual understanding and hands-on development. Provided clear guidance during practical sessions, assisted in developing web-based applications, and supported students in completing assignments and projects related to web development.",
      icon: React.createElement(LuGraduationCap),
      date: "Jan 2025 - Jun 2025",
    },
    {
      title: "Student Staff | Informatics Department",
      location: "Universitas Atma Jaya Yogyakarta",
      description:
        "Worked as a Student Staff of the Informatics Department, responsible for promoting the department through various digital platforms including Instagram, TikTok, Website, and YouTube. Managed content strategy and served as a video editor, contributing to the creation and publication of engaging media to reach a broader audience.",
      icon: React.createElement(LuGraduationCap),
      date: "Sep 2024 - Mar 2025",
    },
    {
    title: "Asistant Lecturer of Object-oriented Programming Batch 2024/2025",
    location: "Universitas Atma Jaya Yogyakarta",
    description:
      "Worked as a Teaching Assistant for Object-Oriented Programming at UAJY, actively supporting the teaching and learning process. Responsible for providing clear guidance during practical sessions and assisting students in understanding core OOP concepts. Also helped students complete programming assignments and projects, ensuring they could apply theoretical knowledge to real coding tasks.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2024 - Dec 2024",
  },
  {
    title: "Head of Communication and Information Department",
    location: "Leaders Community - UAJY",
    description:
      "Served as Head of the Communication and Information Department, leading a team of 9 members to implement effective media and branding strategies aligned with organizational goals. Managed social media content and scheduling, successfully boosting Instagram engagement during orientation week. Collaborated with cross-department teams to promote events and broaden audience reach. Also directed the production of the organization’s official profile video, overseeing a 5-person creative team from concept to final cut.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2023 - Sep 2024",
  },
  {
    title: "Member of Publication and Documentation division | IFEST #12 UAJY",
    location: "HIMAFORKA - UAJY",
    description:
      "Contributed to Informatics Festival (I-Fest) #12 organized by HIMAFORKA UAJY, which included competitions and a national seminar on innovation and technology. Designed the event logo and Instagram feed visuals for the Web Development Competition. Also responsible for documenting multiple sub-events and producing the official after movie video, showcasing my skills in visual design, videography, and event media production.",
    icon: React.createElement(FaReact),
    date: "Dec 2023 - Jun 2024",
  },
  {
    title: "Master of Ceremony | Creathink Journalism Workshop #2",
    location: "KSDG UAJY X PSYMAG USD",
    description:
      "Took part in organizing the Creathink Journalism Workshop #2, a collaborative event between Psymag Sanata Dharma University and KSDG UAJY, focused on Social Media Strategy. Contributed to the event concept development and served as the Master of Ceremony, enhancing my public speaking and event coordination skills..",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - May 2024",
  },
  {
    title: "Member of publication and Documentation division | PKKMB & UKM-K FAIR UAJY 2023",
    location: "Universitas Atma Jaya Yogyakarta",
    description:
      "Served as a member of the Publication and Documentation Division for PKKMB & UKM-K FAIR UAJY 2023. Created the teaser video and campus introduction video, designed Instagram stories and feed posts, and handled full event documentation. This role sharpened my creative production skills and strengthened my ability to manage visual content for large-scale university events.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - Sep 2023",
  },
  {
    title: "Member of Design, Decoration, and Documentation | Sparkfest #11",
    location: "Sparkfest - UAJY",
    description:
      "Contributed to Sparkfest #11, the biggest annual event by SEMA FTI UAJY, through various creative and media roles. Responsible for producing the teaser video, after movie, and event documentation, as well as designing the poster for Refresh, one of Sparkfest's sub-events. This experience enhanced my skills in videography, design, and event media production.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Avasara",
    description:
      "Avasara is an online thrift store aimed at promoting sustainable living and awareness of fashion waste in Indonesia. I worked as both UI/UX Designer and Frontend Developer, collaborating with two teammates to build the site using React in just three days.",
    tags: ["Laravel", "React", "Tailwind", "Figma"],
    imageUrl: avasara,
  },
  {
    title: "Reusemart",
    description:
      "ReUseMart is a platform that promotes a reuse culture by connecting donors, sellers, and buyers of secondhand goods. I worked as both UI/UX Designer and Fullstack Developer, collaborating with two teammates to build the site using Laravel fullstack.",
    tags: ["Laravel", "MySQL", "Tailwind", "Figma"],
    imageUrl: reusemart,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Laravel",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MySQL",
  "PostgreSQL",
  "Python",
  "C",
  "C++",
  "Premiere Pro",
  "Photoshop",
  "Figma",
  "Canva"
] as const;
