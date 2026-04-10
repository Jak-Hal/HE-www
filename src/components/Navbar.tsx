import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

interface NavbarProps {
  lang: "en" | "sv" | "cs";
}

const FlagEU = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm shadow-sm">
    <rect width="640" height="480" fill="#003399"/>
    <g transform="translate(320,240)" fill="#FFCC00">
      {[...Array(12)].map((_, i) => (
        <circle 
          key={i}
          r="22"
          transform={`rotate(${i * 30}) translate(0,-140)`}
        />
      ))}
    </g>
  </svg>
);

const FlagSE = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm shadow-sm">
    <path fill="#006aa7" d="M0 0h640v480H0z"/>
    <path fill="#fecc00" d="M0 192h640v96H0zm160-192h96v480h-96z"/>
  </svg>
);

const FlagCZ = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm shadow-sm">
    <path fill="#fff" d="M0 0h640v240H0z"/>
    <path fill="#d7141a" d="M0 240h640v240H0z"/>
    <path fill="#11457e" d="M0 0l320 240L0 480z"/>
  </svg>
);

export default function Navbar({ lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", flag: <FlagEU />, path: "/", label: "English" },
    { code: "sv", flag: <FlagSE />, path: "/sv", label: "Svenska" },
    { code: "cs", flag: <FlagCZ />, path: "/cs", label: "Čeština" },
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];
  const displayFlag = lang === "en" 
    ? languages.find(l => l.code === "sv")?.flag 
    : languages.find(l => l.code === "en")?.flag;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const t = {
    en: {
      links: [
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
      contact: "Contact"
    },
    sv: {
      links: [
        { name: "Tjänster", href: "#services" },
        { name: "Om oss", href: "#about" },
        { name: "Kontakt", href: "#contact" },
      ],
      contact: "Kontakt"
    },
    cs: {
      links: [
        { name: "Služby", href: "#services" },
        { name: "O nás", href: "#about" },
        { name: "Kontakt", href: "#contact" },
      ],
      contact: "Kontakt"
    }
  }[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 group cursor-pointer py-2">
            <Link to={currentLang.path}>
              <Logo className="w-48 group-hover:scale-[1.02] transition-transform duration-300 origin-left" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {t.links.filter(l => l.name !== t.contact).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Dropdown */}
            <div className="relative border-l border-border pl-8" ref={langMenuRef}>
              <button
                onMouseEnter={() => setIsLangOpen(true)}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 group"
              >
                <div className="hover:scale-110 transition-transform flex items-center justify-center ring-1 ring-primary/30 rounded-sm p-0.5">
                  {displayFlag}
                </div>
                <ChevronDown className={cn("w-3 h-3 text-muted-foreground transition-transform duration-300", isLangOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    onMouseLeave={() => setIsLangOpen(false)}
                    className="absolute top-full right-0 mt-2 w-40 bg-background border border-border rounded-xl shadow-xl overflow-hidden py-1 z-50"
                  >
                    {languages.map((l) => (
                      <Link
                        key={l.code}
                        to={l.path}
                        onClick={() => setIsLangOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted transition-colors",
                          lang === l.code ? "text-primary font-medium" : "text-muted-foreground"
                        )}
                      >
                        <div className="shrink-0">{l.flag}</div>
                        <span className="text-xs uppercase tracking-wider font-mono">{l.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#contact" 
                className={cn(
                  buttonVariants({ size: "sm" }), 
                  "text-sm font-medium uppercase tracking-wider shadow-lg shadow-primary/20"
                )}
              >
                {t.contact}
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 ring-1 ring-primary/30 rounded-sm p-1"
              >
                {displayFlag}
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg py-1 z-50"
                  >
                    {languages.map((l) => (
                      <Link
                        key={l.code}
                        to={l.path}
                        onClick={() => setIsLangOpen(false)}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 text-xs",
                          lang === l.code ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {l.flag}
                        <span className="uppercase font-mono">{l.code}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {t.links.filter(l => l.name !== t.contact).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants(),
                  "w-full text-sm font-medium uppercase tracking-wider"
                )}
              >
                {t.contact}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
