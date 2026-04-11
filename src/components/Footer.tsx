import Logo from "./Logo";

interface FooterProps {
  lang: "en" | "sv";
}

export default function Footer({ lang }: FooterProps) {
  const t = {
    en: {
      rights: "All rights reserved.",
      socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/haluskajakub/" },
        { name: "Instagram", url: "https://www.instagram.com/haluska.engineering/" },
        { name: "free 3D models", url: "https://www.printables.com/@Kuba_H_34729/models" }
      ]
    },
    sv: {
      rights: "Alla rättigheter förbehållna.",
      socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/haluskajakub/" },
        { name: "Instagram", url: "https://www.instagram.com/haluska.engineering/" },
        { name: "fria 3D-modeller", url: "https://www.printables.com/@Kuba_H_34729/models" }
      ]
    }
  }[lang];

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Logo className="w-32 opacity-80 hover:opacity-100 transition-all" />
          </div>
          
          <div className="flex gap-8">
            {t.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Haluska Engineering AB. {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
