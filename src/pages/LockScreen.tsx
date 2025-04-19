
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Lock, ShieldAlert, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LockScreen() {
  const navigate = useNavigate();
  const [endTime] = useState<Date>(() => {
    const end = new Date();
    end.setDate(end.getDate() + 3); // 3 days from now
    return end;
  });
  
  const [isLocked, setIsLocked] = useState(true);
  
  const handleTimerComplete = () => {
    setIsLocked(false);
    setTimeout(() => navigate("/success"), 2000);
  };
  
  const handleGiveUp = () => {
    navigate("/failure");
  };
  
  return (
    <GradientBackground className="p-4 items-center justify-center text-center">
      <ThemeToggle />
      <div className="max-w-md mx-auto flex flex-col items-center">
        <div className="bg-accent/30 p-8 rounded-full mb-8">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center bg-primary ${isLocked ? "animate-pulse" : ""}`}>
            <Lock className="h-16 w-16 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-2">Challenge Active</h1>
        <p className="text-muted-foreground mb-8">Stay strong! Your pledge is locked until the timer ends</p>
        
        <div className="bg-accent/30 rounded-xl p-6 w-full mb-8">
          <h3 className="text-foreground mb-4">Time remaining:</h3>
          <CountdownTimer 
            endTime={endTime} 
            onComplete={handleTimerComplete}
            size="lg"
            className="mb-2"
          />
          <p className="text-xs text-muted-foreground">Pledge: ₹200</p>
        </div>
        
        <div className="bg-secondary p-4 rounded-lg mb-8 max-w-xs">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-10 w-10 text-secondary-foreground" />
            <p className="text-left text-secondary-foreground font-medium text-sm">
              Closing or uninstalling this app will result in automatic challenge failure
            </p>
          </div>
        </div>
        
        <div className="space-x-4">
          <AnimatedButton
            variant="outline"
            className="border-border hover:bg-accent"
            onClick={handleGiveUp}
          >
            Give Up (Lose ₹200)
          </AnimatedButton>
          
          {!isLocked && (
            <AnimatedButton
              variant="yellow"
              animation="pulse"
              className="flex items-center gap-1"
              onClick={() => navigate("/success")}
            >
              <span>Claim Reward</span>
              <ChevronRight className="h-4 w-4" />
            </AnimatedButton>
          )}
        </div>
      </div>
    </GradientBackground>
  );
}
