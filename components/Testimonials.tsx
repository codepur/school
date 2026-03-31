"use client";

import { createElement } from "react";

const testimonials = [
  {
    rating: 5,
    text: "My child has become more confident and comfortable in class. Teachers are approachable and supportive. The school has truly transformed my son's attitude towards learning.",
  },
  {
    rating: 4,
    text: "The school maintains discipline while still being caring towards students. We appreciate the regular updates about our daughter's progress and the personal attention she receives.",
  },
  {
    rating: 4,
    text: "We chose Vedaant Vidhyakulum for its values-based education. The safe environment and structured approach has helped our child develop good study habits from an early age.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1.5 mb-5 relative z-10">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < rating ? "#FBBF24" : "transparent"}
          stroke={i < rating ? "#FBBF24" : "transparent"}
          strokeWidth="1.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-10 md:py-16 bg-[#FCFBF8] overflow-hidden" id="testimonials">
      {/* Container holding the green background block - Left Aligned */}
      <div className="w-[96%] md:w-[97%] mr-auto bg-[#65B79B] rounded-br-[60px] md:rounded-br-[120px] rounded-tr-sm relative pt-16 md:pt-24 pb-20 md:pb-28">
        
        {/* Top Right Hanging Pills Decoration */}
        <div className="absolute top-0 right-0 lg:right-[3%] flex gap-2 md:gap-4 h-[120px] md:h-[180px] z-0 opacity-80 md:opacity-100">
          <div className="w-8 md:w-[60px] bg-[#F4FDF9] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-full h-[85%]"></div>
          <div className="w-8 md:w-[60px] bg-[#F4FDF9] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-full h-[65%]"></div>
          <div className="w-8 md:w-[60px] bg-[#F4FDF9] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-full h-[100%]"></div>
          <div className="w-8 md:w-[60px] bg-[#F4FDF9] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.03)] rounded-b-full h-[90%] -mr-10 md:mr-0"></div>
        </div>

        <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          
          <div className="mb-12 md:mb-16">
            <h2 className="text-[36px] md:text-[45px] lg:text-[52px] font-extrabold text-[#111111] leading-[1.08] tracking-tight">
              What Parents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {testimonials.map((testim, index) => (
              <div key={index} className="relative">
                
                {/* Specific Decoration for Card 1 (Top left lines) */}
                {index === 0 && (
                  <div className="absolute -top-6 -left-6 z-20 text-[#111] hidden md:block opacity-70 pointer-events-none">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="10" y2="15" />
                      <line x1="8" y1="6" x2="11" y2="12" />
                      <line x1="14" y1="4" x2="12" y2="10" />
                    </svg>
                  </div>
                )}
                
                {/* Specific Decoration for Card 2 (Bottom left rectangular blobs) */}
                {index === 1 && (
                  <div className="absolute -bottom-4 left-6 flex gap-1.5 z-0 hidden lg:flex">
                    <div className="w-[18px] h-[35px] bg-[#D1DCF0] rounded-lg"></div>
                    <div className="w-[18px] h-[35px] bg-[#D1DCF0] rounded-lg"></div>
                  </div>
                )}

                {/* Main Card */}
                <div className="bg-white rounded-3xl p-7 md:p-9 shadow-sm relative h-full flex flex-col min-h-[220px] transition-transform hover:-translate-y-1">
                  
                  {/* Background Quote Mark */}
                  <div className="absolute top-2 right-4 md:right-6 text-[#D1DCF0]/50 text-[90px] font-serif leading-none select-none pointer-events-none tracking-tighter">
                    ”
                  </div>
                  
                  {/* Star Rating */}
                  <StarRating rating={testim.rating} />

                  {/* Review Text */}
                  <p className="text-[#3A3333] text-[14px] md:text-[14.5px] font-medium leading-[1.7] relative z-10">
                    {testim.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
