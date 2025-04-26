import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Shield, ArrowRight, Lock } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function Welcome() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/create-username`
        }
      });
      
      if (error) throw error;
    } catch (error) {
      toast({
        title: "Authentication Error",
        description: "Failed to sign in with Google. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <GradientBackground variant="primary" className="items-center justify-center px-4">
      <ThemeToggle />
      <div className="flex flex-col items-center text-center text-foreground max-w-md space-y-8 animate-fade-in">
        <div className="flex flex-col items-center space-y-2">
          <Shield className="h-20 w-20 animate-float text-primary" />
          <h1 className="text-4xl font-bold">SaveMySoul</h1>
          <p className="text-lg text-muted-foreground">Break free from digital addiction</p>
        </div>
        
        <div className="space-y-6 my-8">
          <div className="flex items-center space-x-4 bg-accent/60 p-4 rounded-lg">
            <div className="bg-secondary p-3 rounded-full">
              <Lock className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Money-backed pledges</h3>
              <p className="text-sm text-muted-foreground">Commit with real stakes</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-accent/60 p-4 rounded-lg">
            <div className="bg-secondary p-3 rounded-full">
              <Shield className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">AI powered monitoring</h3>
              <p className="text-sm text-muted-foreground">Stay accountable 24/7</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-accent/60 p-4 rounded-lg">
            <div className="bg-primary p-3 rounded-full">
              <svg className="h-6 w-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1v22"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Support charities</h3>
              <p className="text-sm text-muted-foreground">Failures fund good causes</p>
            </div>
          </div>
        </div>
        
        <AnimatedButton 
          variant="yellow"
          animation="pulse"
          size="lg"
          className="rounded-full w-56 text-lg font-semibold shadow-lg flex items-center justify-center space-x-2"
          onClick={handleSignInWithGoogle}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>Continue with Google</span>
        </AnimatedButton>
      </div>
    </GradientBackground>
  );
}
