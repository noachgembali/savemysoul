
import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Charity() {
  const navigate = useNavigate();
  
  const charities = [
    {
      id: 1,
      name: "Child Education Fund",
      description: "Providing education to underprivileged children",
      donated: 620,
      image: "/placeholder.svg",
      progress: 75,
    },
    {
      id: 2,
      name: "Clean Water Initiative",
      description: "Bringing clean water to rural communities",
      donated: 240,
      image: "/placeholder.svg",
      progress: 45,
    },
    {
      id: 3,
      name: "Mental Health Support",
      description: "Supporting mental health awareness and treatment",
      donated: 180,
      image: "/placeholder.svg",
      progress: 30,
    }
  ];
  
  return (
    <GradientBackground className="p-4">
      <ThemeToggle />
      <div className="h-16 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold text-foreground ml-2">Charity Impact</h1>
      </div>
      
      <div className="max-w-md mx-auto pb-20">
        <div className="text-foreground mb-6">
          <h2 className="text-2xl font-bold mb-2">Your Contributions</h2>
          <p className="text-muted-foreground">
            When challenges are failed, a portion of your pledge goes to these charities.
            Turning setbacks into positive impact.
          </p>
        </div>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-destructive" />
                <span className="font-medium">Total Donated</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-2">₹1,040</h2>
            <p className="text-sm text-muted-foreground mb-4">From 5 failed challenges</p>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-primary">3</div>
                <p className="text-xs text-muted-foreground">Charities Helped</p>
              </div>
              <div>
                <div className="text-lg font-bold text-primary">12</div>
                <p className="text-xs text-muted-foreground">Lives Impacted</p>
              </div>
              <div>
                <div className="text-lg font-bold text-primary">60%</div>
                <p className="text-xs text-muted-foreground">Of Failed Pledges</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          {charities.map((charity) => (
            <Card key={charity.id} className="overflow-hidden">
              <div className="h-32 bg-muted flex items-center justify-center">
                <img 
                  src={charity.image} 
                  alt={charity.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{charity.name}</CardTitle>
                <CardDescription>{charity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Your contribution</span>
                    <span className="text-sm font-bold text-primary">₹{charity.donated}</span>
                  </div>
                  <Progress value={charity.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground text-right">{charity.progress}% of monthly goal</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </GradientBackground>
  );
}
