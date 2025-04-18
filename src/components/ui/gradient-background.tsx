
import React from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue-yellow" | "yellow-blue" | "blue" | "yellow" | "success" | "failure";
  children: React.ReactNode;
}

export function GradientBackground({
  variant = "blue-yellow",
  className,
  children,
  ...props
}: GradientBackgroundProps) {
  const gradientStyles = {
    "blue-yellow": "bg-gradient-to-br from-savemysoul-blue via-savemysoul-lightblue to-savemysoul-yellow",
    "yellow-blue": "bg-gradient-to-br from-savemysoul-yellow via-savemysoul-lightyellow to-savemysoul-lightblue",
    "blue": "bg-gradient-to-br from-savemysoul-blue to-savemysoul-lightblue",
    "yellow": "bg-gradient-to-br from-savemysoul-yellow to-savemysoul-lightyellow",
    "success": "bg-gradient-to-br from-savemysoul-blue to-green-500",
    "failure": "bg-gradient-to-br from-savemysoul-blue to-red-500",
  };

  return (
    <div
      className={cn(
        "min-h-screen w-full flex flex-col",
        gradientStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
