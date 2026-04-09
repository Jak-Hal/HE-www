import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
              Let's Build the <span className="text-primary">Future</span> Together.
            </h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Have a complex engineering challenge? We're ready to help you solve it. 
              Reach out for a consultation or project inquiry.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "hello@haluska.eng", href: "mailto:hello@haluska.eng" },
                { icon: Phone, label: "Phone", value: "+46 (0) 123 456 789", href: "tel:+46123456789" },
                { icon: MapPin, label: "Location", value: "Luleå, Sweden", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{item.label}</div>
                    <div className="text-lg font-medium tracking-tight">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-2xl shadow-primary/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input placeholder="John Doe" className="bg-muted/50 border-transparent focus:border-primary transition-all h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input placeholder="john@example.com" type="email" className="bg-muted/50 border-transparent focus:border-primary transition-all h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-muted/50 border-transparent focus:border-primary transition-all h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="Tell us about your project..." className="bg-muted/50 border-transparent focus:border-primary transition-all min-h-[150px]" />
              </div>
              <Button className="w-full h-14 text-base font-mono uppercase tracking-tighter group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
