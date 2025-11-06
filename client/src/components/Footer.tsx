import { Instagram, Mail, MapPin, Phone, SquareParking } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <img
              src="/images/trucare-logo.png"
              alt="TruCare Dermoestética"
              className="h-12 w-auto mb-4"
            />
            <p className="text-primary-foreground/90 text-sm leading-relaxed mb-6">
              Dermoestética con resultados naturales y enfoque en tu bienestar.
              Ciencia, cuidado real y naturalidad en cada tratamiento.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/trucare.dermoesthetic/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-6 uppercase tracking-wider">
              Enlaces
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("tratamientos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-foreground/90 hover:text-accent transition-colors text-sm"
                >
                  Tratamientos
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("sobre-mi")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-foreground/90 hover:text-accent transition-colors text-sm"
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-foreground/90 hover:text-accent transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-6 uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/90 text-sm">
                  134-136, Rbla. de Sta. Cruz
                  <br />
                  38001 Santa Cruz de Tenerife
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <SquareParking className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/90 text-sm">
                  1h de parking gratuito en el Hotel Mencey
                </span>
              </li>
              {/* <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light">
              Estamos aquí para responder tus preguntas y ayudarte a encontrar
              el tratamiento perfecto
            </p> */}
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+34614518135"
                  className="text-primary-foreground/90 hover:text-accent transition-colors text-sm"
                >
                  +34 614 518 135
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:trucare.carla@gmail.com"
                  className="text-primary-foreground/90 hover:text-accent transition-colors text-sm"
                >
                  trucare.carla@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-xs">
            © {new Date().getFullYear()} TruCare Dermoestética. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
