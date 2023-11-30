import React from "react";
import Phases from "./phases";

function PhasesList() {
  const arry = [
    {
      title: "Phase 1: Ignite Your Entrepreneurial Journey",
      desc: "Embark on the first phase of our Entrepreneurship Program, where participants dive into the core of entrepreneurship. This seminar ignites the entrepreneurial spirit, cultivates a growth mindset, and lays the foundation for a robust business. Through sessions on crafting business plans, understanding legal essentials, building trust, and achieving financial fitness, participants gain essential skills and insights for their entrepreneurial journey.",
    },
    {
      title:
        "Phase 2: Technical Resources and Digital Presence for Business Development",
      desc: "In Phase 2, participants go beyond the basics, exploring a rich array of technical tools such as Slack, Notion, Atlassian, Trello, and various e-commerce platforms. Additionally, delve into the critical aspects of SEO and website building, learning to optimize online presence, improve search engine rankings, and create a compelling website that resonates with the target audience. This phase ensures participants are equipped not only with a comprehensive set of technical skills but also the ability to navigate the ever-evolving online landscape effectively.",
    },
    {
      title: "Phase 3: Comprehensive Business Development Seminar",
      desc: "Immerse yourself in Phase 3's in-depth seminar, a dynamic exploration of advanced marketing strategies, strategic project management, mastering entrepreneurial writing, and more. Engage in interactive discussions, delve into real-world case studies, and refine your skills to enhance your business development acumen. This phase is designed to provide a deep understanding of the intricacies involved in successful business development, ensuring participants are well-prepared to navigate the complexities of the modern business landscape.",
    },
    {
      title: "Phase 4: Financial Mastery and Investment Strategies",
      desc: "Phase 4 guides participants through the intricacies of financial management. From understanding tax forms and creating financial budgets to exploring cash flow, risk management, and return on investment, this phase provides a comprehensive understanding of financial strategies. Dive into the stock market, learn from financial stories, and make informed investment decisions. Whether it's bootstrapping or understanding the financial journey of a startup, Phase 4 ensures a solid foundation in financial literacy.",
    },
  ];

  return (
    <div className="bg-[#031c35] pt-5">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full">
          <div className="mx-auto mb-[60px] max-w-[520px] text-center">
            <h2 className="mt-4 text-3xl font-bold text-dark bernoru sm:text-[40px]/[48px]">
              Phases
            </h2>
            <p className="text-base text-body-color dark:text-dark-6"></p>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-6 xl:px-8 grid grid-cols-1 gap-2 lg:grid-cols-2 justify-center items-center ">
        {arry.map((phase, id) => (
          <Phases key={id} title={phase.title} desc={phase.desc} />
        ))}
      </div>
    </div>
  );
}

export default PhasesList;
