import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@assets/Mosaic_2026_Logo_PNG_Large_1767023913417.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/ecosystem-design", label: "Ecosystem Design" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/contact", label: "Contact" },
  ];

  const isTransparent = location === "/" && !scrolled;

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isTransparent 
          ? "bg-transparent py-4" 
          : "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-2"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Mosaic Logo" 
              className="h-10 w-auto object-contain transition-all" 
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-bold transition-colors hover:text-mosaic-blue",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background absolute w-full left-0 top-full shadow-lg py-4 px-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "block py-2 text-base font-medium",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
