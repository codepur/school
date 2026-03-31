import Image from "next/image";

const lifeImages = [
  { src: "/images/Image.png", alt: "Students in assembly" },
  { src: "/images/Image (1).png", alt: "Swings and playground" },
  { src: "/images/Image (2).png", alt: "Climbing net activity" },
  { src: "/images/Image (3).png", alt: "Classroom instruction" },
  { src: "/images/Image (4).png", alt: "Music class" },
  { src: "/images/Image (5).png", alt: "Basketball court" },
  { src: "/images/Rectangle 11.png", alt: "Dormitory/Hostel" },
  { src: "/images/Rectangle 11 (2).png", alt: "Dining hall" },
];

export default function LifeAtSchool() {
  return (
    <section className="py-20 md:py-28 bg-[#FCFBF8] relative overflow-hidden" id="life">
      {/* Decorative arrow pointing to title */}
      <div className="absolute top-[8%] lg:top-[5%] right-[5%] md:right-[20%] lg:right-[25%] opacity-80 z-0 hidden md:block">
        <Image
          src="/images/arrow.svg"
          alt=""
          width={180}
          height={180}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-5 md:px-10 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-20 relative z-10">
          <h2 className="text-[34px] md:text-[44px] lg:text-[48px] font-bold text-[#1E1B18] leading-[1.12] mb-5 tracking-tight">
            Life at Vedaant
            <br />
            Vidhyakulum
          </h2>
          <p className="text-[#3A3333] text-[15px] md:text-base max-w-[550px] mx-auto mb-8 font-medium leading-relaxed">
            A glimpse into everyday school life, classrooms, and activities.
          </p>

          <button className="bg-[#7C241C] text-white rounded-full px-10 py-[14px] font-semibold text-[15px] shadow-sm hover:bg-[#7C241C]/90 transition-colors">
            Apply Now
          </button>
        </div>

        {/* Photo Grid container with decorations */}
        <div className="relative max-w-[1000px] mx-auto">
          {/* Decorative lines at top right of grid */}
          <div className="absolute -top-6 -right-5 z-20 text-[#1E1B18] hidden md:block opacity-80 pointer-events-none">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <line x1="12" y1="2" x2="14" y2="8" />
              <line x1="18" y1="6" x2="15" y2="10" />
              <line x1="22" y1="12" x2="16" y2="13" />
            </svg>
          </div>
          
          {/* Decorative star at bottom left of grid */}
          <div className="absolute -bottom-6 -left-6 z-20 text-[#1E1B18] hidden md:block opacity-80 pointer-events-none">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 relative z-10">
            {lifeImages.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] p-2.5 shadow-sm border border-[#F2EFE8] flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative w-full aspect-square rounded-[14px] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
