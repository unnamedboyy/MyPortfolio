"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-15"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I'm an Informatics student at <span className="font-medium">Universitas Atma Jaya Yogyakarta</span> with a strong interest in <span className="font-medium">web development</span> and <span className="font-medium">data analytics</span>. I enjoy turning ideas into real digital solutions, especially when I get to solve problems through code and create meaningful user experiences. Over the past few semesters, I've built several web-based projects while also improving my skills in frontend and backend development.
        </p>

        <p>
          Beyond programming, I’m also passionate about <span className="font-medium">videography</span> and have experience in <span className="font-medium">student organizations</span> that shaped my <span className="font-medium">leadership and teamwork</span> skills. I love learning new tools and exploring creative ways to communicate ideas—whether through code or visuals. Currently, I’m looking for opportunities to grow through <span className="font-medium">internships or collaborative projects</span> in tech.
        </p>
    </motion.section>
  );
}
