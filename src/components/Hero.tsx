import { ArrowDown, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--hero-gradient)" }}
      />

      <div className="container-narrow relative z-10 pt-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 items-center">

          {/* LEFT — all text */}
          <div>
            <p
              className="text-primary font-medium mb-4 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Hello, I'm
            </p>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Vidhi<span className="text-primary">.</span>
            </h1>

            <div
              className="flex items-center gap-3 mb-6 animate-fade-up flex-wrap"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Frontend Developer
              </h2>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: '#E1F5EE', color: '#085041', border: '1px solid #9FE1CB' }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#1D9E75',
                    display: 'inline-block',
                    marginRight: '6px'
                  }}
                />
                Open to work
              </span>
            </div>

            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              I build fast, accessible React apps — from e-commerce dashboards to
              real-time collaboration tools. Currently open to frontend roles.
            </p>

            <div
              className="flex gap-3 animate-fade-up flex-wrap"
              style={{ animationDelay: "0.5s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown size={18} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="/Vidhi Maharwade-Resume2026.pdf" download>
                  <FileText size={18} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT — photo */}
          <div
            className="hidden lg:flex justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <div
              className="rounded-full overflow-hidden flex-shrink-0"
              style={{
                width: '220px',
                height: '220px',
                border: '4px solid #E1F5EE'
              }}
            >
              <img
                src="profile-image.jpeg"
                alt="Vidhi"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
            </div>
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