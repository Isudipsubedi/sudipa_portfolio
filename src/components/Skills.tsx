
import { useRef, useEffect, useState } from "react";
import GlassCard from "./ui/GlassCard";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Accounting Skills",
      skills: ["Tally", "Financial Analysis", "Bookkeeping", "Tax Preparation"],
    },
    {
      title: "Management Skills",
      skills: ["Leadership", "Team Management", "Strategic Planning", "Event Organization"],
    },
    {
      title: "Communication Skills",
      skills: ["Public Speaking", "Presentation", "Interpersonal Skills", "Negotiation"],
    },
    {
      title: "Technical Skills",
      skills: ["MS Office Suite", "Data Analysis", "Computer Proficiency", "ERP Systems"],
    },
  ];

  const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
    <div
      className={`bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 px-4 py-2 rounded-full transition-all duration-700 transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {skill}
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-24">
      <div className="container">
        <h2 className="section-heading after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
          Professional Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <GlassCard
              key={categoryIndex}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skillIndex}
                    skill={skill}
                    index={skillIndex + categoryIndex * 10}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16">
          <GlassCard
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-xl font-semibold mb-4">Trainings & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-secondary/80 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-medium">Beautician Training</p>
                <p className="text-sm text-foreground/70">3-months CTEVT training</p>
              </div>
              <div className="bg-secondary/80 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-medium">First Aid Training</p>
                <p className="text-sm text-foreground/70">Parijat English Boarding School</p>
              </div>
              <div className="bg-secondary/80 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-medium">Emcee Training</p>
                <p className="text-sm text-foreground/70">Professional Event Hosting</p>
              </div>
              <div className="bg-secondary/80 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-medium">LOM Officer's Training</p>
                <p className="text-sm text-foreground/70">Geetanagar Junior Jaycees</p>
              </div>
              <div className="bg-secondary/80 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-medium">Office Package</p>
                <p className="text-sm text-foreground/70">College of Software Engineering</p>
              </div>
              <div className="bg-secondary/80 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-medium">Painting and Pencil Art</p>
                <p className="text-sm text-foreground/70">Nepal Arts and Kollywood Kala Kendra</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
