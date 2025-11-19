import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center floating">
            <div className="glass rounded-full p-2 shadow-glow">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="/placeholder.svg"
                  alt="Yaddanapudi Pallavi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Yaddanapudi Pallavi
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer (MERN) | Java | Python
            </p>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Building scalable apps & solving real-world problems through code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/projects">
                <Button size="lg" className="group shadow-elegant hover:shadow-glow transition-all">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass glass-hover"
                asChild
              >
                <a href="/Yaddanapudi_Pallavi_Resume.pdf" download="Yaddanapudi_Pallavi_Resume.pdf">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;
