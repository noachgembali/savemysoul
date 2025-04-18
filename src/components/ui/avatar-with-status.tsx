
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AvatarWithStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  image?: string;
  status?: "online" | "offline" | "away" | "active" | "completed" | "failed";
  showStatus?: boolean;
  score?: number;
  position?: number;
  size?: "sm" | "md" | "lg";
}

export function AvatarWithStatus({
  name,
  image,
  status,
  showStatus = true,
  score,
  position,
  size = "md",
  className,
  ...props
}: AvatarWithStatusProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
    
  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    away: "bg-yellow-500",
    active: "bg-blue-500",
    completed: "bg-savemysoul-success",
    failed: "bg-savemysoul-failure"
  };
  
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14",
  };
  
  const positionBadgeColor = position && position <= 3 
    ? [null, "bg-yellow-500", "bg-gray-400", "bg-amber-700"][position]
    : "bg-gray-500";
    
  return (
    <div className={cn("relative flex items-center gap-3", className)} {...props}>
      {position && (
        <div className={cn(
          "flex items-center justify-center rounded-full w-6 h-6 text-xs font-bold text-white",
          positionBadgeColor
        )}>
          {position}
        </div>
      )}
      <div className="relative">
        <Avatar className={sizeClasses[size]}>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-savemysoul-blue text-white">{initials}</AvatarFallback>
        </Avatar>
        {showStatus && status && (
          <span
            className={cn(
              "absolute bottom-0 right-0 rounded-full ring-2 ring-white",
              statusColors[status],
              size === "sm" ? "w-2 h-2" : "w-3 h-3"
            )}
          />
        )}
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-sm">{name}</span>
        {score !== undefined && (
          <span className="text-xs text-muted-foreground">
            ₹{score} 
            {status === "active" && " pledged"}
            {status === "completed" && " saved"}
            {status === "failed" && " lost"}
          </span>
        )}
      </div>
    </div>
  );
}
