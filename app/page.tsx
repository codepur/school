import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyParentsChoose from "@/components/WhyParentsChoose";
import AcademicApproach from "@/components/AcademicApproach";
import CampusFacilities from "@/components/CampusFacilities";
import LifeAtSchool from "@/components/LifeAtSchool";
import Testimonials from "@/components/Testimonials";
import FromTheSchool from "@/components/FromTheSchool";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyParentsChoose />
        <AcademicApproach />
        <CampusFacilities />
        <LifeAtSchool />
        <Testimonials />
        <FromTheSchool />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
