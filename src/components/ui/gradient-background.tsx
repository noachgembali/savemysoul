
import React from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "success" | "failure" | "neutral" | "blue" | "yellow" | "blue-yellow";
  children: React.ReactNode;
}

export function GradientBackground({
  variant = "primary",
  className,
  children,
  ...props
}: GradientBackgroundProps) {
  const gradientStyles = {
    "primary": "bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted",
    "secondary": "bg-gradient-to-br from-background to-secondary dark:from-background dark:to-secondary/30",
    "success": "bg-gradient-to-br from-background to-green-50 dark:from-background dark:to-green-950",
    "failure": "bg-gradient-to-br from-background to-red-50 dark:from-background dark:to-red-950",
    "neutral": "bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted",
    "blue": "bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted",
    "yellow": "bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted",
    "blue-yellow": "bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted",
  };

  return (
    <div
      className={cn(
        "min-h-screen w-full flex flex-col transition-colors",
        gradientStyles[variant as keyof typeof gradientStyles] || gradientStyles.primary,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
