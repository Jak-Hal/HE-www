import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background bg-pattern selection:bg-primary selection:text-primary-foreground">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Marquee Section */}
        <div className="py-12 border-y border-border overflow-hidden bg-muted/20">
          <motion.div 
            className="flex whitespace-nowrap gap-12 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-4xl md:text-6xl font-bold tracking-tighter uppercase opacity-10">Robotics</span>
                <span className="text-4xl md:text-6xl font-bold tracking-tighter uppercase opacity-10 text-primary">Precision</span>
                <span className="text-4xl md:text-6xl font-bold tracking-tighter uppercase opacity-10">Innovation</span>
                <span className="text-4xl md:text-6xl font-bold tracking-tighter uppercase opacity-10 text-primary">Engineering</span>
              </div>
            ))}
          </motion.div>
        </div>

        <Services />
        <About />
        
        {/* Project Teaser Section */}
        <section id="projects" className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Selected Works</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Autonomous Rover V2", category: "Robotics", img: "https://picsum.photos/seed/rover/800/600" },
                { title: "Industrial Arm Controller", category: "Automation", img: "https://picsum.photos/seed/arm/800/600" },
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-border cursor-pointer"
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">{project.category}</div>
                    <div className="text-2xl font-bold text-white tracking-tight uppercase">{project.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
