import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Learnify",
      subtitle: "Learning Management System",
      description: "A comprehensive MERN stack Learning Management System with role-based authentication, course management, enrollment tracking, and integrated Stripe payment processing.",
      features: [
        "Role-based login system",
        "Course creation and management",
        "Student enrollment tracking",
        "Stripe payment integration",
        "Responsive UI design",
      ],
      tech: ["React", "Tailwind CSS", "RTK Query", "Node.js", "Express", "MongoDB"],
      liveLink: "https://learnify-five-pied.vercel.app/",
      githubLink: "#",
      image: "/placeholder.svg",
    },
    {
      title: "Wanderlust",
      subtitle: "Travel Accommodation Platform",
      description: "A full-stack travel accommodation platform enabling users to explore, book and review stays with integrated map support.",
      features: [
        "RESTful APIs and modular backend architecture",
        "Robust data management with MongoDB",
        "Responsive Bootstrap components",
        "Client-side validation",
        "Dynamic content rendering",
        "Integrated map support",
      ],
      tech: ["Node.js", "Express", "MongoDB", "Bootstrap", "JavaScript"],
      liveLink: "https://wanderlust-6mf3.onrender.com/listings",
      githubLink: "#",
      image: "/placeholder.svg",
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
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of projects showcasing my skills in full-stack development, 
              UI/UX design, and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass glass-hover border-glass overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <CardHeader className="p-0">
                      <CardTitle className="text-3xl">{project.title}</CardTitle>
                      <CardDescription className="text-lg">{project.subtitle}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-2">
                        <h4 className="font-semibold">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="glass">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button 
                          asChild 
                          className="shadow-elegant hover:shadow-glow transition-all"
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          asChild
                          className="glass glass-hover"
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 w-4 h-4" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Projects;
