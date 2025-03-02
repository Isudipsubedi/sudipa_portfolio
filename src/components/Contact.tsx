
import { useRef, useEffect, useState } from "react";
import GlassCard from "./ui/GlassCard";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server
    setFormSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary" />,
      title: "Email",
      info: "alishapoudel456@gmail.com",
      link: "mailto:alishapoudel456@gmail.com",
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: "Phone",
      info: "+977 9867746750",
      link: "tel:+9779867746750",
    },
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: "Location",
      info: "Bharatpur, Chitwan, Nepal",
      link: "https://maps.google.com/?q=Bharatpur,Chitwan,Nepal",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="section-heading after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <GlassCard
              key={index}
              className={`text-center transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                {info.info}
              </a>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <GlassCard>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-foreground/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/50"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-foreground/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/50"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-foreground/80 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/50"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="button-primary w-full flex items-center justify-center"
                  disabled={formSubmitted}
                >
                  {formSubmitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="h-full flex flex-col">
              <GlassCard className="flex-1 mb-8">
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-foreground/80 mb-6">
                  I'm passionate about environmental engineering and sustainable solutions. Feel free to reach out to discuss projects, research opportunities, or any environmental initiatives you're working on.
                </p>
                <p className="text-foreground/80">
                  Whether you have a question about water management, waste solutions, or just want to connect with a fellow environmental enthusiast, I'll get back to you as soon as possible.
                </p>
              </GlassCard>
              
              <GlassCard className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">Interests & Expertise</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">✓</div>
                    <span>Accounting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">✓</div>
                    <span>Financial Audit</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">✓</div>
                    <span>Project Management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">✓</div>
                    <span>Research & Innovation</span>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
