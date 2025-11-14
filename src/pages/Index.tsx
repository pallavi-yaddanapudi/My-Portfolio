import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  GitBranch, 
  Terminal,
  Cpu,
  Layout,
  Server,
  FileCode,
  Braces,
  Lock,
  ExternalLink,
  Download,
  Mail,
  Github,
  Linkedin
} from "lucide-react";

const Index = () => {
  const skills = {
    languages: [
      { name: "Java", icon: Code2 },
      { name: "JavaScript", icon: FileCode },
      { name: "Python", icon: Terminal },
    ],
    frontend: [
      { name: "HTML", icon: Layout },
      { name: "CSS", icon: Layout },
      { name: "React", icon: Braces },
      { name: "Bootstrap", icon: Layout },
      { name: "Tailwind CSS", icon: Layout },
      { name: "Redux", icon: Database },
    ],
    backend: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "REST APIs", icon: Globe },
    ],
    databases: [
      { name: "MongoDB", icon: Database },
      { name: "SQL", icon: Database },
    ],
    tools: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: Code2 },
      { name: "Docker", icon: Server },
      { name: "Hoppscotch", icon: Globe },
    ],
    core: [
      { name: "DSA", icon: Cpu },
      { name: "OS", icon: Terminal },
      { name: "CN", icon: Globe },
      { name: "DBMS", icon: Database },
      { name: "Authentication (JWT & bcrypt)", icon: Lock },
    ],
  };

  const projects = [
    {
      title: "Learnify",
      description: "MERN Stack Learning Management System",
      features: [
        "Role-based login",
        "Course management",
        "Enrollment tracking",
        "Stripe payments",
        "Responsive UI with React, Tailwind CSS, RTK Query"
      ],
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "RTK Query"],
      link: "https://learnify-five-pied.vercel.app/",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary-glow) / 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.15) 0%, transparent 50%)`
        }}></div>
        
        <div className="container max-w-6xl relative z-10 animate-fade-in">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                Full-Stack Developer
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-scale-in">
              Yaddanapudi Pallavi
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Full-Stack Developer (MERN) | Java | Python
            </p>
            
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable applications and solving real-world problems through code.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="hover:border-primary hover:text-primary transition-all duration-300">
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 border-2 animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-foreground/90 leading-relaxed text-center max-w-4xl mx-auto">
                I am an enthusiastic Computer Science student with strong knowledge of Java, Python, and full-stack development. 
                I specialize in building scalable web applications using the MERN stack, RESTful APIs, and optimized database systems. 
                I enjoy solving complex problems and continuously improving my technical abilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-card/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Languages */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.languages.map((skill) => (
                  <Card key={skill.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2">
                    <CardContent className="p-6 flex items-center gap-3">
                      <skill.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Frontend</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.frontend.map((skill) => (
                  <Card key={skill.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2">
                    <CardContent className="p-6 flex items-center gap-3">
                      <skill.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Backend</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.backend.map((skill) => (
                  <Card key={skill.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2">
                    <CardContent className="p-6 flex items-center gap-3">
                      <skill.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Databases</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.databases.map((skill) => (
                  <Card key={skill.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2">
                    <CardContent className="p-6 flex items-center gap-3">
                      <skill.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.tools.map((skill) => (
                  <Card key={skill.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2">
                    <CardContent className="p-6 flex items-center gap-3">
                      <skill.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Core CS */}
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Core CS & Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.core.map((skill) => (
                  <Card key={skill.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2">
                    <CardContent className="p-6 flex items-center gap-3">
                      <skill.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 border-2 group animate-scale-in">
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div className="md:w-3/5">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-3xl mb-2 text-primary">{project.title}</CardTitle>
                          <CardDescription className="text-base">{project.description}</CardDescription>
                        </div>
                        <Button size="icon" variant="ghost" className="hover:text-primary" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-foreground/80 flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full md:w-auto shadow-elegant hover:shadow-glow" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-card/30">
        <div className="container max-w-6xl text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Yaddanapudi Pallavi. Built with React & Tailwind CSS.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
