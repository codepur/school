import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FCFBF8] ">
      <div className=" bg-black rounded-t-[40px] px-8 md:px-16 pt-10 md:pt-16 pb-10 text-white relative shadow-lg">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          {/* Left Block */}
          <div className="max-w-[500px]">
            {/* Logo placeholder - using image assuming logo is provided */}
            <div className="mb-14 h-[80px] w-auto relative flex items-center">
              {/* Uses reliable object-contain if logo exists in their assets */}
              <Image
                src="/images/logo.png"
                alt="Vedaant Vidhyakulum Logo"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>

            <h2 className="text-[30px] md:text-[38px] font-medium leading-[1.3] tracking-tight">
              Providing structured<br className="hidden md:block" />
              education with care and<br className="hidden md:block" />
              responsibility.
            </h2>
          </div>

          {/* Right Block - Contact */}
          <div className="lg:w-[420px] lg:mt-[100px]">
            <h3 className="text-[18px] md:text-[20px] font-medium mb-8">Contact Details</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-[#D1D1D1] text-[15px] hover:text-white transition-colors cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>9285055523, 8225955521</span>
              </li>
              <li className="flex items-start gap-4 text-[#D1D1D1] text-[15px] hover:text-white transition-colors cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 flex-shrink-0">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
                <span>info@vedaantvidhyakulum.com</span>
              </li>
              <li className="flex items-start gap-4 text-[#D1D1D1] text-[15px] leading-[1.6] hover:text-white transition-colors cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 flex-shrink-0">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                <span>Kanadia Road, Village Barodia Kara, Indore</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-[#333333] mb-8"></div>

        {/* Bottom Bar: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex gap-4">
            {/* LinkedIn */}
            <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-[#D1D1D1]">
              <span className="font-bold text-[14px]">in</span>
            </a>
            {/* Instagram */}
            <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-[#D1D1D1]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-[#D1D1D1]">
              <span className="font-bold text-[15px] ml-0.5">f</span>
            </a>
          </div>

          <div className="text-[#A1A1A1] text-[14px]">
            © 2026 by Vedaant Vidhyakulum
          </div>

        </div>

      </div>
    </footer>
  );
}
