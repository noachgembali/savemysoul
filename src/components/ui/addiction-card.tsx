
import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AddictionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon: React.ReactNode;
  selected?: boolean;
  stats?: string;
  onSelect?: () => void;
}

export function AddictionCard({
  title,
  description,
  icon,
  selected = false,
  stats,
  onSelect,
  className,
  ...props
}: AddictionCardProps) {
  return (
    <Card
      className={cn(
        "w-full cursor-pointer transition-all duration-200 overflow-hidden",
        selected 
          ? "border-2 border-savemysoul-yellow bg-savemysoul-blue text-white scale-105" 
          : "hover:border-savemysoul-yellow hover:scale-[1.02]",
        className
      )}
      onClick={onSelect}
      {...props}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="text-3xl">{icon}</div>
          {selected && <Badge className="bg-savemysoul-yellow text-savemysoul-blue font-medium">Selected</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        {description && <CardDescription className={selected ? "text-gray-200" : ""}>{description}</CardDescription>}
      </CardContent>
      {stats && (
        <CardFooter className="pt-0 text-sm">
          <p>{stats}</p>
        </CardFooter>
      )}
    </Card>
  );
}
