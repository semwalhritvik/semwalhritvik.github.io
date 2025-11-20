import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full animate-fade-in">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
            <span className="text-sm text-success font-medium">
              Seeking Summer 2026 Internships
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="block text-foreground mb-2">Hritvik Semwal</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Data Scientist • I Make Predictions That Come True
          </p>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            MS Data Science @ Northeastern University
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-accent-cyan hover:bg-accent-cyan-light text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all hover-lift"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 px-8 py-6 text-lg font-semibold rounded-lg transition-all"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex gap-4 justify-center pt-8 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://linkedin.com/in/semwalhritvik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-accent-cyan/10 border border-border hover:border-accent-cyan rounded-lg transition-all hover-lift"
            >
              <Linkedin className="h-6 w-6 text-foreground hover:text-accent-cyan transition-colors" />
            </a>
            <a
              href="https://github.com/semwalhritvik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-accent-cyan/10 border border-border hover:border-accent-cyan rounded-lg transition-all hover-lift"
            >
              <Github className="h-6 w-6 text-foreground hover:text-accent-cyan transition-colors" />
            </a>
            <a
              href="mailto:hritviksemwal@gmail.com"
              className="p-3 bg-secondary hover:bg-accent-cyan/10 border border-border hover:border-accent-cyan rounded-lg transition-all hover-lift"
            >
              <Mail className="h-6 w-6 text-foreground hover:text-accent-cyan transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
