
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SliderWithLabel } from "@/components/ui/slider-with-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Timer, Coins, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SetGoal() {
  const navigate = useNavigate();
  const [days, setDays] = useState<number[]>([3]);
  const [money, setMoney] = useState<number[]>([200]);

  const formatDays = (value: number) => {
    return value === 1 ? "1 day" : `${value} days`;
  };

  const formatMoney = (value: number) => {
    return `₹${value}`;
  };

  return (
    <GradientBackground className="p-4">
      <div className="h-16 flex items-center">
        <Button 
          variant="ghost" 
          size="icon"
          className="text-white" 
          onClick={() => navigate("/select-addiction")}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="max-w-md mx-auto pb-6">
        <div className="pt-4 pb-6">
          <h1 className="text-3xl font-bold text-white">Set your challenge</h1>
          <p className="text-white/80 mt-2">Choose your time commitment and pledge amount</p>
        </div>

        <Card className="mb-6 animate-fade-in">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-savemysoul-blue">
              <Timer className="h-5 w-5" />
              Challenge Duration
            </CardTitle>
            <CardDescription>How long do you want to break this habit?</CardDescription>
          </CardHeader>
          <CardContent>
            <SliderWithLabel
              label="Duration"
              value={days}
              setValue={setDays}
              min={1}
              max={30}
              step={1}
              formatValue={formatDays}
            />
          </CardContent>
        </Card>

        <Card className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-savemysoul-blue">
              <Coins className="h-5 w-5" />
              Money Pledge
            </CardTitle>
            <CardDescription>How much are you willing to risk?</CardDescription>
          </CardHeader>
          <CardContent>
            <SliderWithLabel
              label="Amount"
              value={money}
              setValue={setMoney}
              min={200}
              max={2000}
              step={100}
              formatValue={formatMoney}
            />
          </CardContent>
        </Card>

        <Card className="mb-8 bg-savemysoul-blue text-white animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-8 w-8 flex-shrink-0 text-savemysoul-yellow" />
              <div>
                <h3 className="font-bold mb-1">Your Commitment</h3>
                <p className="text-sm opacity-90 mb-4">
                  I pledge to avoid this habit for {formatDays(days[0])}.
                  If I fail, ₹{money[0]} will be given to charity.
                </p>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Pledge Amount:</span>
                    <span className="font-bold">₹{money[0]}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span className="font-bold">{formatDays(days[0])}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <AnimatedButton
            variant="yellow"
            className="text-savemysoul-blue flex items-center gap-2 px-8 shadow-lg"
            onClick={() => navigate("/lock-screen")}
          >
            <span>Start Challenge</span>
            <ArrowRight className="w-5 h-5" />
          </AnimatedButton>
        </div>
      </div>
    </GradientBackground>
  );
}
