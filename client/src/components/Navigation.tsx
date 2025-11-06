import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleCalendlyClick = () => {

    window.open("https://wa.link/qtz93q", "_blank");
    
    // window.open("https://calendly.com/trucare-carla/30min", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("inicio")}
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/trucare-logo.png"
                alt="TruCare Dermoestética"
                className="h-10 md:h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("tratamientos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Tratamientos
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={handleCalendlyClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium px-6 py-2 rounded-sm"
            >
              Coge tu Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("tratamientos")}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Tratamientos
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={handleCalendlyClick}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium py-2 rounded-sm"
            >
              Coge tu Cita
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
