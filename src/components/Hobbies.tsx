import { Card } from "@/components/ui/card";
import { Mountain, Bike, Code2 } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Mountain Traveling",
      description: "Exploring scenic mountain trails and discovering breathtaking views. Nature photography and hiking are my ways to recharge and find inspiration.",
      icon: <Mountain className="w-12 h-12" />,
      color: "from-primary to-secondary",
    },
    {
      title: "Motorcycle Riding",
      description: "Feeling the freedom of the open road on two wheels. Weekend rides and motorcycle maintenance keep me grounded and excited.",
      icon: <Bike className="w-12 h-12" />,
      color: "from-secondary to-accent",
    },
    {
      title: "Coding Projects",
      description: "Building side projects and experimenting with new technologies. Learning new frameworks and contributing to open source when possible.",
      icon: <Code2 className="w-12 h-12" />,
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Hobbies & Interests
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Beyond coding, here's what keeps me inspired and energized
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, idx) => (
            <Card
              key={idx}
              className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group animate-fade-in-up text-center"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${hobby.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {hobby.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {hobby.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {hobby.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
