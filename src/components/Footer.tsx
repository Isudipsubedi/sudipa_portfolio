
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Sudipa Subedi</h2>
            <p className="text-background/80">Accounting & Business Administration</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com/in/sudipasubedi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:sudipasubedi@gmail.com"
              className="text-background/80 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+9779800000000"
              className="text-background/80 hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm mb-4 md:mb-0">
            © {currentYear} Sudipa Subedi. All rights reserved.
          </p>
          
          <nav className="flex items-center space-x-6">
            <a href="#home" className="text-background/70 hover:text-primary transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-background/70 hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#skills" className="text-background/70 hover:text-primary transition-colors text-sm">
              Skills
            </a>
            <a href="#projects" className="text-background/70 hover:text-primary transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-background/70 hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
