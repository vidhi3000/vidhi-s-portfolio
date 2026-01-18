import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A comprehensive admin dashboard for managing products, orders, and customers with real-time analytics and data visualization.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&auto=format&fit=crop",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "https://auralane-your-e-commerce.vercel.app/",
    githubUrl: "https://github.com/vidhi3000/Auralane-your-e-commerce",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
    techStack: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://project-harmony-main.vercel.app/",
    githubUrl: "https://github.com/vidhi3000/project-harmony-main",
  },
  {
    title: "Learning Progress Tracker",
    description:
      "A learning progress tracker app that helps students monitor their educational milestones, track achievements, and visualize progress over time.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    techStack: ["React", "TypeScript", "REST API", "CSS3"],
    liveUrl: "https:/skillforge-sandy.vercel.app/",
    githubUrl: "https://github.com/vidhi3000/skillforge",
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my frontend development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
