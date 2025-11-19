import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "yaddanapudipallavi@example.com",
      href: "mailto:yaddanapudipallavi@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yaddanapudipallavi",
      href: "https://linkedin.com/in/yaddanapudipallavi",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yaddanapudipallavi",
      href: "https://github.com/yaddanapudipallavi",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Social Links */}
          <div className="max-w-2xl mx-auto space-y-6">
              <Card className="glass border-glass">
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-4 rounded-lg glass glass-hover border border-glass group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{link.label}</p>
                          <p className="text-sm text-muted-foreground break-all">
                            {link.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Availability Card */}
              <Card className="glass border-glass">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-medium">Available for opportunities</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Open to full-time roles, internships, and freelance projects
                    </p>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
