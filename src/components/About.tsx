const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate{" "}
              <span className="text-foreground font-medium">
                Frontend Developer
              </span>{" "}
              focused on building beautiful, functional, and user-centric web
              applications. With a strong foundation in modern JavaScript and
              React ecosystem, I transform complex problems into elegant,
              scalable solutions.
            </p>

            <p>
              My expertise lies in crafting{" "}
              <span className="text-foreground font-medium">
                responsive interfaces
              </span>{" "}
              that work seamlessly across all devices, implementing{" "}
              <span className="text-foreground font-medium">
                scalable state management
              </span>{" "}
              with Redux Toolkit, and integrating modern backend services like
              Supabase for full-stack capabilities.
            </p>

            <p>
              I believe in writing{" "}
              <span className="text-foreground font-medium">
                clean, maintainable code
              </span>{" "}
              and continuously learning new technologies to stay at the
              forefront of frontend development. When I'm not coding, you'll
              find me exploring new design patterns, contributing to open-source
              projects, or diving into the latest web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
