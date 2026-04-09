import { motion } from "motion/react";
import { Cpu, Settings, Zap, Shield, Microscope, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Robotics Design",
    description: "End-to-end development of autonomous systems and industrial robotic solutions.",
    icon: Cpu,
    color: "text-blue-500",
  },
  {
    title: "Mechanical Engineering",
    description: "High-precision CAD modeling, stress analysis, and structural optimization.",
    icon: Settings,
    color: "text-primary",
  },
  {
    title: "Technical Consultancy",
    description: "Expert guidance on technology transfer, R&D strategy, and feasibility studies.",
    icon: Microscope,
    color: "text-purple-500",
  },
  {
    title: "Rapid Prototyping",
    description: "Fast-track development from concept to functional prototype using advanced manufacturing.",
    icon: Rocket,
    color: "text-orange-500",
  },
  {
    title: "System Integration",
    description: "Seamlessly connecting hardware and software for complex industrial ecosystems.",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and validation protocols ensuring mission-critical reliability.",
    icon: Shield,
    color: "text-green-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
              Engineering <span className="text-primary">Solutions</span> for Complex Challenges.
            </h3>
          </div>
          <p className="text-muted-foreground max-w-md text-right hidden md:block">
            We provide specialized services across multiple engineering disciplines, 
            focusing on innovation and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
                  <CardDescription className="text-base leading-relaxed">
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
