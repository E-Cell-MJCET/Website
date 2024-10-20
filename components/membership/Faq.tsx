/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ShootingStars } from "../ui/shootingstars";
import { StarsBackground } from "../ui/starsbackground";

export function Faq() {
  return (
    <div className="max-w-screen flex h-screen flex-col items-center justify-center gap-3 px-4">
      <div className="z-50 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold z-30 font-silkscreen text-[#f6e445]">
          Frequently Asked Questions
        </h1>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full sm:w-1/2 font-silkscreen z-50 bg-black"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger> Can non-students join E-Cell?</AccordionTrigger>
          <AccordionContent className="font-montserrat">
            No, E-Cell focuses exclusively on current student members passionate
            about entrepreneurship and innovation. If you&apos;re a student
            interested in joining, we’d love to have you! Please contact us for
            details on the application process.
          </AccordionContent>
        </AccordionItem>
        {/* 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger> What is the membership fee?</AccordionTrigger>
          <AccordionContent className="font-montserrat">
            The membership fee is a small contribution that helps us organise
            events, provide resources, and support entrepreneurial activities.
            We strive to keep the fee affordable to ensure broad participation.
          </AccordionContent>
        </AccordionItem>
        {/* 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger>
            {" "}
            What is the membership time frame?
          </AccordionTrigger>
          <AccordionContent className="font-montserrat">
            The membership is typically valid for one academic year, giving you
            full access to all events, workshops, and resources during that
            time.
          </AccordionContent>
        </AccordionItem>
        {/* 4 */}
        <AccordionItem value="item-4">
          <AccordionTrigger> Can I pay in cash or online?</AccordionTrigger>
          <AccordionContent className="font-montserrat">
            We offer multiple payment options for your convenience. You can pay
            the membership fee online via our secure portal or make a cash
            payment at our campus office. Further instructions will be provided
            after registration.
          </AccordionContent>
        </AccordionItem>
        {/* 5 */}
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left text-sm">
            {" "}
            Can students from different branches/departments join E-Cell?
          </AccordionTrigger>
          <AccordionContent className="font-montserrat">
            Yes, E-Cell is open to students from all branches and departments.
            Entrepreneurship is a universal skill that can benefit everyone, and
            we encourage students from diverse backgrounds to join and
            contribute their unique perspectives.
          </AccordionContent>
        </AccordionItem>
        {/* 6 */}
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left text-sm">
            {" "}
            I&apos;m a first-year student. Can I join E-Cell?
          </AccordionTrigger>
          <AccordionContent className="font-montserrat">
            Absolutely! First-year students are welcome and encouraged to join.
            Being part of E-Cell early in your academic journey can help you
            develop entrepreneurial skills, gain mentorship, and start building
            your network right from the start. It’s a fantastic opportunity to
            get involved from day one.
          </AccordionContent>
        </AccordionItem>
        {/* 7 */}
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left text-sm">
            {" "}
            How does E-Cell promote work-life balance for its members?
          </AccordionTrigger>
          <AccordionContent className="font-montserrat">
            We understand the importance of balancing academics and
            extracurricular activities. E-Cell’s events are designed for
            flexibility, allowing you to participate without overwhelming your
            schedule. We offer both online and offline options, spacing out
            events to fit your academic commitments.
          </AccordionContent>
        </AccordionItem>
        {/* 8 */}
        <AccordionItem value="item-8">
          <AccordionTrigger> How do I sign up for membership?</AccordionTrigger>
          <AccordionContent className="font-montserrat">
            Signing up is easy! Just visit our website and click the “Join Now”
            button. Fill out a short form with your details and select your
            membership type. After submitting your application, we&apos;ll send
            further instructions on payment and next steps, so keep an eye out
            for a confirmation email!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
export default Faq;
