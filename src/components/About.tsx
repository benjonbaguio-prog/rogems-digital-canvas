import { Card } from "@/components/ui/card";
import { User, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-primary p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <User className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi! I'm <span className="text-primary font-semibold">Rogem A. Lanuza</span>, a passionate 
              3rd-year BSIT student with a deep love for web development and creating innovative digital solutions. 
              My journey in tech has been driven by curiosity and a constant desire to learn and grow.
            </p>

            <div className="space-y-4">
              <Card className="p-4 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Education</h3>
                    <p className="text-muted-foreground">Bachelor of Science in Information Technology - 3rd Year</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Focus</h3>
                    <p className="text-muted-foreground">Web Development, UI/UX Design, and Creative Problem Solving</p>
                  </div>
                </div>
              </Card>
            </div>

            <p className="text-muted-foreground">
              I believe in creating user-friendly, aesthetically pleasing web applications that make a difference. 
              When I'm not coding, you'll find me exploring the mountains, riding my motorcycle, or diving into new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
