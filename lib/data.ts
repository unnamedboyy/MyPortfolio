import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import geargenius from "@/public/geargenius.png";

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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "President of Dies Natalis HIMSI & SI UAJY",
    location: "HIMSI - UAJY",
    description:
      "Saya sebagai ketua acara Dies Natalis HIMSI dan SI, bertugas mempersiapkan kegiatan Dies Natalis. Acara diikuti oleh sekitar 100 peserta, dari angkatan 2021 hingga 2023.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Multimedia and Documentation Division of UNISEC",
    location: "UNISEC - UAJY",
    description:
      "Saya adalah anggota Divisi Multimedia dan Dokumentasi, yang bertugas membuat segala kebutuhan sosial media UNISEC, yakni video promosi dan aftermovie event Victus Campus Heroes.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Event Division Coordinator of T-Arts",
    location: "HIMSI - UAJY",
    description:
      "I worked as a event division coordinator. I was responsible for organizing and coordinating events. I was also responsible for managing the event team.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2023",
  },
  {
    title: "Event Division Coordinator IWEEK",
    location: "HIMSI - UAJY",
    description:
      "I worked as a event division coordinator. I was responsible for organizing and coordinating events. I was also responsible for managing the event team.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023",
  },
  {
    title: "Member of HIMSI UAJY",
    location: "HIMSI - UAJY",
    description:
      "I was a member of HIMSI UAJY. I was responsible for organizing and coordinating events. I was also responsible for managing the event team.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Gear Genius POS",
    description:
      "Me and my team work together to develop a point-of-sale system. It has features like inventory management, sales, and customer management.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "TypeScript"],
    imageUrl: geargenius,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Premiere Pro",
  "Photoshop",
  "Figma"
] as const;
