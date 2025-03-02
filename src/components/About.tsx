import { Calculator, TrendingUp, PieChart, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import GlassCard from "./ui/GlassCard";

const About = () => {
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

  const cards = [
    {
      icon: <Calculator size={36} className="text-primary" />,
      title: "Accounting & Finance",
      description: "Proficient in accounting principles, financial analysis, and Tally software.",
    },
    {
      icon: <TrendingUp size={36} className="text-primary" />,
      title: "Business Management",
      description: "Experience in organizational leadership, team management, and strategic planning.",
    },
    {
      icon: <PieChart size={36} className="text-primary" />,
      title: "Communication Skills",
      description: "Trilingual communicator with strong interpersonal and presentation abilities.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-secondary/50 dark:bg-secondary/20">
      <div className="container">
        <h2 className="section-heading after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <GlassCard
              key={index}
              className={`text-center transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-foreground/70">{card.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-foreground/80 mb-4">
              I am an efficient and confident student with demonstrated experience of working with quite a few organizations. My experiences there has helped me develop my personality as well as communication and interpersonal skills.
            </p>
            <p className="text-foreground/80 mb-4">
              I am highly motivated to continue learning and improving myself in the days to come. With a strong foundation in business administration and a passion for accounting, I approach professional challenges with both analytical precision and creative problem-solving.
            </p>
            <p className="text-foreground/80 mb-6">
              Currently, I am looking for new career opportunities where I can leverage my skills and passion for learning in the fields of accounting, finance, and business management.
            </p>

            <h4 className="text-xl font-semibold mb-3">Education</h4>
            <div className="mb-4">
              <div className="flex items-start">
                <ChevronRight size={18} className="text-primary mt-1 mr-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Bachelor of Business Administration</p>
                  <p className="text-foreground/70 text-sm">Oxford College of Engineering and Management | 2022-Present</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-start">
                <ChevronRight size={18} className="text-primary mt-1 mr-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">+2 Management</p>
                  <p className="text-foreground/70 text-sm">Parijat English Boarding School | 2019-2021</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-primary mt-1 mr-1 flex-shrink-0" />
                  <span>Executive Vice President at Geetanagar Junior Jaycees (2024)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-primary mt-1 mr-1 flex-shrink-0" />
                  <span>General Secretary at Geetanagar Junior Jaycees (2023)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-primary mt-1 mr-1 flex-shrink-0" />
                  <span>Hult Prize at Oxford College - 2nd Runner up</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-primary mt-1 mr-1 flex-shrink-0" />
                  <span>OCEM Sports Tournament Quiz Competition - 2nd Runner up</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-primary mt-1 mr-1 flex-shrink-0" />
                  <span>College of Software Engineering - 78 hours/2 months certification</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-primary mt-1 mr-1 flex-shrink-0" />
                  <span>Attendee at TEDxKathmanduUniversity</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
