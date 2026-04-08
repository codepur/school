"use client";

import Image from "next/image";
import { useRef } from "react";

const facilityImages = [
  {
    src: "/images/detail/Labs.jpg",
    alt: "Labs",
    title: "Labs",
    description: "Modern facilities for practical and interactive learning"
  },
  {
    src: "/images/detail/Library.jpg",
    alt: "Library",
    title: "Library",
    description: "Extensive collection of books and learning materials"
  },
  {
    src: "/images/detail/VR%20Lab.jpg",
    alt: "VR Lab",
    title: "VR Lab",
    description: "Immersive learning experiences with virtual reality"
  },
  {
    src: "/images/detail/Swimming.jpg",
    alt: "Swimming",
    title: "Swimming Pool",
    description: "Excellent aquatic facilities for student fitness and training"
  },
  {
    src: "/images/detail/Skating.jpg",
    alt: "Skating Rink",
    title: "Skating Rink",
    description: "Dedicated spaces for skating and active recreation"
  },
  {
    src: "/images/detail/Shooting.jpg",
    alt: "Shooting Range",
    title: "Shooting Range",
    description: "Professional facilities for precision sports"
  },
  {
    src: "/images/detail/Shooting2.jpg",
    alt: "Advanced Shooting",
    title: "Advanced Shooting",
    description: "Specialized training for competitive marksmanship"
  },
  {
    src: "/images/detail/Snooker.jpg",
    alt: "Snooker",
    title: "Indoor Sports",
    description: "Recreational indoor facilities promoting strategic thinking"
  },
  {
    src: "/images/detail/Sports%20day.jpg",
    alt: "Sports Grounds",
    title: "Sports Grounds",
    description: "Expansive outdoor spaces for athletics and team sports"
  },
  {
    src: "/images/detail/Taekwondo.jpg",
    alt: "Taekwondo",
    title: "Martial Arts",
    description: "Training areas for self-defense and discipline"
  },
  {
    src: "/images/detail/Science%20Exhibition.jpg",
    alt: "Science Exhibition",
    title: "Science Exhibition",
    description: "Showcasing student innovation and scientific discovery"
  },
  {
    src: "/images/detail/Teaching%20Method.jpg",
    alt: "Teaching Method",
    title: "Interactive Classrooms",
    description: "Modern teaching methodologies in interactive environments"
  },
  {
    src: "/images/detail/Curriculum.jpg",
    alt: "Curriculum",
    title: "Dynamic Curriculum",
    description: "A comprehensive approach to modern academic education"
  },
  {
    src: "/images/detail/Assessment%20and%20Feedback.jpg",
    alt: "Assessment and Feedback",
    title: "Assessment",
    description: "Dedicated spaces for student evaluation and feedback"
  },
  {
    src: "/images/detail/Culture.jpg",
    alt: "Culture",
    title: "Cultural Activities",
    description: "Fostering a rich environment for holistic development"
  },
  {
    src: "/images/detail/Supportive%20Teachers.jpg",
    alt: "Supportive Teachers",
    title: "Supportive Faculty",
    description: "Dedicated educators guiding students every step of the way"
  }
];

export default function CampusFacilities() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 md:py-16 bg-[#FCFBF8] overflow-hidden" id="facilities">
      {/* Container holding the green background block */}
      <div className="w-[96%] md:w-[97%] ml-auto bg-[#65B79B] rounded-bl-[60px] md:rounded-bl-[120px] rounded-tl-sm relative pt-16 md:pt-24 pb-20 md:pb-28">
        
        {/* Top Right Hanging Pills Decoration */}
        <div className="absolute top-0 right-0 lg:right-[3%] flex gap-2 md:gap-4 h-[120px] md:h-[180px] z-0 opacity-80 md:opacity-100">
          <div className="w-8 md:w-[60px] bg-[#F4FDF9] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-full h-[85%]"></div>
          <div className="w-8 md:w-[60px] bg-[#F4FDF9] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-full h-[65%]"></div>
          <div className="w-8 md:w-[60px] bg-[#F4FDF9] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-full h-[100%]"></div>
          <div className="w-8 md:w-[60px] bg-[#F4FDF9] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-full h-[90%] -mr-10 md:mr-0"></div>
        </div>

        {/* Content Wrapper aligned with main container width */}
        <div className="relative z-10 pl-6 md:pl-12 lg:pl-[max(4rem,calc((100vw-1150px)/2))]">
          
          <div className="flex justify-between items-end mb-10 md:mb-16 pr-6 lg:pr-20">
            <div className="max-w-[420px]">
              <h2 className="text-[36px] md:text-[45px] lg:text-[52px] font-extrabold text-[#111111] leading-[1.08] mb-5 tracking-tight">
                Campus and<br />Facilities
              </h2>
              <p className="text-[#1A2621] text-[15px] md:text-[16px] font-medium leading-relaxed max-w-[340px]">
                Our campus is designed to support both academics and daily school life.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden lg:flex gap-3 mb-2">
              <button 
                onClick={scrollLeft}
                className="w-11 h-11 rounded-lg flex items-center justify-center bg-[#56A088] text-white hover:bg-[#4A9079] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-11 h-11 rounded-lg flex items-center justify-center bg-white text-[#111] shadow-sm hover:bg-gray-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          {/* Cards Carousel */}
          <div className="relative">
            {/* Small decorative three lines above the first card */}
            <div className="absolute -top-8 left-2 z-20 text-[#111] hidden md:block opacity-60">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                 <line x1="5" y1="12" x2="10" y2="15" />
                 <line x1="8" y1="6" x2="11" y2="12" />
                 <line x1="14" y1="4" x2="12" y2="10" />
               </svg>
            </div>

            <div 
              ref={carouselRef}
              className="flex gap-5 md:gap-7 overflow-x-auto snap-x snap-mandatory pt-2 pb-8 pr-6 md:pr-12 lg:pr-[10vw]"
              style={{ scrollbarWidth: "none" }}
            >
              {/* Hide scrollbar pseudo-element via style is better covered with CSS, but inline `scrollbarWidth` works in Firefox. For Safari/Chrome, inline style doesn't cover webkit. */}
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              {facilityImages.map((facility, index) => (
                <div
                  key={index}
                  className="snap-start min-w-[280px] md:min-w-[320px] bg-white rounded-[24px] p-4 pb-6 flex-shrink-0 transition-transform hover:-translate-y-1 shadow-sm border border-black/5"
                >
                  <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden relative mb-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <Image
                      src={facility.src}
                      alt={facility.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-[19px] md:text-[21px] font-bold text-[#1E1B18] mb-2 px-1 tracking-tight">
                    {facility.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-[13px] md:text-[14px] leading-relaxed font-medium px-1">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
