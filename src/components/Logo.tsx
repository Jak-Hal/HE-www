import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img 
        src="https://raw.githubusercontent.com/jak-hal/HE-www/main/public/logo-AB5.png" 
        alt="Haluska Engineering AB" 
        className="w-full h-auto"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold tracking-tighter uppercase">Haluska Engineering AB</span>';
        }}
      />
    </div>
  );
}
