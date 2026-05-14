"use client";
import { useState, useRef } from "react";

// --- Data ---
const orgs = [
  {
    name: "PLM College of Information Systems and Technology Management - Student Council",
    description:
      "The PLM College of Information Systems and Technology Management – Student Council is the duly authorized and recognized student governing body of the departments and organizations under CISTM.",
  },
  {
    name: "College of Architecture and Sustainable Built Environments Student Council",
    description:
      "Highest governing body among the CASBE Students. autonomous and democratic Student Council that aims to represent and build the camaraderie of the CASBE student body.",
  },
  {
    name: "College of Education Student Council",
    description:
      "We are the PLM - College of Education Student Council (PLM-CEDSC), the duly constituted student council of the Pamantasan ng Lungsod ng Maynila - College of Education.",
  },
  {
    name: "College of Engineering Student Council",
    description:
      "The PLM College of Engineering - Student Council (CE-SC) is the official student governing body dedicated to representing and serving the PLM engineering student community.",
  },
  {
    name: "College of Humanities, Arts and Social Sciences Student Council",
    description:
      "The Pamantasan ng Lungsod ng Maynila (PLM) College of Humanities, Arts and Social Sciences – Student Council (CHASS-SC) is the duly constituted central student council of the college.",
  },
  {
    name: "College of Medicine Student Council",
    description:
      "PLM-CMSC is a student organization that is dedicated to leadership, service, and camaraderie, ensuring that all medical students have a vibrant and inclusive experience.",
  },
];

const projects = [
  {
    title: "Placeholder 1",
    college: "College of Information Systems and Technology Management",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Placeholder 2",
    college: "College of Information Systems and Technology Management",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Placeholder 3",
    college: "College of Information Systems and Technology Management",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

// --- Video Player Card ---
function VideoCard({ project, index }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); } else { videoRef.current.play(); }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(isNaN(pct) ? 0 : pct);
  };

  const handleEnded = () => setPlaying(false);

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    videoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * videoRef.current.duration;
  };

  const showButton = hovered || playing;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Video — full width, tall */}
      <div
        className="relative w-full bg-[#0d1b2a]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <video
          ref={videoRef}
          src={project.videoSrc}
          poster={project.poster}
          className="w-full h-full object-contain opacity-90"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: showButton ? 1 : 0, transition: "opacity 0.2s ease" }}
        >
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/35 transition-all duration-150 shadow-lg">
            {playing ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 cursor-pointer" onClick={handleSeek}>
          <div className="h-full bg-[#c9a84c] transition-all duration-100" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Info — below video */}
      <div className="px-6 py-5 flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-semibold text-[#1a2e4a] leading-snug">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-gray-500 font-medium">{project.college}</span>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function StudentSections() {
  return (
    <div className="bg-white font-sans">
      {/* ── Student Councils & Organizations ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl font-semibold text-[#1a2e4a] mb-3">
            Student Councils &amp; Organizations
          </h2>
          <div className="w-10 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        {/* Top row: Supreme Student Council (large) + Academic Societies */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          {/* Supreme Student Council */}
          <div className="bg-[#1a2e4a] rounded-xl p-7 flex flex-col justify-between min-h-[200px]">
            <div className="mt-6 w-full">
              <div className="w-full flex justify-between mb-3 align-bottom">
                <h3
                  className="text-2xl font-semibold text-[#c9a84c] mb-5">
                  Supreme Student Council
                </h3>
                <img src="/student/ssc_icon.png" className="w-7 h-7 brightness-160" />
              </div>
              <p className="text-sm text-blue-200 leading-relaxed mb-5">
                The highest student governing body of PLM, dedicated to representing the student
                voice and spearheading university-wide initiatives that promote student welfare and
                social awareness.
              </p>
            </div>
          </div>

          {/* Academic Societies */}
          <div className="border-2 border-gray-200 rounded-xl p-7 flex flex-col justify-between">
            <div className="mt-4">
              <h3
                className="text-lg font-semibold text-[#1a2e4a] mb-2">
                Academic Organizations
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Join over 45 academic organizations tailored to your specific field of study.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Computer Science Society", "Electronics Engineering Student Society", "Institute of Computer Engineers of the Philippines Student Edition"
                  , "Junior Philippine Institute of Accountant", "ASHRAE"
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: 3 org cards (no icons) */}
        <div className="grid grid-cols-3 gap-5">
          {orgs.map((org, i) => (
            <div
              key={i}
              className="border-2 border-gray-200 rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
            >
              <h3
                className="text-base font-semibold text-[#1a2e4a]">
                {org.name}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">{org.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Student Projects Showcase ── */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* Header row */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2
                className="text-2xl font-semibold text-[#1a2e4a] mb-1">
                Student Projects Showcase
              </h2>
              <p className="text-sm text-gray-500">
                Highlighting the creativity and innovation of our student body.
              </p>
            </div>
          </div>

          {/* Vertical video list */}
          <div className="flex flex-col gap-5">
            {projects.map((project, i) => (
              <VideoCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}