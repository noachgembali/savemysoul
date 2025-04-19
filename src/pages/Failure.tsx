
import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { FrownIcon, HeartIcon, ArrowRightIcon } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Failure() {
  const navigate = useNavigate();
  
  return (
    <GradientBackground variant="failure" className="items-center justify-center text-center p-6">
      <ThemeToggle />
      <div className="max-w-md animate-fade-in">
        <div className="flex flex-col items-center">
          <div className="bg-accent/20 p-6 rounded-full mb-6">
            <FrownIcon className="h-20 w-20 text-foreground animate-pulse" />
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-2">Challenge Failed</h1>
          <p className="text-muted-foreground mb-8">Don't worry, setbacks are part of the journey</p>
          
          <div className="bg-background rounded-lg p-6 mb-8 w-full">
            <h3 className="text-primary text-lg font-bold mb-4">Challenge Details</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-muted-foreground">Challenge:</span>
                <span className="font-semibold">Adult Content</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-muted-foreground">Duration attempted:</span>
                <span className="font-semibold">1 day out of 3</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
                <span className="text-destructive font-medium">Amount lost:</span>
                <span className="text-destructive font-bold">₹200</span>
              </div>
            </div>
          </div>
          
          <div className="bg-accent/30 p-4 rounded-lg mb-8 flex items-center gap-3">
            <HeartIcon className="h-10 w-10 text-foreground flex-shrink-0" />
            <p className="text-left text-foreground text-sm">
              <span className="font-semibold">₹140</span> of your pledge has been donated to help children in need
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 w-full">
            <AnimatedButton 
              variant="yellow"
              className="flex items-center justify-center gap-2"
              onClick={() => navigate("/select-addiction")}
            >
              <span>Try Again</span>
              <ArrowRightIcon className="h-4 w-4" />
            </AnimatedButton>
            
            <button
              className="text-foreground underline underline-offset-2 text-sm"
              onClick={() => navigate("/charity")}
            >
              See your charity impact
            </button>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}
