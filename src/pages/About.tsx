import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Layout, Server, Database, Wrench, BookOpen, GraduationCap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Languages",
      items: ["Java", "JavaScript", "Python"],
    },
    {
      icon: Layout,
      title: "Frontend",
      items: ["React", "HTML", "CSS", "Tailwind", "Bootstrap", "Redux"],
    },
    {
      icon: Server,
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      icon: Database,
      title: "Databases",
      items: ["MongoDB", "SQL"],
    },
    {
      icon: Wrench,
      title: "Tools",
      items: ["Git", "GitHub", "Docker", "VS Code", "Hoppscotch"],
    },
    {
      icon: BookOpen,
      title: "Core CS",
      items: ["DSA", "OS", "CN", "DBMS", "Authentication (JWT + bcrypt)"],
    },
  ];

  const education = [
    {
      degree: "B.Tech CSE",
      institution: "RGUKT RK Valley",
      cgpa: "9.0",
    },
    {
      degree: "PUC",
      institution: "RGUKT RK Valley",
      cgpa: "9.57",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I am an enthusiastic Computer Science student specializing in MERN full-stack development, 
              Java, Python, and scalable web application design. I enjoy solving complex problems and 
              continuously improving my technical abilities.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass glass-hover border-glass animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        {skill.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm bg-muted/50 text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="glass glass-hover border-glass animate-fade-in"
                  style={{ animationDelay: `${(skills.length + index) * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <GraduationCap className="w-6 h-6 text-secondary" />
                      </div>
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-foreground font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">
                      CGPA: <span className="font-bold text-primary">{edu.cgpa}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
