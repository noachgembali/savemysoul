
import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Shield, ArrowRight, Lock } from "lucide-react";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <GradientBackground variant="blue-yellow" className="items-center justify-center px-4">
      <div className="flex flex-col items-center text-center text-white max-w-md space-y-8 animate-fade-in">
        <div className="flex flex-col items-center space-y-2">
          <Shield className="h-20 w-20 animate-float" />
          <h1 className="text-4xl font-bold">SaveMySoul</h1>
          <p className="text-lg opacity-90">Break free from digital addiction</p>
        </div>
        
        <div className="space-y-6 my-8">
          <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg">
            <div className="bg-savemysoul-yellow p-3 rounded-full">
              <Lock className="h-6 w-6 text-savemysoul-blue" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Money-backed pledges</h3>
              <p className="text-sm opacity-90">Commit with real stakes</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg">
            <div className="bg-savemysoul-yellow p-3 rounded-full">
              <Shield className="h-6 w-6 text-savemysoul-blue" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">AI powered monitoring</h3>
              <p className="text-sm opacity-90">Stay accountable 24/7</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg">
            <div className="bg-white p-3 rounded-full">
              <svg className="h-6 w-6 text-savemysoul-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1v22"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Support charities</h3>
              <p className="text-sm opacity-90">Failures fund good causes</p>
            </div>
          </div>
        </div>
        
        <AnimatedButton 
          variant="yellow"
          animation="pulse"
          size="lg"
          className="rounded-full w-56 text-lg font-semibold shadow-lg flex items-center justify-center space-x-2"
          onClick={() => navigate("/login")}
        >
          <span>Get Started</span>
          <ArrowRight className="h-5 w-5" />
        </AnimatedButton>
      </div>
    </GradientBackground>
  );
}
