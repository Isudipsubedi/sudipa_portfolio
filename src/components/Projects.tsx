
import { useRef, useEffect, useState } from "react";
import GlassCard from "./ui/GlassCard";
import { ArrowUpRight, FileText, PieChart, BarChart3, TrendingUp, FileSpreadsheet, Calculator, DollarSign } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "Cricket Stadium Financial Management",
      description: "Developed comprehensive financial tracking system for the Gautam Buddha International Cricket Stadium Project, including expense categorization and budget monitoring.",
      tags: ["Financial Management", "Project Accounting", "Budget Analysis"],
      icon: <DollarSign size={40} className="text-primary" />,
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Financial Statement Analysis",
      description: "Comprehensive analysis of financial statements for Narayani Readymix Concrete Pvt. Ltd. including ratio analysis, trend analysis, and recommendations.",
      tags: ["Financial Analysis", "Ratio Analysis", "Excel"],
      icon: <BarChart3 size={40} className="text-primary" />,
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Budgeting & Forecasting Model",
      description: "Developed a detailed budgeting and forecasting model for small businesses using Excel, featuring cash flow projections and scenario analysis.",
      tags: ["Budgeting", "Forecasting", "Financial Modeling"],
      icon: <TrendingUp size={40} className="text-primary" />,
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Accounting System Implementation",
      description: "Implemented a streamlined accounting system for a local business, including chart of accounts setup, process documentation, and staff training.",
      tags: ["Accounting", "Process Improvement", "Training"],
      icon: <FileSpreadsheet size={40} className="text-primary" />,
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Tax Compliance Audit",
      description: "Conducted a comprehensive tax compliance audit for a small business, identifying areas for improvement and potential tax savings.",
      tags: ["Tax", "Audit", "Compliance"],
      icon: <FileText size={40} className="text-primary" />,
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Community-Based Business Plan",
      description: "Developed a detailed business plan for a community-based social enterprise, including market analysis, financial projections, and impact assessment.",
      tags: ["Business Planning", "Social Enterprise", "Financial Modeling"],
      icon: <Calculator size={40} className="text-primary" />,
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <GlassCard
      className={`overflow-hidden transition-all duration-700 transform p-6 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-center mb-6">
        {project.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
      <p className="text-foreground/70 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <a
          href={project.links.demo}
          className="flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <span className="mr-1">View Details</span>
          <ArrowUpRight size={16} />
        </a>
        <a
          href={project.links.github}
          className="flex items-center text-foreground/80 hover:text-primary transition-colors"
        >
          <span className="mr-1">Report</span>
          <FileText size={16} />
        </a>
      </div>
    </GlassCard>
  );

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="container">
        <h2 className="section-heading after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
          Projects & Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline"
            >
              <FileText size={18} className="mr-2" />
              View All Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
