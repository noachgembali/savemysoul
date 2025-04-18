
import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { FrownIcon, HeartIcon, ArrowRightIcon } from "lucide-react";

export default function Failure() {
  const navigate = useNavigate();
  
  return (
    <GradientBackground variant="failure" className="items-center justify-center text-center p-6">
      <div className="max-w-md animate-fade-in">
        <div className="flex flex-col items-center">
          <div className="bg-white/20 p-6 rounded-full mb-6">
            <FrownIcon className="h-20 w-20 text-white animate-pulse" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">Challenge Failed</h1>
          <p className="text-white/80 mb-8">Don't worry, setbacks are part of the journey</p>
          
          <div className="bg-white rounded-lg p-6 mb-8 w-full">
            <h3 className="text-savemysoul-blue text-lg font-bold mb-4">Challenge Details</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Challenge:</span>
                <span className="font-semibold">Adult Content</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Duration attempted:</span>
                <span className="font-semibold">1 day out of 3</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="text-red-700">Amount lost:</span>
                <span className="text-red-700 font-bold">₹200</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-4 rounded-lg mb-8 flex items-center gap-3">
            <HeartIcon className="h-10 w-10 text-white flex-shrink-0" />
            <p className="text-left text-white text-sm">
              <span className="font-semibold">₹140</span> of your pledge has been donated to help children in need
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 w-full">
            <AnimatedButton 
              variant="yellow"
              className="flex items-center justify-center gap-2 text-savemysoul-blue"
              onClick={() => navigate("/select-addiction")}
            >
              <span>Try Again</span>
              <ArrowRightIcon className="h-4 w-4" />
            </AnimatedButton>
            
            <button
              className="text-white underline underline-offset-2 text-sm"
              onClick={() => navigate("/charity")}
            >
              See your charity impact
            </button>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}
