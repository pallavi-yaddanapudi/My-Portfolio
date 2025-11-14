import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-lg text-muted-foreground">
              Full-Stack Developer | MERN | Java | Python
            </p>
            <Button size="lg" className="shadow-elegant hover:shadow-glow transition-all">
              <Download className="mr-2 w-4 h-4" />
              Download PDF
            </Button>
          </div>

          {/* Education */}
          <Card className="glass border-glass animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">B.Tech in Computer Science Engineering</h3>
                <p className="text-muted-foreground">RGUKT RK Valley</p>
                <p className="text-sm">CGPA: <span className="font-bold text-primary">9.0</span></p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Pre-University Course (PUC)</h3>
                <p className="text-muted-foreground">RGUKT RK Valley</p>
                <p className="text-sm">CGPA: <span className="font-bold text-primary">9.57</span></p>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="glass border-glass animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                Projects & Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Learnify - Learning Management System</h3>
                <p className="text-sm text-muted-foreground">MERN Stack Developer</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Developed a full-stack LMS with role-based authentication</li>
                  <li>Implemented course management and enrollment tracking</li>
                  <li>Integrated Stripe payment processing</li>
                  <li>Built responsive UI using React, Tailwind CSS, and RTK Query</li>
                  <li>Created RESTful APIs with Node.js and Express</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skills Summary */}
          <Card className="glass border-glass animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Programming Languages</h4>
                  <p className="text-sm text-muted-foreground">Java, JavaScript, Python</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Frontend Development</h4>
                  <p className="text-sm text-muted-foreground">React, HTML, CSS, Tailwind, Bootstrap, Redux</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Backend Development</h4>
                  <p className="text-sm text-muted-foreground">Node.js, Express.js, REST APIs</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Databases</h4>
                  <p className="text-sm text-muted-foreground">MongoDB, SQL</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Tools & Technologies</h4>
                  <p className="text-sm text-muted-foreground">Git, GitHub, Docker, VS Code, Hoppscotch</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Computer Science Fundamentals</h4>
                  <p className="text-sm text-muted-foreground">DSA, OS, CN, DBMS, Authentication (JWT + bcrypt)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Resume;
