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
          I am an <span className="font-medium">Informatics graduate</span> from <span className="font-medium">Universitas Atma Jaya Yogyakarta</span> with a strong background in <span className="font-medium">software development</span>, <span className="font-medium">web engineering</span>, and <span className="font-medium">data automation</span>. I thrive on building end-to-end digital solutions—from developing scalable web applications using <span className="font-medium">React, Next.js, and Node.js</span> to architecting automated workflows and AI-driven data systems with <span className="font-medium">Python, n8n, and LLM APIs</span>.
        </p>

        <p className="mb-3">
          My hands-on experience includes an IT internship at <span className="font-medium">PT Bank Central Asia Tbk (BCA)</span>, where I built automation scripts and data reconciliation systems, as well as serving as an <span className="font-medium">Assistant Lecturer</span> for Object-Oriented Programming and Web-Based Information Systems.
        </p>

        <p>
          Beyond development, I have a strong creative side with extensive experience in <span className="font-medium">videography, visual design, and media strategy</span> from various leadership roles in student organizations. I am actively seeking <span className="font-medium">full-time opportunities or collaborative tech projects</span> where I can contribute and continue to grow.
        </p>
    </motion.section>
  );
}
