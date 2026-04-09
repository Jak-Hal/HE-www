import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
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
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 uppercase">
              Precision <span className="text-primary">Engineering</span> for the Future.
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              We bridge the gap between complex ideas and tangible reality through advanced robotics, 
              mechanical design, and technical consultancy.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-base font-mono uppercase tracking-tighter group">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-mono uppercase tracking-tighter">
                View Portfolio
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { label: "Projects", value: "150+" },
                { label: "Patents", value: "12" },
                { label: "Countries", value: "24" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold tracking-tighter">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">{stat.label}</div>
                </div>
              ))}
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
              <div className="absolute inset-0 bg-primary/5 rounded-3xl border border-primary/10 backdrop-blur-3xl overflow-hidden">
                <div className="absolute inset-0 grid-lines opacity-40" />
                <div className="scanline" />
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[200px] font-bold text-primary/5 select-none tracking-tighter">
                    HE
                  </div>
                </div>
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
