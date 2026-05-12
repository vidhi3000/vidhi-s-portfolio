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
              I've spent the last year teaching myself frontend development — no
              bootcamp, no CS degree, just a lot of documentation, side projects,
              and debugging at midnight.
            </p>

            <p>
              I specialize in React and TypeScript, and I've built full-stack
              apps using Supabase for auth, real-time data, and database
              management. I'm drawn to the logic side of frontend — state
              architecture, component design, and making complex interactions
              feel simple to the user.
            </p>

            <p>
              Right now I'm looking for a frontend role where I can keep
              shipping and keep learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
