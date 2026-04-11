import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

interface NavbarProps {
  lang: "en" | "sv";
}

const FlagEU = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-3 rounded-sm shadow-sm">
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
  <svg viewBox="0 0 640 480" className="w-5 h-3 rounded-sm shadow-sm">
    <path fill="#006aa7" d="M0 0h640v480H0z"/>
    <path fill="#fecc00" d="M0 192h640v96H0zm160-192h96v480h-96z"/>
  </svg>
);

export default function Navbar({ lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const languages = {
    en: { code: "en", flag: <FlagEU />, path: "/", label: "EN" },
    sv: { code: "sv", flag: <FlagSE />, path: "/sv", label: "SE" },
  };

  const targetLang = lang === "en" ? languages.sv : languages.en;

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
    }
  }[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 group cursor-pointer py-2">
            <Link to={lang === "en" ? "/" : "/sv"}>
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
            
            {/* Language Toggle */}
            <div className="border-l border-border pl-8">
              <Link
                to={targetLang.path}
                className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center justify-center ring-1 ring-primary/30 rounded-sm p-0.5 group-hover:ring-primary/60 transition-all">
                  {targetLang.flag}
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                  {targetLang.label}
                </span>
              </Link>
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
            {/* Mobile Language Toggle */}
            <Link
              to={targetLang.path}
              className="flex items-center gap-1.5 ring-1 ring-primary/30 rounded-sm p-1.5 hover:ring-primary/60 transition-all"
            >
              {targetLang.flag}
              <span className="text-[10px] font-mono font-bold text-muted-foreground">{targetLang.label}</span>
            </Link>

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
