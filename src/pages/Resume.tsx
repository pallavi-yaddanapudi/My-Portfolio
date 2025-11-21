import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-lg text-muted-foreground">
              Full-Stack Developer | Java | DSA
            </p>
            <Button 
              size="lg" 
              className="shadow-elegant hover:shadow-glow transition-all"
              asChild
            >
              <a href="/Pallavi_Yaddanapudi_Resume.pdf" download="Yaddanapudi_Pallavi_Resume.pdf">
                <Download className="mr-2 w-4 h-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
