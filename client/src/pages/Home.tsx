import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterPhone, setNewsletterPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Gracias por tu mensaje! Te contactaremos pronto.");

    await fetch(
      "https://trucare-backend.netlify.app/.netlify/functions/sendEmail",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: formData.email,
          subject: "Welcome!",
          text: "Hola desde TruCare 🎉",
        }),
      }
    );
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/trucare-carla/30min", "_blank");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail || newsletterPhone) {
      toast.success("¡Gracias! Te enviaremos nuestras promociones.");
      setNewsletterEmail("");
      setNewsletterPhone("");
    }
  };

  const tratamientosFaciales = [
    { nombre: "Valoración Gratuita", desc: "Análisis completo de tu piel" },
    {
      nombre: "Dermoconsulta + Rutina Facial",
      desc: "Diagnóstico y protocolo personalizado",
    },
    { nombre: "Peeling Químico", desc: "Renovación celular profunda" },
    { nombre: "Microneedling", desc: "Estimulación de colágeno natural" },
    { nombre: "Rellenos con Ácido Hialurónico", desc: "Volumen y definición" },
    { nombre: "Mesoterapia Facial", desc: "Hidratación y nutrición intensiva" },
    { nombre: "Skinbooster", desc: "Luminosidad y firmeza" },
    { nombre: "Inductores de Colágeno", desc: "Bioestimulación profunda" },
    { nombre: "Exosomas Faciales", desc: "Regeneración celular avanzada" },
    { nombre: "Hilos Tensores", desc: "Lifting no invasivo" },
    { nombre: "Plasmapen", desc: "Rejuvenecimiento plasma" },
  ];

  const tratamientosCorporales = [
    { nombre: "Mesoterapia Corporal", desc: "Tratamiento localizado" },
    { nombre: "Intralipoterapia", desc: "Reducción de grasa localizada" },
    { nombre: "Presoterapia", desc: "Drenaje y circulación" },
    { nombre: "Indiba", desc: "Radiofrecuencia corporal" },
  ];

  const tratamientosCapilares = [
    { nombre: "Diagnóstico Capilar Gratuito", desc: "Análisis especializado" },
    {
      nombre: "Tratamientos para Alopecias",
      desc: "Soluciones personalizadas",
    },
    { nombre: "Mesoterapia Capilar", desc: "Nutrición y regeneración" },
    { nombre: "Exosomas Capilares", desc: "Tecnología regenerativa avanzada" },
  ];

  const testimonios = [
    {
      nombre: "María García",
      rating: 5,
      texto:
        "Resultados increíbles. Carla es muy profesional y atenta a los detalles.",
    },
    {
      nombre: "Laura Martínez",
      rating: 5,
      texto:
        "El mejor tratamiento facial que he recibido. Se nota la diferencia.",
    },
    {
      nombre: "Sofía López",
      rating: 5,
      texto: "Muy recomendable. Ambiente acogedor y resultados naturales.",
    },
  ];

  const faqs = [
    {
      pregunta:
        "¿Cuál es el tiempo de recuperación después de los tratamientos?",
      respuesta:
        "El tiempo de recuperación varía según el tratamiento. Los tratamientos no invasivos como la mesoterapia tienen recuperación inmediata. Los peelings químicos pueden dejar la piel sensible 3-5 días. El microneedling requiere 24-48 horas de cuidados especiales. Te asesoraré sobre los cuidados específicos después de tu tratamiento.",
    },
    {
      pregunta: "¿Cuántas sesiones necesito para ver resultados?",
      respuesta:
        "Los resultados dependen del tratamiento y tu tipo de piel. Algunos tratamientos como el peeling químico muestran resultados inmediatos. Otros como el microneedling o la mesoterapia requieren 3-6 sesiones para resultados óptimos. En tu consulta gratuita evaluaré tu caso específico.",
    },
    {
      pregunta: "¿Es seguro para todos los tipos de piel?",
      respuesta:
        "Sí, todos nuestros tratamientos están diseñados para ser seguros. Como enfermera dermoestética, realizo un diagnóstico completo de tu piel para personalizar cada protocolo. Algunos tratamientos pueden adaptarse según tu tipo de piel, tono y sensibilidad.",
    },
    {
      pregunta: "¿Cuál es la diferencia entre los tratamientos faciales?",
      respuesta:
        "Cada tratamiento tiene un objetivo específico. El peeling químico renueva la piel, el microneedling estimula colágeno, los rellenos añaden volumen, la mesoterapia hidrata profundamente. En tu consulta te recomendaré el más adecuado para tus necesidades.",
    },
    {
      pregunta: "¿Hay contraindicaciones para algún tratamiento?",
      respuesta:
        "Algunos tratamientos no son recomendables durante el embarazo, con ciertas medicaciones o condiciones de piel activa. Por eso es importante tu consulta inicial donde evaluamos tu historial médico completo.",
    },
    {
      pregunta: "¿Cuál es el precio de los tratamientos?",
      respuesta:
        "Los precios varían según el tratamiento y la zona a tratar. Ofrecemos paquetes con descuento para múltiples sesiones. Consulta nuestras promociones activas o contacta para un presupuesto personalizado.",
    },
  ];

  const promociones = [
    {
      titulo: "Primera Consulta Gratuita",
      descripcion:
        "Valoración completa, análisis de piel y plan de tratamiento personalizado sin costo.",
      descuento: "Gratis",
    },
    {
      titulo: "Pack de 5 Sesiones",
      descripcion:
        "20% de descuento en cualquier tratamiento al contratar 5 o más sesiones.",
      descuento: "20% OFF",
    },
    {
      titulo: "Tratamiento de Prueba",
      descripcion:
        "Primera sesión de cualquier tratamiento con 15% de descuento para nuevos pacientes.",
      descuento: "15% OFF",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage: "url('/images/spa-treatment.jpg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60"></div>
        <div className="container relative z-10 text-center text-background py-20">
          <img
            src="/images/trucare-logo.png"
            alt="TruCare Dermoestética"
            className="h-20 md:h-28 w-auto mx-auto mb-8 filter brightness-0 invert"
          />
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
            Dermoestética con
            <br />
            <span className="font-semibold">Resultados Naturales</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light opacity-95">
            Antiaging avanzado y tratamientos personalizados basados en ciencia,
            cuidado real y enfoque en tu bienestar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-sm font-medium"
              onClick={handleCalendlyClick}
            >
              Coge tu Cita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 text-background border-background hover:bg-background hover:text-foreground text-lg px-8 py-6 rounded-sm font-medium"
              onClick={() =>
                document
                  .getElementById("tratamientos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Descubre Tratamientos
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Mí - Manifiesto */}
      <section id="sobre-mi" className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Foto */}
            <div className="order-2 md:order-1">
              <div className="relative h-[600px] rounded-sm overflow-hidden shadow-lg">
                <img
                  src="/images/carla-profile.jpg"
                  alt="Carla - Enfermera Dermoestética"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-foreground">
                Sobre <span className="font-semibold">Mí</span>
              </h2>

              <div className="space-y-6 mb-8">
                <p className="text-lg text-foreground/90 leading-relaxed font-light">
                  Soy enfermera especializada en dermoestética y creadora de
                  Trucare, un espacio donde combino ciencia, salud y belleza
                  para lograr resultados reales y naturales.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed font-light">
                  Mi experiencia en el ámbito sanitario me permite trabajar cada
                  piel desde un enfoque seguro, responsable y basado en la
                  evidencia, respetando siempre la fisiología y las necesidades
                  individuales de cada persona.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed font-light">
                  A lo largo de mi carrera he acompañado a pacientes en la
                  mejora de su salud cutánea, integrando protocolos efectivos
                  tanto en rutinas domiciliarias como en tratamientos en cabina.
                  Mi objetivo es que entiendas tu piel, sepas cuidarla y
                  disfrutes del proceso.
                </p>
              </div>

              <div className="space-y-6 pt-8 border-t border-border">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    La Filosofía de Trucare
                  </h3>
                  <p className="text-foreground/90 font-light mb-6">
                    Trucare nace de la idea de crear un concepto de estética
                    honesta, actual y cercana, donde cada tratamiento se
                    personaliza al detalle.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Ciencia
                        </h4>
                        <p className="text-sm text-foreground/80">
                          Protocolos basados en evidencia y formación como
                          enfermera dermoestética
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Cuidado Real
                        </h4>
                        <p className="text-sm text-foreground/80">
                          Tratamientos personalizados, seguros y adaptados a tu
                          estilo de vida
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Naturalidad
                        </h4>
                        <p className="text-sm text-foreground/80">
                          Potenciar tu belleza, no transformarla
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promociones Activas */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-foreground">
              Promociones <span className="font-semibold">Activas</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light">
              Aprovecha nuestras ofertas especiales y comienza tu transformación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {promociones.map((promo, index) => (
              <Card
                key={index}
                className="border border-border hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="h-2 bg-accent"></div>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-accent mb-4">
                    {promo.descuento}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {promo.titulo}
                  </h3>
                  <p className="text-foreground/80 mb-6 font-light">
                    {promo.descripcion}
                  </p>
                  <Button
                    onClick={handleCalendlyClick}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm font-medium"
                  >
                    Reservar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tratamientos */}
      <section id="tratamientos" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-foreground">
              Nuestros <span className="font-semibold">Tratamientos</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light">
              Soluciones personalizadas basadas en diagnósticos precisos y
              tecnología avanzada
            </p>
          </div>

          {/* Tratamientos Faciales */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-2 text-foreground">
              Tratamientos Faciales
            </h3>
            <p className="text-foreground/80 mb-8 font-light">
              Rejuvenecimiento y revitalización con protocolos personalizados
              que respetan la fisiología de tu piel
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {tratamientosFaciales.map((tratamiento, index) => (
                <Card
                  key={index}
                  className="border border-border hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      {tratamiento.nombre}
                    </h4>
                    <p className="text-sm text-foreground/80 font-light">
                      {tratamiento.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tratamientos Corporales */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-2 text-foreground">
              Tratamientos Corporales
            </h3>
            <p className="text-foreground/80 mb-8 font-light">
              Moldeado, tonificación y tratamientos localizados con tecnología
              de última generación
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {tratamientosCorporales.map((tratamiento, index) => (
                <Card
                  key={index}
                  className="border border-border hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      {tratamiento.nombre}
                    </h4>
                    <p className="text-sm text-foreground/80 font-light">
                      {tratamiento.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tratamientos Capilares */}
          <div>
            <h3 className="text-3xl font-semibold mb-2 text-foreground">
              Enfermería Estética Avanzada
            </h3>
            <p className="text-foreground/80 mb-8 font-light">
              Soluciones integrales para la salud capilar y tratamientos
              especializados
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {tratamientosCapilares.map((tratamiento, index) => (
                <Card
                  key={index}
                  className="border border-border hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      {tratamiento.nombre}
                    </h4>
                    <p className="text-sm text-foreground/80 font-light">
                      {tratamiento.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={handleCalendlyClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-sm font-medium inline-flex items-center gap-2"
            >
              Reserva tu Consulta
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-foreground">
              Lo que dicen mis <span className="font-semibold">Pacientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonios.map((testimonio, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-4 font-light italic">
                    "{testimonio.texto}"
                  </p>
                  <p className="font-semibold text-foreground">
                    {testimonio.nombre}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?q=TruCare+Dermoest%C3%A9tica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-sm font-medium transition-colors"
            >
              Ver todas las reseñas en Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-foreground">
              Preguntas <span className="font-semibold">Frecuentes</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light">
              Resuelve tus dudas sobre nuestros tratamientos
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border border-border overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors text-left"
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.pregunta}
                  </h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 border-t border-border">
                    <p className="text-foreground/80 font-light leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-2">
              Recibe nuestras <span className="font-semibold">Promociones</span>
            </h2>
            <p className="text-primary-foreground/90 mb-8 font-light">
              Suscríbete para estar al tanto de nuestras ofertas exclusivas
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-sm"
                />
                <Input
                  type="tel"
                  value={newsletterPhone}
                  onChange={e => setNewsletterPhone(e.target.value)}
                  placeholder="+34 614 518 135"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm font-medium py-6"
              >
                Suscribirse
              </Button>
              <p className="text-xs text-primary-foreground/80 font-light">
                ✓ Prometo que no enviaré spam. Respeto tu privacidad.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-foreground">
              Ponte en <span className="font-semibold">Contacto</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light">
              Estamos aquí para responder tus preguntas y ayudarte a encontrar
              el tratamiento perfecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulario */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-light">
                  Envíanos un <span className="font-semibold">Mensaje</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium mb-2"
                    >
                      Nombre Completo
                    </label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={e =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      required
                      placeholder="Tu nombre"
                      className="rounded-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      placeholder="tu@email.com"
                      className="rounded-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium mb-2"
                    >
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={e =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      required
                      placeholder="+34 614 518 135"
                      className="rounded-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium mb-2"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={e =>
                        setFormData({ ...formData, mensaje: e.target.value })
                      }
                      required
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={4}
                      className="rounded-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm font-medium"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de Contacto */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-light">
                    Información de{" "}
                    <span className="font-semibold">Contacto</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Dirección
                      </h4>
                      <p className="text-foreground/80 text-sm font-light">
                        134-136, Rbla. de Sta. Cruz
                        <br />
                        38001 Santa Cruz de Tenerife
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Teléfono
                      </h4>
                      <a
                        href="tel:+34614518135"
                        className="text-foreground/80 hover:text-primary text-sm font-light"
                      >
                        +34 614 518 135
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:trucare.carla@gmail.com"
                        className="text-foreground/80 hover:text-primary text-sm font-light"
                      >
                        trucare.carla@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleCalendlyClick}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 rounded-sm font-medium text-lg"
              >
                Coge tu Cita
              </Button>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-16 rounded-sm overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5123456789!2d-16.2549!3d28.3881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cc5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2s134-136%20Rbla.%20de%20Sta.%20Cruz%2C%2038001%20Santa%20Cruz%20de%20Tenerife!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación de TruCare Dermoestética"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
