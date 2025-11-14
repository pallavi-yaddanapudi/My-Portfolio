import { Link, useLocation } from "react-router-dom";
import { Home, User, FolderGit2, Mail, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/projects", label: "Projects", icon: FolderGit2 },
    { path: "/contact", label: "Contact", icon: Mail },
    { path: "/resume", label: "Resume", icon: FileText },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 shadow-elegant">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "hover:bg-muted text-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
