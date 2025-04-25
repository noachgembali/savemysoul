import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AddictionCard } from "@/components/ui/addiction-card";
import { Eye, Film, Gamepad, Clock, ChevronRight, Shield } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SelectAddiction() {
  const navigate = useNavigate();
  const [selectedAddiction, setSelectedAddiction] = useState<string | null>(null);

  const addictions = [
    {
      id: "adult-content",
      title: "Adult Content",
      description: "AI-powered blocking of inappropriate content",
      icon: <Eye />,
      stats: "80% success rate",
      badge: "AI Protected"
    },
    {
      id: "reels",
      title: "Social Media Reels",
      description: "Limit infinite scrolling on social platforms",
      icon: <Film />,
      stats: "65% success rate"
    },
    {
      id: "games",
      title: "Mobile Games",
      description: "Restrict access to addictive mobile games",
      icon: <Gamepad />,
      stats: "72% success rate"
    },
    {
      id: "screen-time",
      title: "Late Night Screen Time",
      description: "Block phone usage during bedtime hours",
      icon: <Clock />,
      stats: "85% success rate"
    }
  ];

  return (
    <GradientBackground variant="primary" className="p-4">
      <ThemeToggle />
      <div className="max-w-md mx-auto">
        <div className="pt-12 pb-6">
          <h1 className="text-3xl font-bold text-foreground">What's your struggle?</h1>
          <p className="text-muted-foreground mt-2">Select the habit you want to break</p>
        </div>

        <div className="grid grid-cols-1 gap-4 animate-slide-up">
          {addictions.map((addiction) => (
            <AddictionCard
              key={addiction.id}
              title={addiction.title}
              description={addiction.description}
              icon={addiction.icon}
              stats={addiction.stats}
              selected={selectedAddiction === addiction.id}
              onSelect={() => setSelectedAddiction(addiction.id)}
              badge={addiction.badge}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <AnimatedButton
            variant={selectedAddiction ? "secondary" : "ghost"}
            disabled={!selectedAddiction}
            className={`${
              selectedAddiction ? "" : "text-muted-foreground/50"
            } flex items-center gap-2`}
            onClick={() => navigate("/set-goal")}
          >
            <span>Continue</span>
            <ChevronRight className="w-5 h-5" />
          </AnimatedButton>
        </div>
      </div>
    </GradientBackground>
  );
}
