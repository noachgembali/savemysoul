
import React from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "success" | "failure" | "neutral";
  children: React.ReactNode;
}

export function GradientBackground({
  variant = "primary",
  className,
  children,
  ...props
}: GradientBackgroundProps) {
  const gradientStyles = {
    "primary": "bg-gradient-to-br from-primary/90 to-primary dark:from-primary/20 dark:to-primary/40",
    "secondary": "bg-gradient-to-br from-secondary/90 to-secondary dark:from-secondary/20 dark:to-secondary/40",
    "success": "bg-gradient-to-br from-green-400 to-teal-500 dark:from-green-600/20 dark:to-teal-700/40",
    "failure": "bg-gradient-to-br from-red-400 to-pink-500 dark:from-red-600/20 dark:to-pink-700/40",
    "neutral": "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800/20 dark:to-gray-900/40",
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
