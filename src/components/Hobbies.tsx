import { Card } from "@/components/ui/card";
import dailyVlog from "@/assets/daily_vlog.mp4";
import promotionalVid from "@/assets/promotional_vid.mp4";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Daily Vlog",
      description: "Capturing everyday moments and sharing my journey through video. Documenting experiences, adventures, and the little things that make life interesting.",
      video: dailyVlog,
    },
    {
      title: "Promotional Content",
      description: "Creating engaging promotional videos and visual content. Combining creativity with technical skills to deliver compelling multimedia experiences.",
      video: promotionalVid,
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                <video
                  src={hobby.video}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
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
