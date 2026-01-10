import { ArrowDown, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--hero-gradient)" }}
      />

      <div className="container-narrow relative z-10 pt-20">
        <div className="max-w-3xl">
          <p
            className="text-primary font-medium mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Hello, I'm
          </p>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Vidhi<span className="text-primary">.</span>
          </h1>

          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Frontend Developer
          </h2>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Building scalable, responsive, and user-friendly web applications
            using React and modern frontend tools. Passionate about clean code
            and exceptional user experiences.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={18} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
