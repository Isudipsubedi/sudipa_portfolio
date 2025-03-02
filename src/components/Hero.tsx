
import { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative hero-bg py-20"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <div
            className={`w-32 h-32 rounded-full overflow-hidden mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <img
              src="/lovable-uploads/sudipa.jpg"
              alt="Sudipa Subedi"
              className="w-full h-full object-cover"
            />
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold text-center mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Sudipa Subedi
          </h1>

          <div
            className={`text-xl md:text-2xl text-primary/90 font-medium text-center mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Business Administration & Accounting Specialist
          </div>

          <p
            className={`text-center max-w-2xl mx-auto mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            BBA student with experience in accounting, financial analysis, and business management.
            Based in Bharatpur-6, Geetanagar, Chitwan, Nepal.
          </p>

          <div
            className={`flex flex-wrap gap-4 justify-center mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="glass-card px-4 py-2 text-sm">
              <span className="font-medium">Nepali</span>
              <span className="text-foreground/60 ml-2">Native</span>
            </div>
            <div className="glass-card px-4 py-2 text-sm">
              <span className="font-medium">English</span>
              <span className="text-foreground/60 ml-2">Fluent</span>
            </div>
            <div className="glass-card px-4 py-2 text-sm">
              <span className="font-medium">Hindi</span>
              <span className="text-foreground/60 ml-2">Proficient</span>
            </div>
          </div>

          <div
            className={`flex space-x-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <a href="#contact" className="button-primary">
              Contact Me
            </a>
            <a href="#about" className="button-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-primary/10 dark:bg-primary/20 p-3 rounded-full text-primary animate-bounce transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1200ms" }}
        aria-label="Scroll down"
      >
        <ChevronDown />
      </button>
    </section>
  );
};

export default Hero;
