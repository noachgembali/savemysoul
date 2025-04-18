
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "blue" | "yellow" | "success" | "failure" | "outline" | "ghost";
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
    blue: "bg-savemysoul-blue text-white hover:bg-savemysoul-lightblue",
    yellow: "bg-savemysoul-yellow text-savemysoul-blue hover:bg-savemysoul-lightyellow",
    success: "bg-savemysoul-success text-white hover:bg-green-600",
    failure: "bg-savemysoul-failure text-white hover:bg-red-600",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
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
        variantStyles[variant],
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
