import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img 
        src="/logo-AB5.png" 
        alt="Haluska Engineering AB" 
        className="w-full h-auto"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
