"use client";
import { useState } from "react";

const stats = [
  {
    value: "98%",
    label: "Licensure Passing Rate",
    description: "Consistently producing board-certified professionals across all major disciplines.",
    image: null,
  },
  {
    value: null,
    label: "Research-Driven Faculty",
    description: "Academic leaders actively shaping policy and innovation through global publication.",
    image: "/academics/research.png",
  },
  {
    value: "12+",
    label: "International Partners",
    description: "Active exchange programs with prestigious universities across Asia and Europe.",
    image: null,
  },
];

const programs = [
  {
    floor: "2ND FLOOR · GUSALING LACSON (GL)",
    name: "College of Accountancy (CA)",
    description:
      "The College of Accountancy at Pamantasan ng Lungsod ng Maynila is dedicated to becoming a leader in accountancy education through its commitment to academic excellence, innovation, and ethical leadership.",
  },
  {
    floor: "2ND FLOOR · GUSALING CORAZON AQUINO (GCA)",
    name: "College of Architecture and Sustainable Built Environment (CASBE)",
    description:
      "The College of Architecture and Sustainable Built Environment is an academic unit of PLM that provides quality education for the next generation of architecture and construction professionals to become leaders in the sustainable design, construction, and management of the built environment.",
  },
  {
    floor: "2ND FLOOR · GUSALING LACSON (GL)",
    name: "College of Business Administration (CBA)",
    description:
      "The College of Business Administration (CBA) offers courses that focus on administering businesses and their general operations. The program involves decision making skills to strategize business operations.",
  },
  {
    floor: "2ND FLOOR · GUSALING LACSON (GL)",
    name: "College of Education (CED)",
    description:
      "The College of Education was formed out of reorganization and merging of colleges that were approved by the Board of Regents on June 4, 2015. It aspires to be one of the country's centers of excellence in the field of Education.",
  },
  {
    floor: "3RD FLOOR · GUSALING VILLEGAS (GV)",
    name: "College of Engineering (CE)",
    description:
      "Formerly the College of Engineering and Technology, the College of Engineering is one of the Colleges of the University effective 25 January 2024 after the Management Reorganization of the Pamantasan ng Lungsod ng Maynila.",
  },
  {
    floor: "2ND FLOOR · GUSALING LACSON (GL)",
    name: "College of Humanities, Arts, and Social Sciences (CHASS)",
    description:
      "The College of Humanities, Arts, and Social Sciences (CHASS), created in 2015 through the PLM Board of Regents Resolution No. 3816, envisions being the premier academic unit of the Pamantasan ng Lungsod ng Maynila at the forefront of cultivating the culture of scholastic excellence, integrity, and social responsibility.",
  },
  {
    floor: "1ST FLOOR · GUSALING ATIENZA (GA)",
    name: "College of Information Systems and Technology Management (CISTM)",
    description:
      "The College of Information Systems and Technology Management is offering the following programs: Bachelor of Science in Computer Science, Bachelor of Science in Information Technology and Master in Information Technology. ",
  },
  {
    floor: "2ND FLOOR · GUSALING KATIPUNAN (GK)",
    name: "College of Law (CL)",
    description:
      "The College of Law formally opened its door in the School Year 1989-1990. Board Resolution No. 1329 dated 18 April 1989 established the College of Law and approved a curriculum for the first year level. The creation of the College of Law was a testament to the social justice orientation of PLM. ",
  },
  {
    floor: "2ND FLOOR · GUSALING BAGATSING (GB)",
    name: "College of Medicine (CM)",
    description:
      "Renowned for developing competent and compassionate medical practitioners, the College addresses the healthcare needs of Manila, the nation, and the world. Over three decades, it has gained respect as a premier medical school.",
  },
  {
    floor: "3RD FLOOR · GUSALING KATIPUNAN (GK)",
    name: "College of Nursing (CN)",
    description:
      "The College of Nursing at PLM was established in 1969, in response to a study highlighting the need for community-oriented healthcare in Manila. Since its inception, the college has admitted numerous nursing scholars and has consistently produced top performers in the nurse licensure examinations.",
  },
  {
    floor: "1ST FLOOR · GUSALING CORAZON AQUINO (GCA)",
    name: "College of Physical Therapy (CPT)",
    description:
      "At PLM College of Physical Therapy, we are proud of the outstanding quality of our faculty members who have extensive clinical experience and educational background in their specialist area. They bring insights from theory, practice, and research to help shape the careers of all our students.",
  },
  {
    floor: "1ST FLOOR · GUSALING VILLEGAS (GV)",
    name: "College of Public Administration (CPA)",
    description:
      "The College of Public Administration is committed to its fundamental philosophy to uphold the values of democracy and diversity congruent with the Filipino culture and tradition. Our primordial role as a center of higher learning is not only to provide high quality education but also to be a leading institution in the political, social and cultural realms.",
  },
  {
    floor: "3RD FLOOR · GUSALING LACSON (GL)",
    name: "College of Science (CS)",
    description:
      "The College of Science is a diverse and dynamic academic community advancing scientific knowledge and education through its four departments: Biology, Mathematics, Physical Science, and Psychology. These departments foster collaboration, innovation, and academic excellence, promoting interdisciplinary research to address today’s complex challenges.",
  },
];

export default function AcademicPrograms() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Stats Section */}
      <div className="w-full mx-auto px-6 py-16">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-10 py-4">
              {stat.value ? (
                <span className="text-5xl font-bold text-[#1a2e4a] tracking-tight mb-2">
                  {stat.value}
                </span>
              ) : (
                <div className="mb-2.5">{stat.image && <img src={stat.image} alt={stat.label} className="w-12 h-12 object-contain" />}</div>
              )}
              <h3 className="text-sm font-bold text-[#1a2e4a] mb-2 tracking-wide">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[250px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Academic Programs Section */}
      <div className="w-full mx-auto px-20 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#1a2e4a] mb-3">
            Our Academic Programs
          </h2>
          <div className="w-10 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-3 gap-5">
          {programs.map((program, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="mx-5 my-2 bg-[#F3F4F5] border border-gray-200 rounded-lg p-6 flex flex-col gap-3 transition-shadow duration-200 cursor-pointer"
              style={{
                boxShadow: hovered === i
                  ? "0 4px 24px 0 rgba(26,46,74,0.10)"
                  : "0 1px 4px 0 rgba(0,0,0,0.04)",
              }}
            >
              <span className="text-[10px] font-semibold tracking-widest text-[#c9a84c] uppercase">
                {program.floor}
              </span>
              <h3 className="text-base font-bold text-[#1a2e4a] leading-snug">
                {program.name}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">
                {program.description}
              </p>
              {/* <button className="flex items-center gap-1.5 text-xs font-semibold text-[#1a2e4a] mt-2 group w-fit">
                View Programs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}