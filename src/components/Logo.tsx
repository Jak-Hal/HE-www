import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img 
        src={`${import.meta.env.BASE_URL}logo-AB5.png`} 
        alt="Haluska Engineering AB" 
        className="w-full h-auto"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const container = e.currentTarget.parentElement;
          if (container) {
            container.innerHTML = '<span class="text-xl font-bold tracking-tighter uppercase">HALU<span class="text-green-600">S</span>KA ENGINEERING AB</span>';
          }
        }}
      />
    </div>
  );
}
