import {
  Code2,
  FileCode,
  Layers,
  Database,
  Palette,
  Smartphone,
  GitBranch,
  Braces,
} from "lucide-react";
import SkillBadge from "./SkillBadge";

const skills = [
  { name: "HTML5", icon: <Code2 size={20} /> },
  { name: "CSS3", icon: <Palette size={20} /> },
  { name: "JavaScript", icon: <Braces size={20} /> },
  { name: "TypeScript", icon: <FileCode size={20} /> },
  { name: "React.js", icon: <Layers size={20} /> },
  { name: "Redux Toolkit", icon: <Layers size={20} /> },
  { name: "Supabase", icon: <Database size={20} /> },
  { name: "Tailwind CSS", icon: <Palette size={20} /> },
  { name: "Responsive Design", icon: <Smartphone size={20} /> },
  { name: "Git & GitHub", icon: <GitBranch size={20} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <SkillBadge name={skill.name} icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
