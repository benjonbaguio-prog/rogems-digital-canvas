import { Card } from "@/components/ui/card";
import { Code2, Palette, Database, Globe } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="w-8 h-8" />,
      items: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
      ],
      color: "primary",
    },
    {
      category: "Backend",
      icon: <Database className="w-8 h-8" />,
      items: [
        { name: "PHP", level: 75 },
        { name: "MySQL", level: 70 },
      ],
      color: "secondary",
    },
    {
      category: "Design",
      icon: <Palette className="w-8 h-8" />,
      items: [
        { name: "Web Design", level: 85 },
        { name: "UI/UX", level: 80 },
      ],
      color: "accent",
    },
    {
      category: "Other",
      icon: <Globe className="w-8 h-8" />,
      items: [
        { name: "Git", level: 75 },
        { name: "Responsive Design", level: 90 },
      ],
      color: "primary",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skillGroup, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-${skillGroup.color} group-hover:scale-110 transition-transform duration-300`}>
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{skillGroup.category}</h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
