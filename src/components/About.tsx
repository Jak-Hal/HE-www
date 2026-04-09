import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border group">
              <img
                src="https://picsum.photos/seed/engineering/800/1000"
                alt="Jakub Haluska"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 bg-background/40 backdrop-blur-md border border-white/10 rounded-2xl">
                  <h4 className="text-xl font-bold tracking-tight">Jakub Haluska</h4>
                  <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Lead Robotics Engineer</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Who Am I?</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
              Bridging <span className="text-primary">Ideas</span> and Reality.
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Jakub, the Czech-made engineer, is based in northern Sweden. I design robots for the 
                Robotics team at the Luleå University of Technology, and help companies and people to 
                transfer ideas into reality.
              </p>
              <p>
                With a deep focus on precision and functional excellence, I specialize in creating 
                systems that solve real-world problems through advanced mechanical design and 
                autonomous logic.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Robotics", "CAD/CAM", "R&D", "Automation", "Technical Strategy", "Prototyping"].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-1.5 font-mono text-xs uppercase tracking-wider">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="mt-12">
              <Button variant="link" className="p-0 h-auto text-primary font-mono uppercase tracking-widest group">
                Read Full Story
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
