"use client";

import Image from "next/image";
import { useState } from "react";

const tabsData = [
  {
    id: "curriculum",
    label: "Curriculum",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    ),
    contentIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    ),
    bgColor: "bg-[#F5C26B]",
    title: "Curriculum",
    content: [
      "CBSE-based academic structure",
      "Focus on core subjects and conceptual clarity",
      "Age-appropriate learning materials",
      "Regular curriculum updates aligned with CBSE guidelines",
      "Emphasis on building strong fundamentals"
    ],
    image: "/images/Image (1).png"
  },
  {
    id: "teaching",
    label: "Teaching Method",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    ),
    contentIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    ),
    bgColor: "bg-[#F3A29E]",
    title: "Teaching Method",
    content: [
      "Classroom teaching with guided practice",
      "Regular revision and doubt clearing sessions",
      "Support for students who need extra help",
      "Interactive learning activities",
      "Focus on practical understanding over rote learning"
    ],
    image: "/images/Image (2).png"
  },
  {
    id: "assessment",
    label: "Assessment",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
    contentIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
    bgColor: "bg-[#6495DE]",
    title: "Assessment and Feedback",
    content: [
      "Periodic evaluations throughout the year",
      "Progress shared with parents regularly",
      "Individual attention for improvement areas",
      "Focus on understanding, not just memorization",
      "Constructive feedback for continuous growth"
    ],
    image: "/images/Image (3).png"
  }
];

export default function AcademicApproach() {
  const [activeTabId, setActiveTabId] = useState("curriculum");
  const activeTab = tabsData.find(t => t.id === activeTabId)!;

  return (
    <>
      {/* About Vedaant Vidhyakulum Section */}
      <section className="py-20 md:py-32 bg-[#FCFBF8]" id="about-school">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 relative">
          <div className="relative flex flex-col lg:flex-row items-center">
            {/* Image */}
            <div className="w-full lg:w-[82%] relative">
              <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-10">
                <Image
                  src="/images/Light - Item (alternative).png"
                  alt="Vedaant Vidhyakulum Building"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative lines */}
              <div className="absolute -bottom-10 -left-10 hidden lg:block z-0">
                <Image
                  src="/images/lines.svg"
                  alt=""
                  width={90}
                  height={90}
                  className="opacity-80 rotate-[15deg]"
                />
              </div>
            </div>

            {/* Overlapping Card */}
            <div className="w-[92%] lg:w-[460px] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-[-60px] lg:mt-0 relative">
               <div className="absolute -top-[22px] -right-[22px] z-20 hidden md:block">
                 <Image
                   src="/images/Summertime Sadness.svg"
                   alt=""
                   width={65}
                   height={65}
                 />
               </div>
               
               <div className="bg-white rounded-[24px] p-8 md:p-[45px] shadow-[0px_15px_60px_rgba(0,0,0,0.06)] relative z-10 border border-[#F2EFE8]/50">
                 <h2 className="text-[30px] lg:text-[34px] font-bold text-[#1E1B18] leading-[1.15] mb-7 tracking-tight">
                   About Vedaant<br />Vidhyakulum
                 </h2>
                 
                 <div className="space-y-6 text-[14px] lg:text-[14.5px] text-[#4A4343] font-medium leading-[1.65]">
                   <p>
                     Choosing a school is a long-term decision. It requires trust, clarity, and confidence.
                   </p>
                   <p>
                     Vedaant Vidhyakulum was founded with the aim of providing quality education rooted in
                     strong values. We believe that children learn best in an environment that is calm, structured,
                     and supportive.
                   </p>
                   <p>
                     Our focus is not on competition, but on steady progress. We guide students to develop discipline,
                     respect, and responsibility alongside academic skills.
                   </p>
                 </div>
                 
                 <button 
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                   className="mt-9 bg-[#7C241C] text-white rounded-full px-8 py-[15px] font-semibold text-[15px] w-full hover:bg-[#7C241C]/90 transition-colors shadow-sm"
                 >
                   Apply Now
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Academic Approach Section */}
      <section className="py-16 md:py-24 bg-[#FCFBF8] relative overflow-hidden" id="academics">
        {/* Decorative Background Swoosh using simple SVG */}
        <div className="absolute top-1/2 left-0 w-full h-[400px] -translate-y-1/2 z-0 opacity-40 pointer-events-none hidden md:block">
          <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            <path d="M-100 200 C300 200, 400 350, 720 200 C1040 50, 1100 200, 1540 100" stroke="#EFEDE5" strokeWidth="40" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="max-w-[1100px] mx-auto px-5 md:px-10 relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <div className="relative inline-block mb-5">
              <div className="absolute inset-0 bg-[#FAEFAC] rounded-lg transform -skew-x-[12deg] shadow-sm z-0" style={{top: '5%', bottom: '5%', left: '-2%', right: '-2%'}}></div>
              <h2 className="relative z-10 text-3xl md:text-[42px] font-extrabold text-[#1E1B18] px-4 py-2 tracking-tight">
                Our Academic Approach
              </h2>
            </div>
            
            <p className="text-[#3A3333] text-[15px] md:text-base max-w-[700px] mx-auto font-medium leading-[1.6]">
              Learning should be clear, consistent, and age-appropriate. We follow a CBSE-aligned
              curriculum and focus on building strong fundamentals across subjects.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-10 md:mb-12">
            <div className="flex bg-white rounded-full p-2 shadow-sm border border-[#F2EFE8] flex-wrap justify-center gap-1">
              {tabsData.map(tab => {
                const isActive = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`flex items-center gap-2.5 px-6 md:px-8 py-3 rounded-full font-semibold text-[14.5px] transition-colors ${
                      isActive 
                        ? "bg-[#7C241C] text-white" 
                        : "bg-transparent text-[#6B6B6B] hover:bg-[#F9F9F9]"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Card */}
          <div className={`${activeTab.bgColor} rounded-[24px] p-8 md:p-12 transition-colors duration-300 relative border border-[#00000008] shadow-md`}>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              {/* Left Text Content */}
              <div className="flex-1 w-full">
                <div className="w-[48px] h-[48px] bg-white rounded-[14px] flex items-center justify-center mb-6 text-[#2A2323] shadow-sm">
                   {activeTab.contentIcon}
                </div>
                <h3 className="text-[26px] md:text-[30px] font-bold text-[#1E1B18] mb-5 tracking-tight">
                  {activeTab.title}
                </h3>
                <ul className="space-y-2.5">
                  {activeTab.content.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#1E1B18] font-bold text-lg leading-[1.4] select-none">•</span>
                      <span className="text-[#1E1B18] font-medium text-[15px] leading-[1.6]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Illustration */}
              <div className="w-full md:w-[48%] flex-shrink-0">
                <div className="bg-white rounded-[16px] p-3 w-full aspect-[4/3] relative flex items-center justify-center shadow-sm">
                   <div className="relative w-full h-full rounded-xl overflow-hidden">
                     {/* Used placeholder generic images as specific vectors were not uploaded */}
                     <Image 
                       src={activeTab.image} 
                       alt={activeTab.title} 
                       fill 
                       className="object-cover"
                     />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
