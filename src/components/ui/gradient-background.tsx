
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
    "primary": "bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900",
    "secondary": "bg-gradient-to-br from-white to-pink-50 dark:from-black dark:to-purple-950",
    "success": "bg-gradient-to-br from-white to-green-50 dark:from-black dark:to-green-950",
    "failure": "bg-gradient-to-br from-white to-red-50 dark:from-black dark:to-red-950",
    "neutral": "bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900",
    "blue": "bg-gradient-to-br from-white to-blue-50 dark:from-black dark:to-blue-950",
    "yellow": "bg-gradient-to-br from-white to-amber-50 dark:from-black dark:to-amber-950",
    "blue-yellow": "bg-gradient-to-br from-white to-amber-50 dark:from-black dark:to-blue-950",
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
