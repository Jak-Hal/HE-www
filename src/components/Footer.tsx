import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-primary" />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tighter uppercase">
                Haluska<span className="text-primary">.</span>
              </span>
              <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Engineering
              </span>
            </div>
          </div>
          
          <div className="flex gap-8">
            {["LinkedIn", "Twitter", "GitHub", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Haluska Engineering. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
