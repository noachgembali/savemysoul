
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CoinAnimationProps {
  count?: number;
  duration?: number;
  className?: string;
}

export function CoinAnimation({ count = 10, duration = 2000, className }: CoinAnimationProps) {
  const [coins, setCoins] = useState<Array<{ id: number; left: string; animationDuration: string }>>([]);
  
  useEffect(() => {
    const newCoins = [];
    
    for (let i = 0; i < count; i++) {
      const left = `${Math.random() * 80 + 10}%`;
      const animationDuration = `${Math.random() * 2 + 1}s`;
      
      newCoins.push({
        id: i,
        left,
        animationDuration,
      });
    }
    
    setCoins(newCoins);

    // Clean up animation after duration
    const timer = setTimeout(() => {
      setCoins([]);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [count, duration]);
  
  return (
    <div className={cn("fixed inset-0 pointer-events-none overflow-hidden z-50", className)}>
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute w-8 h-8 rounded-full bg-savemysoul-yellow animate-float flex items-center justify-center text-savemysoul-blue font-bold text-xs"
          style={{
            left: coin.left,
            bottom: "-2rem",
            animation: `float ${coin.animationDuration} ease-in-out forwards`,
          }}
        >
          <div className="animate-coin-flip">₹</div>
        </div>
      ))}
    </div>
  );
}
