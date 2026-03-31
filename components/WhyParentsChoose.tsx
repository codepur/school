import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6.5V20c0 .3.2.5.5.5H12V5H4.5C4.2 5 4 5.2 4 5.5v1z" />
        <path d="M20 6.5V20c0 .3-.2.5-.5.5H12V5h7.5c.3 0 .5.2.5.5v1z" />
        <path d="M4 9h16" />
      </svg>
    ),
    title: "Structured Academic Approach",
    description: "Lessons are planned and paced to ensure children understand concepts clearly before moving ahead.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 11l2 2 4-4"/>
      </svg>
    ),
    title: "Disciplined and Safe Environment",
    description: "Clear rules, supervision, and routines help children feel secure and focused.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Personal Attention",
    description: "Teachers observe each student's progress and provide support where needed.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="9" x2="15" y2="9"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
      </svg>
    ),
    title: "Clear Communication with Parents",
    description: "Parents are kept informed about academic progress and school activities.",
  },
];

export default function WhyParentsChoose() {
  return (
    <section className="py-20 md:py-28 bg-[#FCFBF8]" id="about">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A2323] mb-5 tracking-tight leading-[1.15]">
            Why Parents Choose<br />
            Vedaant Vidhyakulum
          </h2>
          <p className="text-[#3A3333] text-[15px] md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Parents look for a school they can trust with their child&apos;s learning and
            safety. Our approach is simple and consistent.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-20 gap-x-8">
          {features.map((feature, index) => {
            const isTopRow = index < 2;
            return (
              <div
                key={index}
                className="bg-[#FBCF6F] rounded-xl p-8 md:p-10 relative"
              >
                {/* Connecting Lines for top row */}
                {isTopRow && (
                  <div className="hidden md:block absolute w-[1px] bg-[#6B6B6B] h-20 -bottom-20 left-[60px]" />
                )}

                <div className="w-[44px] h-[44px] bg-white rounded-lg flex items-center justify-center mb-8 text-[#2A2323] shadow-sm">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl md:text-[22px] font-bold text-[#2A2323] mb-3 border-b-0">
                  {feature.title}
                </h3>
                
                <p className="text-[#3A3333] text-[15px] leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
