
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "failure" | "outline" | "ghost" | "blue" | "yellow";
  size?: "default" | "sm" | "lg" | "icon";
  animation?: "pulse" | "bounce" | "none";
  children: React.ReactNode;
}

export function AnimatedButton({
  variant = "default",
  size = "default",
  animation = "none",
  className,
  children,
  ...props
}: AnimatedButtonProps) {
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    success: "bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
    failure: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    blue: "bg-primary text-primary-foreground hover:bg-primary/90",
    yellow: "bg-secondary text-secondary-foreground hover:bg-secondary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90",
  };

  const animationStyles = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    none: "",
  };

  return (
    <Button
      className={cn(
        "rounded-full font-medium transition-all duration-200",
        variantStyles[variant as keyof typeof variantStyles] || variantStyles.default,
        animationStyles[animation],
        className
      )}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
}
