interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-card rounded-lg border border-border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 group">
      {icon && (
        <span className="text-primary group-hover:scale-110 transition-transform duration-200">
          {icon}
        </span>
      )}
      <span className="font-medium text-foreground">{name}</span>
    </div>
  );
};

export default SkillBadge;
