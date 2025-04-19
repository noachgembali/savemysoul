
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { CoinAnimation } from "@/components/ui/coin-animation";
import { Trophy, Wallet, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Success() {
  const navigate = useNavigate();
  const [showCoins, setShowCoins] = useState(false);
  
  useEffect(() => {
    // Start coin animation after a small delay
    const timer = setTimeout(() => {
      setShowCoins(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <GradientBackground variant="success" className="items-center justify-center text-center p-6">
      <ThemeToggle />
      {showCoins && <CoinAnimation count={15} />}
      
      <div className="max-w-md animate-fade-in">
        <div className="flex flex-col items-center">
          <div className="bg-accent/30 p-6 rounded-full mb-6">
            <Trophy className="h-20 w-20 text-accent-foreground animate-float" />
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-2">Challenge Complete!</h1>
          <p className="text-xl text-muted-foreground mb-8">You've successfully broken your habit!</p>
          
          <div className="bg-background rounded-lg p-6 mb-8 w-full">
            <h3 className="text-primary text-lg font-bold mb-4">Your Achievement</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-muted-foreground">Challenge:</span>
                <span className="font-semibold">Adult Content</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-semibold">3 days</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                <span className="text-secondary-foreground font-medium">Amount returned:</span>
                <span className="text-secondary-foreground font-bold">₹200</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4 w-full">
            <AnimatedButton 
              variant="yellow"
              className="flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet")}
            >
              <Wallet className="h-5 w-5" />
              <span>Go to Wallet</span>
            </AnimatedButton>
            
            <Button
              variant="outline"
              className="border-border"
              onClick={() => navigate("/")}
            >
              <Home className="h-5 w-5 mr-2" />
              <span>Home</span>
            </Button>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}
