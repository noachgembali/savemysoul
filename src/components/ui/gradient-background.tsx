
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
    "primary": "bg-gradient-to-br from-purple-500 to-indigo-700 dark:from-purple-700 dark:to-indigo-900",
    "secondary": "bg-gradient-to-br from-pink-500 to-orange-400 dark:from-pink-700 dark:to-orange-600",
    "success": "bg-gradient-to-br from-green-400 to-teal-500 dark:from-green-600 dark:to-teal-700",
    "failure": "bg-gradient-to-br from-red-400 to-pink-500 dark:from-red-600 dark:to-pink-700",
    "neutral": "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900",
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
