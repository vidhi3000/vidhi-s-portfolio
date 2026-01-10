import { BookOpen, Rocket, Code } from "lucide-react";

const experiences = [
  {
    icon: <BookOpen size={24} />,
    title: "Self-Directed Learning",
    description:
      "Started my frontend journey through online courses, documentation, and hands-on projects. Built a strong foundation in HTML, CSS, JavaScript, and modern frameworks.",
  },
  {
    icon: <Code size={24} />,
    title: "React & TypeScript Mastery",
    description:
      "Deepened expertise in React.js and TypeScript by building multiple real-world applications. Learned best practices for component architecture and type-safe development.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Full-Stack Capabilities",
    description:
      "Expanded into full-stack development using Supabase for backend services. Implemented authentication, database management, and real-time features in production applications.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learning Journey
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My path to becoming a frontend developer through self-learning and
            project-based experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative flex gap-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 rounded-full bg-accent border-4 border-background items-center justify-center text-primary flex-shrink-0 z-10">
                  {exp.icon}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3 md:hidden">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                      {exp.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {exp.title}
                    </h3>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 hidden md:block">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
