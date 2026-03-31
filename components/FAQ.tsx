import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What curriculum does Vedaant Vidhyakulum follow?",
    answer:
      "We follow the CBSE curriculum enriched with additional modules in value education, life skills, digital literacy, and experiential learning to provide a well-rounded educational experience.",
  },
  {
    question: "What is the admission process?",
    answer:
      "The admission process includes filling out an enquiry form, followed by an interaction session with the child and parents. After evaluation, selected candidates receive an admission offer. Contact us for detailed information about upcoming admission cycles.",
  },
  {
    question: "What are the school timings?",
    answer:
      "School operates from 8:00 AM to 2:30 PM for primary classes and 8:00 AM to 3:00 PM for senior classes. Extended day care facilities are available upon request.",
  },
  {
    question: "What extracurricular activities are offered?",
    answer:
      "We offer a wide range of activities including sports (cricket, basketball, athletics), performing arts (dance, music, drama), visual arts, robotics, coding, yoga, and various hobby clubs that students can choose from.",
  },
  {
    question: "How do you ensure student safety?",
    answer:
      "Student safety is our top priority. We have CCTV surveillance across the campus, verified staff, secure entry/exit protocols, GPS-enabled buses, and a dedicated safety committee that regularly reviews and updates our safety measures.",
  },
  {
    question: "What is the teacher-student ratio?",
    answer:
      "We maintain a favorable teacher-student ratio of 1:20 to ensure personalized attention for every student. Teaching assistants are also available in lower classes to provide additional support.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-dark mb-4">
            Frequently Asked Questions
          </h2>
          {/* Decorative underline */}
          <div className="flex justify-center">
            <Image
              src="/images/Vector 1.svg"
              alt=""
              width={25}
              height={27}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-school-cream border border-school-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-sm md:text-base font-semibold text-school-dark text-left hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
