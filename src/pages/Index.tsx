
import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Shield, User, Wallet, Medal, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { 
      id: 'new-challenge',
      icon: <Shield className="h-6 w-6" />, 
      label: 'New Challenge', 
      onClick: () => navigate('/select-addiction') 
    },
    { 
      id: 'wallet',
      icon: <Wallet className="h-6 w-6" />, 
      label: 'Wallet', 
      onClick: () => navigate('/wallet')
    },
    { 
      id: 'leaderboard',
      icon: <Medal className="h-6 w-6" />, 
      label: 'Leaderboard', 
      onClick: () => navigate('/leaderboard')
    },
    { 
      id: 'charity',
      icon: <Heart className="h-6 w-6" />, 
      label: 'Charity Impact', 
      onClick: () => navigate('/charity')
    },
    { 
      id: 'profile',
      icon: <User className="h-6 w-6" />, 
      label: 'Profile', 
      onClick: () => navigate('/profile')
    }
  ];
  
  return (
    <GradientBackground variant="primary">
      <ThemeToggle />
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-foreground p-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="h-6 w-6" />
            SaveMySoul
          </h1>
        </header>
        
        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="max-w-md mx-auto bg-accent/20 backdrop-blur-sm rounded-xl p-6 text-foreground">
            <h2 className="text-xl font-bold mb-4">Active Challenge</h2>
            
            <div className="bg-accent/30 rounded-lg p-4 text-center mb-4">
              <p className="text-sm text-muted-foreground">No active challenges</p>
              <p className="mt-2 mb-4">Ready to break a habit?</p>
              <button 
                className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-medium"
                onClick={() => navigate('/select-addiction')}
              >
                Start a Challenge
              </button>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
                <div className="bg-accent/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">₹0</p>
                  <p className="text-sm text-muted-foreground">Saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Index;
