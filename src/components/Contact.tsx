import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ContactProps {
  lang: "en" | "sv";
}

export default function Contact({ lang }: ContactProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const t = {
    en: {
      title: "Contact Us",
      heading: <>Let's Build Something <span className="text-primary">Cool</span> Together.</>,
      description: "Have a complex engineering challenge? We're ready to help you solve it. Reach out for a consultation or project inquiry.",
      revealBtn: "Reveal Contact Info (I am not a robot)",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location"
      },
      locationValue: "Luleå, Sweden"
    },
    sv: {
      title: "Kontakta Oss",
      heading: <>Låt oss bygga något <span className="text-primary">coolt</span> tillsammans.</>,
      description: "Har du en komplex teknisk utmaning? Vi är redo att hjälpa dig lösa den. Kontakta oss för konsultation eller projektförfrågan.",
      revealBtn: "Visa kontaktinfo (jag är inte en robot)",
      labels: {
        email: "E-post",
        phone: "Telefon",
        location: "Plats"
      },
      locationValue: "Luleå, Sverige"
    }
  }[lang];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">{t.title}</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8 leading-tight">
            {t.heading}
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t.description}
          </p>

          <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-md mx-auto sm:max-w-none">
            {!isRevealed ? (
              <Button 
                variant="outline" 
                className="h-auto py-5 px-4 sm:px-12 font-mono uppercase tracking-widest border-primary/20 hover:bg-primary/5 group text-[10px] sm:text-base w-full sm:w-auto flex-col sm:flex-row gap-3 sm:gap-0"
                onClick={() => setIsRevealed(true)}
              >
                <ShieldCheck className="w-6 h-6 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-center leading-tight">{t.revealBtn}</span>
              </Button>
            ) : (
              <div className="grid sm:grid-cols-3 gap-6 w-full mt-8">
                {[
                  { icon: Mail, label: t.labels.email, value: "jakub@haluska.se", href: "mailto:jakub@haluska.se" },
                  { icon: Phone, label: t.labels.phone, value: "+46 (0) 761036029", href: "tel:+46761036029" },
                  { icon: MapPin, label: t.labels.location, value: t.locationValue },
                ].map((item) => {
                  const isPhone = item.label === t.labels.phone;
                  const isLink = !!item.href;
                  const Component = isLink ? motion.a : motion.div;
                  
                  return (
                    <Component
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={item.label}
                      {...(isLink ? { href: item.href } : {})}
                      className={cn(
                        "flex flex-col items-center gap-4 p-6 rounded-2xl bg-background border border-border transition-all",
                        isLink ? "group hover:border-primary hover:shadow-xl hover:shadow-primary/5 cursor-pointer" : "cursor-default",
                        isPhone ? "sm:pointer-events-none sm:hover:border-border sm:hover:shadow-none sm:cursor-default" : ""
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center transition-colors",
                        isLink ? "group-hover:bg-primary/10" : "",
                        isPhone ? "sm:group-hover:bg-muted/50" : ""
                      )}>
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-base font-medium tracking-tight">{item.value}</div>
                      </div>
                    </Component>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
