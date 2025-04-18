
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps extends React.HTMLAttributes<HTMLDivElement> {
  endTime: Date;
  onComplete?: () => void;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

export function CountdownTimer({
  endTime,
  onComplete,
  size = "md",
  showLabels = true,
  className,
  ...props
}: CountdownTimerProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        onComplete?.();
      } else {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [endTime, onComplete]);
  
  const sizeClasses = {
    sm: "text-sm space-x-2",
    md: "text-lg space-x-3",
    lg: "text-2xl space-x-4",
  };
  
  const digitClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };
  
  return (
    <div
      className={cn(
        "flex justify-center",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center">
        <div className={cn(
          "flex items-center justify-center bg-savemysoul-blue text-white rounded-lg font-bold",
          digitClasses[size]
        )}>
          {days < 10 ? `0${days}` : days}
        </div>
        {showLabels && <span className="text-xs mt-1">Days</span>}
      </div>
      <span className="text-savemysoul-blue font-bold self-center">:</span>
      <div className="flex flex-col items-center">
        <div className={cn(
          "flex items-center justify-center bg-savemysoul-blue text-white rounded-lg font-bold",
          digitClasses[size]
        )}>
          {hours < 10 ? `0${hours}` : hours}
        </div>
        {showLabels && <span className="text-xs mt-1">Hours</span>}
      </div>
      <span className="text-savemysoul-blue font-bold self-center">:</span>
      <div className="flex flex-col items-center">
        <div className={cn(
          "flex items-center justify-center bg-savemysoul-blue text-white rounded-lg font-bold",
          digitClasses[size]
        )}>
          {minutes < 10 ? `0${minutes}` : minutes}
        </div>
        {showLabels && <span className="text-xs mt-1">Min</span>}
      </div>
      <span className="text-savemysoul-blue font-bold self-center">:</span>
      <div className="flex flex-col items-center">
        <div className={cn(
          "flex items-center justify-center bg-savemysoul-blue text-white rounded-lg font-bold",
          digitClasses[size]
        )}>
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
        {showLabels && <span className="text-xs mt-1">Sec</span>}
      </div>
    </div>
  );
}
