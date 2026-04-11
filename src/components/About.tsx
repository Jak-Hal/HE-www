import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import profileImg from "@/assets/Jakub-Haluska-web.jpg";

interface AboutProps {
  lang: "en" | "sv" | "cs";
}

export default function About({ lang }: AboutProps) {
  const t = {
    en: {
      title: "Who Am I?",
      heading: <>Turning <span className="text-primary">Concepts</span> into Reality.</>,
      description: (
        <>
          <p>
            Jakub is a Czech-made Mechanical Engineer based in <strong>Luleå, Norrbotten</strong>, who turns ideas into 
            real things. Through Haluska Engineering AB, he helps companies and individuals 
            bring their concepts to reality using 3D CAD, 3D printing, CNC milling, and beyond.
          </p>
        </>
      ),
      skills: ["Prototyping", "3D Printing", "CNC Milling", "CAD/CAM", "Laser Engraving", "Metal Fab", "R&D"],
      role: "Mechanical Engineer and Founder"
    },
    sv: {
      title: "Vem är jag?",
      heading: <>Förvandlar <span className="text-primary">koncept</span> till verklighet.</>,
      description: (
        <>
          <p>
            Jakub är en tjeckisk mekanisk ingenjör baserad i <strong>Luleå, Norrbotten</strong>, som förvandlar idéer till 
            verkliga ting. Genom Haluska Engineering AB hjälper han företag och privatpersoner 
            att förverkliga sina koncept med hjälp av 3D CAD, 3D-printing, CNC-fräsning och mer därtill.
          </p>
        </>
      ),
      skills: ["Prototypframtagning", "3D-printing", "CNC-fräsning", "CAD/CAM", "Lasergravyr", "Metallbearbetning", "FoU"],
      role: "Mekanisk ingenjör och grundare"
    },
    cs: {
      title: "Kdo jsem?",
      heading: <>Proměňuji <span className="text-primary">koncepty</span> v realitu.</>,
      description: (
        <>
          <p>
            Jakub je strojní inženýr "Czech-made" působící v <strong>Luleå v Norrbottenu</strong>, který mění nápady ve 
            skutečné věci. Prostřednictvím Haluska Engineering AB pomáhá firmám i jednotlivcům 
            přivádět jejich koncepty k životu pomocí 3D CAD, 3D tisku, CNC frézování a dalších technologií.
          </p>
        </>
      ),
      skills: ["Prototypování", "3D tisk", "CNC frézování", "CAD/CAM", "Laserové gravírování", "Kovoobrábění", "VaV"],
      role: "Strojní inženýr a zakladatel"
    }
  }[lang];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-border group">
              <img
                src={profileImg}
                alt="Jakub Haluska"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 bg-background/40 backdrop-blur-md border border-white/10 rounded-2xl">
                  <h4 className="text-lg font-bold tracking-tight">Jakub Haluska</h4>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">{t.title}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
              {t.heading}
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {t.description}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {t.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-1.5 font-mono text-xs uppercase tracking-wider">
                  {skill}
                </Badge>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
