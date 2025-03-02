
import { useRef, useEffect, useState } from "react";
import GlassCard from "./ui/GlassCard";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Accountant",
      company: "Gautam Buddha International Cricket Stadium Project, Himalayan-Kalinchok-BBI JV",
      location: "Chitwan, Nepal",
      period: "2024/10/01 - Present",
      responsibilities: [
        "Manage financial records and reporting for the cricket stadium project",
        "Process accounts payable and receivable for construction operations",
        "Prepare financial statements and project expense reports",
        "Coordinate with project stakeholders for budget monitoring"
      ],
    },
    {
      title: "Intern",
      company: "Comprehensive Business Management Nepal Pvt. Ltd.",
      location: "Chitwan, Nepal",
      period: "2024/09/22 - 2024/09/30",
      responsibilities: [
        "Assist in financial record keeping and bookkeeping",
        "Support business management operations and client services",
        "Participate in business development initiatives"
      ],
    },
    {
      title: "Intern",
      company: "Margadarshan Saccos",
      location: "Chitwan, Nepal",
      period: "2022/11/10 - 2023/04/10",
      responsibilities: [
        "Managed daily financial transactions and records",
        "Assisted with customer account management",
        "Supported loan processing and documentation"
      ],
    },
    {
      title: "Assistant Accountant",
      company: "Narayani Readymix Concrete Pvt. Ltd.",
      location: "Chitwan, Nepal",
      period: "2021/09/01 - 2022/10/01",
      responsibilities: [
        "Maintained accounts payable and receivable records",
        "Prepared monthly financial statements",
        "Assisted with tax preparation and compliance",
        "Reconciled bank statements and financial discrepancies"
      ],
    },
    {
      title: "Executive Vice President",
      company: "Geetanagar Junior Jaycees",
      location: "Geetanagar, Chitwan",
      period: "2024 - Present",
      responsibilities: [
        "Lead organizational planning and strategic initiatives",
        "Coordinate with executive team on project implementation",
        "Represent the organization at community and official events",
        "Manage event planning and execution for community programs"
      ],
    },
  ];

  const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => (
    <GlassCard
      className={`transition-all duration-700 transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{experience.title}</h3>
        <div className="flex items-center text-foreground/70 text-sm mt-1 md:mt-0">
          <Calendar size={16} className="mr-1" />
          {experience.period}
        </div>
      </div>
      <div className="flex items-center mb-4">
        <Briefcase size={16} className="text-primary mr-2" />
        <span className="text-foreground/80">{experience.company} | {experience.location}</span>
      </div>
      <ul className="space-y-2">
        {experience.responsibilities.map((responsibility, i) => (
          <li key={i} className="text-foreground/80">
            {responsibility}
          </li>
        ))}
      </ul>
    </GlassCard>
  );

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-secondary/50 dark:bg-secondary/20">
      <div className="container">
        <h2 className="section-heading after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <GlassCard className="p-6">
                <div className="flex items-center mb-2">
                  <GraduationCap size={20} className="text-primary mr-2" />
                  <h4 className="font-medium">Oxford College of Engineering and Management</h4>
                </div>
                <p className="text-foreground/80">Bachelor of Business Administration</p>
                <p className="text-foreground/70 text-sm">2022 - Present</p>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-center mb-2">
                  <GraduationCap size={20} className="text-primary mr-2" />
                  <h4 className="font-medium">Parijat English Boarding School</h4>
                </div>
                <p className="text-foreground/80">+2 Management</p>
                <p className="text-foreground/70 text-sm">2019 - 2021</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
