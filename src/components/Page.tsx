import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

interface PageProps {
  lang: "en" | "sv";
}

export default function Page({ lang }: PageProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const t = {
    en: ["Prototyping", "Precision", "Innovation", "Engineering"],
    sv: ["Prototypframtagning", "Precision", "Innovation", "Ingenjörskonst"]
  }[lang];

  return (
    <div className="min-h-screen bg-background bg-pattern selection:bg-primary selection:text-primary-foreground">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar lang={lang} />
      
      <main>
        <Hero lang={lang} />
        
        {/* Marquee Section */}
        <div className="py-12 border-y border-border overflow-hidden bg-muted/20">
          <motion.div 
            className="flex whitespace-nowrap gap-12 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                {t.map((word, idx) => (
                  <span key={idx} className={`text-4xl md:text-6xl font-bold tracking-tighter uppercase opacity-10 ${idx % 2 !== 0 ? 'text-primary' : ''}`}>
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <Services lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
