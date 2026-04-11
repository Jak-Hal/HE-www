import { motion } from "motion/react";
import { Settings, Zap, Microscope, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesProps {
  lang: "en" | "sv";
}

export default function Services({ lang }: ServicesProps) {
  const t = {
    en: {
      title: "Our Expertise",
      heading: <>Engineering <span className="text-primary">Solutions</span> for Complex Challenges.</>,
      subheading: "We provide specialized services across multiple engineering disciplines, focusing on innovation and operational excellence.",
      services: [
        {
          title: "Mechanical Engineering",
          description: "• High-precision CAD modeling\n• Technical drawings\n• Photorealistic renders\n• Design for manufacturing",
          icon: Settings,
          color: "text-primary",
        },
        {
          title: "Technical Consultancy",
          description: "• Complex problem solving\n• Technology stack optimization\n• Technical feasibility studies",
          icon: Microscope,
          color: "text-purple-500",
        },
        {
          title: "Rapid Prototyping",
          description: "• Functional prototypes in Luleå\n• High-fidelity mock-ups\n• Scale models\n• Small series production",
          icon: Rocket,
          color: "text-orange-500",
        },
        {
          title: "On-Demand Manufacturing",
          description: "• 3D printing Luleå\n• CNC milling\n• Laser engraving\n• Single parts or small batches",
          icon: Zap,
          color: "text-yellow-500",
        },
      ]
    },
    sv: {
      title: "Vår expertis",
      heading: <>Tekniska <span className="text-primary">lösningar</span> för komplexa utmaningar.</>,
      subheading: "Vi erbjuder specialiserade tjänster inom flera ingenjörsdiscipliner, med fokus på innovation och operativ excellens.",
      services: [
        {
          title: "Mekanisk konstruktion",
          description: "• CAD-modellering med hög precision\n• Tekniska ritningar\n• Fotorealistiska renderingar\n• Konstruktion för tillverkning",
          icon: Settings,
          color: "text-primary",
        },
        {
          title: "Teknisk konsultation",
          description: "• Komplex problemlösning\n• Optimering av teknikstack\n• Tekniska genomförbarhetsstudier",
          icon: Microscope,
          color: "text-purple-500",
        },
        {
          title: "Snabb prototypframtagning",
          description: "• Funktionella prototyper i Luleå\n• Högkvalitativa modeller\n• Skalmodeller\n• Småserieproduktion",
          icon: Rocket,
          color: "text-orange-500",
        },
        {
          title: "On-Demand tillverkning",
          description: "• 3D-printing i Luleå\n• CNC-fräsning\n• Lasergravyr\n• Enstaka delar eller små serier",
          icon: Zap,
          color: "text-yellow-500",
        },
      ]
    }
  }[lang];

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">{t.title}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
              {t.heading}
            </h3>
          </div>
          <p className="text-muted-foreground max-w-md text-right hidden md:block">
            {t.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:border-primary/50 transition-all duration-300 bg-background/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl tracking-tight uppercase">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed whitespace-pre-line">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
