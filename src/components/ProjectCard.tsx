import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 bg-accent text-accent-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="default" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
