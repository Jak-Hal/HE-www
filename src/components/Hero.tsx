import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroProps {
  lang: "en" | "sv" | "cs";
}

export default function Hero({ lang }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const t = {
    en: {
      badge: "Available for new projects",
      heading: <>From Idea to <span className="text-primary">Functional</span> Prototype.</>,
      description: (
        <>
          We specialize in rapid prototyping, 3D printing, and CNC milling in <strong>Luleå & Norrbotten</strong>. 
          Tailored engineering solutions for startups and innovators in northern Sweden.
        </>
      ),
      contactBtn: "Contact",
      precision: "Precision: 0.001mm",
      layer: "Layer: SKETCH_01",
      status: "Status: ACTIVE"
    },
    sv: {
      badge: "Tillgänglig för nya projekt",
      heading: <>Från idé till <span className="text-primary">funktionell</span> prototyp.</>,
      description: (
        <>
          Vi specialiserar oss på snabb prototypframtagning, 3D-printing och CNC-fräsning i <strong>Luleå & Norrbotten</strong>. 
          Skräddarsydda tekniska lösningar för startups och innovatörer i norra Sverige.
        </>
      ),
      contactBtn: "Kontakt",
      precision: "Precision: 0.001mm",
      layer: "Lager: SKISS_01",
      status: "Status: AKTIV"
    },
    cs: {
      badge: "K dispozici pro nové projekty",
      heading: <>Od nápadu k <span className="text-primary">funkčnímu</span> prototypu.</>,
      description: (
        <>
          Specializujeme se na rychlé prototypování, 3D tisk a CNC frézování v <strong>Luleå a Norrbottenu</strong>. 
          Technická řešení na míru pro startupy a inovátory v severním Švédsku.
        </>
      ),
      contactBtn: "Kontakt",
      precision: "Přesnost: 0.001mm",
      layer: "Vrstva: SKICA_01",
      status: "Stav: AKTIVNÍ"
    }
  }[lang];

  const objects = [
    {
      id: "CIR-01",
      name: { en: "Circle Sketch", sv: "Cirkelskiss", cs: "Náčrt kruhu" }[lang],
      render: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/40">
          <motion.circle 
            cx="50" cy="50" r="35"
            fill="none" stroke="currentColor" strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line 
            x1="15" y1="50" x2="85" y2="50"
            stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
          <motion.text 
            x="50" y="45" textAnchor="middle" 
            className="text-[4px] font-mono fill-primary/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Ø 70.00mm
          </motion.text>
        </svg>
      )
    },
    {
      id: "RECT-02",
      name: { en: "Square Sketch", sv: "Kvadratisk skiss", cs: "Náčrt čtverce" }[lang],
      render: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/40">
          <motion.rect 
            x="20" y="20" width="60" height="60"
            fill="none" stroke="currentColor" strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line 
            x1="20" y1="15" x2="80" y2="15"
            stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
          <motion.text 
            x="50" y="12" textAnchor="middle" 
            className="text-[4px] font-mono fill-primary/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            L: 60.00
          </motion.text>
        </svg>
      )
    },
    {
      id: "TRI-03",
      name: { en: "Triangle Sketch", sv: "Triangelskiss", cs: "Náčrt trojúhelníku" }[lang],
      render: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/40">
          <motion.path 
            d="M 50 15 L 85 75 L 15 75 Z"
            fill="none" stroke="currentColor" strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line 
            x1="50" y1="15" x2="50" y2="75"
            stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
          <motion.text 
            x="55" y="45" textAnchor="start" 
            className="text-[4px] font-mono fill-primary/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            H: 60.00
          </motion.text>
        </svg>
      )
    },
    {
      id: "HEX-04",
      name: { en: "Hexagon Sketch", sv: "Hexagonskiss", cs: "Náčrt hexagonu" }[lang],
      render: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/40">
          <motion.path 
            d="M 50 15 L 80 32.5 L 80 67.5 L 50 85 L 20 67.5 L 20 32.5 Z"
            fill="none" stroke="currentColor" strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line 
            x1="20" y1="50" x2="80" y2="50"
            stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
          <motion.text 
            x="50" y="45" textAnchor="middle" 
            className="text-[4px] font-mono fill-primary/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            W: 60.00
          </motion.text>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % objects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [objects.length]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t.badge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 uppercase">
              {t.heading}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              {t.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-mono uppercase tracking-tighter group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.contactBtn}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Abstract Engineering Graphic */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl border border-primary/10 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-12">
                <div className="absolute inset-0 grid-lines opacity-40" />
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <div className="absolute top-0 left-0 text-[10px] font-mono text-primary/30 uppercase tracking-widest">
                      Ref: {objects[activeIndex].id}
                    </div>
                    <div className="absolute top-0 right-0 text-[10px] font-mono text-primary/30 uppercase tracking-widest">
                      {objects[activeIndex].name}
                    </div>
                    
                    <div className="w-full h-full max-w-[80%] max-h-[80%]">
                      {objects[activeIndex].render()}
                    </div>

                    {/* Technical Metadata */}
                    <div className="absolute bottom-0 left-0 flex flex-col gap-1">
                      <div className="text-[8px] font-mono text-primary/40 uppercase">{t.layer}</div>
                      <div className="text-[8px] font-mono text-primary/40 uppercase">{t.status}</div>
                    </div>
                    <div className="absolute bottom-0 right-0 text-[8px] font-mono text-primary/40 uppercase">
                      {t.precision}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Decorative Corners */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
