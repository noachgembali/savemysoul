
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
    "blue-yellow": "bg-gradient-to-br from-primary via-primary/80 to-secondary dark:from-primary/80 dark:to-secondary/80",
    "yellow-blue": "bg-gradient-to-br from-secondary via-secondary/80 to-primary dark:from-secondary/80 dark:to-primary/80",
    "blue": "bg-gradient-to-br from-primary to-primary/80 dark:from-primary/90 dark:to-primary/70",
    "yellow": "bg-gradient-to-br from-secondary to-secondary/80 dark:from-secondary/90 dark:to-secondary/70",
    "success": "bg-gradient-to-br from-primary to-green-500 dark:from-primary/80 dark:to-green-600",
    "failure": "bg-gradient-to-br from-primary to-red-500 dark:from-primary/80 dark:to-red-600",
  };

  return (
    <div
      className={cn(
        "min-h-screen w-full flex flex-col transition-colors",
        gradientStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
