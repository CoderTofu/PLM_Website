"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function HeroSection() {
  const pathName = usePathname();

  const pageContent = {
    "/about": {
      title: "University Profile",
      text: "Established in 1965, the Pamantasan ng Lungsod ng Maynila is the first and only chartered university funded by a city government in the Philippines.",
    },
    "/academics": {
      title: "Nurturing Leaders for the Nation's Capital",
      text: "Rooted in history, committed to the future. PLM provides top-tier education to the brightest minds of Manila through excellence and integrity.",
    },
    "/student": {
      title: "Vibrant Student Life at PLM",
      text: "Fostering excellence, leadership, and community beyond the classroom walls of the City University.",
    },
  };

  const { title, text } = pageContent[pathName] ?? {
    title: "Empowering the Citizens of Manila through Education",
    text: "Since 1965, the Pamantasan ng Lungsod ng Maynila has stood as a beacon of academic excellence and social responsibility in the heart of Intramuros.",
  };

  return (
    // Container
    <div className="w-full h-128.25 relative">
      <Image
        src="/hero-sections.png"
        fill
        priority
        alt="HeroSection"
        className="object-cover object-center"
      />
      {/* Content Overlay*/}
      <div className="z-10 absolute w-full h-full flex flex-col justify-center space-x-4">
        {/* Content Container*/}
        <div className="max-w-5xl lg:w-5xl mx-auto">
          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-white text-4xl font-bold">{title}</h1>
            <p className="text-[#D5E3FF] text-lg">{text}</p>
            <div className="space-x-4 mt-8">
              <Link href="/" className="bg-[#FDCE61] px-3 py-2 font-bold">
                Explore Programs
              </Link>
              <Link
                href="/"
                className="border-white border px-3 py-2 font-bold text-white"
              >
                Watch Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
