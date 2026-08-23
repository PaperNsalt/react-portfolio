import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import{
  Film,
Image,
LayoutTemplate,
PanelsTopLeft,
Shirt
} from "lucide-react";

import {
  HtmlIcon,
  CssIcon,
  PhpIcon,
  JavaScriptIcon,
  FlutterIcon,
  DartIcon,
  TailwindIcon,
  ReactIcon,
  PhotoshopIcon,
  IllustratorIcon,
  InDesignIcon,
  JavaIcon,
  LaravelIcon,
} from "./IconComponent";

import Photoshop from '../assets/ps.svg'
import Affinity from "../assets/Affinity.svg";
import Illustrator from "../assets/Illustrator.svg";
import InDesign from "../assets/InDesign.svg";
import Canva from '../assets/canva-icon.svg'

const DatabaseIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    className={props.className || "h-3.5 w-3.5 shrink-0 text-[#f2552e]"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 0c-4.418 0-8 1.119-8 2.5v2c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-2c0-1.381-3.582-2.5-8-2.5z" />
    <path d="M8 8.5c-4.418 0-8-1.119-8-2.5v3c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-3c0 1.381-3.582 2.5-8 2.5z" />
    <path d="M8 13c-4.418 0-8-1.119-8-2.5v3c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-3c0 1.381-3.582 2.5-8 2.5z" />
  </svg>
);

const primaryDev = [
  { name: "HTML", IconComponent: HtmlIcon },
  { name: "CSS", IconComponent: CssIcon },
  { name: "React", IconComponent: ReactIcon },
  { name: "Tailwind CSS", IconComponent: TailwindIcon },
  { name: "Laravel", IconComponent: LaravelIcon },
  { name: "Flutter", IconComponent: FlutterIcon },
  { name: "Dart", IconComponent: DartIcon },
  { name: "PHP", IconComponent: PhpIcon },
  { name: "JavaScript", IconComponent: JavaScriptIcon },
];

const primaryDesign = [
  { name: "Photoshop", icon: Photoshop },
  { name: "Illustrator", icon: Illustrator },
  { name: "InDesign", icon: InDesign },
  { name: "Affinity", icon: Affinity },
  { name: "Canva", icon: Canva },

];

const subCategoriesDev = [
  {
    title: "FRONTEND",
    items: [
      {
        name: "Framer Motion",
        icon: "https://cdn.simpleicons.org/framer/f2552e",
      },
      {
        name: "Shadcn / UI",
        icon: "https://cdn.simpleicons.org/shadcnui/f2552e",
      },
      { name: "React Bits", IconComponent: ReactIcon },
    ],
  },
  {
    title: "DATABASES",
    items: [
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/f2552e" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/DD2C00" },
    ],
  },
  {
    title: "PROGRAMMING LANGUAGES",
    items: [
      { name: "JavaScript", IconComponent: JavaScriptIcon },
      { name: "SQL", IconComponent: DatabaseIcon },
      { name: "Java", IconComponent: JavaIcon  },
      { name: "Dart", IconComponent: DartIcon },
      { name: "PHP", IconComponent: PhpIcon },
    ],
  },
  {
    title: "TOOLS & TECHNOLOGIES",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/f2552e" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/f2552e" },
      { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/f2552e" },
    ],
  },
];

const subCategoriesDesign = [
  {
    title: "SPECIALIZATION",
    items: [
      { name: "Posters", IconComponent: Image },
      { name: "Layout Design", IconComponent: LayoutTemplate },
      { name: "Apparel Design", IconComponent: Shirt },
      { name: "UI/UX Design", IconComponent: PanelsTopLeft },
      { name: "Video Editing", IconComponent: Film },
    ],
  },
];

function RenderSkillIcon({ item }) {
  if (item.IconComponent) {
    const Component = item.IconComponent;
    return <Component className="h-5 w-5 shrink-0 text-[#f2552e]" />;
  }

  if (item.icon) {
    return (
      <img
        src={item.icon}
        alt={item.name}
        className="h-5 w-5 shrink-0 object-contain"
      />
    );
  }

  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f2552e]/10 text-[9px] font-black text-[#f2552e]">
      {item.name.charAt(0)}
    </span>
  );
}

export default function ToolkitCard() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="relative w-full rounded-3xl border border-black/10 bg-[#f7f5f1]/70 p-6 sm:p-10 shadow-sm backdrop-blur-sm transition-all">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
        
        {/* DEVELOPER */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="mb-4 text-2xl font-black uppercase tracking-wider text-[#f2552e]">
              Developer
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {primaryDev.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2.5 rounded-full border border-black/5 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black/80 shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:border-[#f2552e]/40 hover:shadow-md"
                >
                  <RenderSkillIcon item={skill} className/>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden space-y-6 pt-2"
              >
                {subCategoriesDev.map((group) => (
                  <div key={group.title}>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-black/45">
                      {group.title}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black/75 shadow-[0_2px_5px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5 hover:border-[#f2552e]/30 hover:shadow-sm"
                        >
                          <RenderSkillIcon item={item} />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESIGNER */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="mb-4 text-2xl font-black uppercase tracking-wider text-[#f2552e]">
              Designer
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {primaryDesign.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2.5 rounded-full border border-black/5 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black/80 shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:border-[#f2552e]/40 hover:shadow-md"
                >
                  <RenderSkillIcon item={skill} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden space-y-6 pt-2"
              >
                {subCategoriesDesign.map((group) => (
                  <div key={group.title}>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-black/45">
                      {group.title}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black/75 shadow-[0_2px_5px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5 hover:border-[#f2552e]/30 hover:shadow-sm"
                        >
                          <RenderSkillIcon item={item} />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* TOGGLE BUTTON */}
      <div className="mt-8 flex justify-end border-t border-black/10 pt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/50 transition-colors hover:text-[#f2552e]"
        >
          <span>{showAll ? "View Less" : "View All"}</span>
          <motion.svg
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="h-4 w-4 text-[#f2552e]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>
      </div>
    </div>
  );
}