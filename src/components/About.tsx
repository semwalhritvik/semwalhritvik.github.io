import { Download, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 3, label: "Years Experience", suffix: "+" },
  { value: 1.2, label: "Business Impact", prefix: "$", suffix: "M+" },
  { value: 15, label: "Projects Delivered", suffix: "+" },
  { value: 10, label: "ML Models Deployed", suffix: "+" },
];

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-cyan-light/20 rounded-2xl blur-2xl" />
              <div className="relative w-full h-full bg-secondary border-2 border-accent-cyan/30 rounded-2xl overflow-hidden hover-glow transition-all">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <img src="/profile.png" alt="profile-pic" className="w-full h-full object-cover rounded-lg"></img>
                  <div className="text-center">
                    {/* <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-accent-cyan">HS</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-accent-cyan">About Me</h2>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a Data Science graduate student at Northeastern University with over 3 years of 
                professional experience at Bajaj Finserv in India, where I progressed from Data 
                Technology Trainee to Unit Manager.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                I specialize in building production ML systems, credit risk modeling, and customer 
                analytics. My work has generated over $1.2M in business impact through data-driven 
                solutions.
              </p>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`p-6 bg-secondary border border-border rounded-lg hover-lift transition-all ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">
                    {metric.prefix}
                    {isVisible ? (
                      <CountUp value={metric.value} />
                    ) : (
                      "0"
                    )}
                    {metric.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CTA & Social */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                size="lg"
                className="bg-accent-cyan hover:bg-accent-cyan-light text-white"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>

              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/semwalhritvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-accent-cyan/10 border border-border hover:border-accent-cyan rounded-lg transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/semwalhritvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-accent-cyan/10 border border-border hover:border-accent-cyan rounded-lg transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hritviksemwal@gmail.com"
                  className="p-3 bg-secondary hover:bg-accent-cyan/10 border border-border hover:border-accent-cyan rounded-lg transition-all"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Counter animation component
const CountUp = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
};
