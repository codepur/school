"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    full_name: "",
    mobile_number: "",
    enquiry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://dev.malwastallions.com/api/resource/School vedant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          mobile_number: formData.mobile_number,
          enquiry: formData.enquiry
        })
      });

      if (response.ok) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ full_name: "", mobile_number: "", enquiry: "" });
      } else {
        toast.error("Failed to submit enquiry.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden" id="apply">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/9a8b9b47a5f35452f3dea2c8793216c79ceb90be.jpg"
          alt="Students in classroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[650px] py-12 lg:py-20 gap-10 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-[650px] pt-10 lg:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-6" style={{ textShadow: "0px 4px 12px rgba(0,0,0,0.15)" }}>
              Structured learning<br />
              in a safe, value-<br />
              based environment.
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-[540px] leading-[1.6] font-medium" style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.2)" }}>
              Vedaant Vidhyakulum provides a balanced education that focuses on
              strong academics, disciplined learning, and all-round development from
              early years to higher grades.
            </p>
          </div>

          {/* Right - Enrollment Form */}
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-2xl">
              <h3 className="text-[26px] md:text-[28px] font-bold text-[#2A2323] tracking-tight mb-2">
                Enquire About Admissions
              </h3>
              <p className="text-[15px] text-[#6B6B6B] mb-8 font-medium">
                Share a few details and our team will contact you.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#2A2323] uppercase tracking-wider">
                    Full Name
                  </label>
                  <Input
                    placeholder="Your name"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                    className="h-[50px] bg-[#F9F9F9] border-none shadow-none focus-visible:ring-1 focus-visible:ring-[#7C241C] text-[15px] px-4 rounded-xl text-[#2A2323] placeholder:text-[#9CA3AF]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#2A2323] uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="flex gap-2 items-center">
                    <div className="relative w-[90px] flex-shrink-0">
                      <select className="w-full h-[50px] bg-[#F9F9F9] rounded-xl px-4 text-[15px] text-[#2A2323] font-medium appearance-none border-none outline-none focus:ring-1 focus:ring-[#7C241C] cursor-pointer">
                        <option>+91</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L5 5.5L9 1.5" stroke="#2A2323" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <Input
                      type="tel"
                      placeholder="--- --- ----"
                      required
                      value={formData.mobile_number}
                      onChange={(e) => setFormData(prev => ({ ...prev, mobile_number: e.target.value }))}
                      className="h-[50px] flex-1 bg-[#F9F9F9] border-none shadow-none focus-visible:ring-1 focus-visible:ring-[#7C241C] text-[15px] px-4 rounded-xl font-mono tracking-[0.2em] placeholder:tracking-[0.2em] text-[#2A2323] placeholder:text-[#9CA3AF]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#2A2323] uppercase tracking-wider">
                    Enquiry Details
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    required
                    value={formData.enquiry}
                    onChange={(e) => setFormData(prev => ({ ...prev, enquiry: e.target.value }))}
                    className="w-full min-h-[100px] bg-[#F9F9F9] border-none shadow-none text-[15px] p-4 rounded-xl text-[#2A2323] placeholder:text-[#9CA3AF] resize-none outline-none focus:ring-1 focus:ring-[#7C241C]"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#7C241C] hover:bg-[#7C241C]/95 text-white rounded-full h-[54px] text-[16px] font-semibold shadow-none transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                  <p className="text-center text-[13px] text-[#8C8C8C] mt-4 font-medium">
                    Confidentiality Assured
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
