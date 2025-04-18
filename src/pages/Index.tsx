import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Shield, User, Wallet, Medal, Heart } from "lucide-react";

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
    <GradientBackground variant="blue-yellow">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-white p-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="h-6 w-6" />
            SaveMySoul
          </h1>
        </header>
        
        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
            <h2 className="text-xl font-bold mb-4">Active Challenge</h2>
            
            <div className="bg-white/20 rounded-lg p-4 text-center mb-4">
              <p className="text-sm opacity-80">No active challenges</p>
              <p className="mt-2 mb-4">Ready to break a habit?</p>
              <button 
                className="bg-savemysoul-yellow text-savemysoul-blue px-6 py-2 rounded-full font-medium"
                onClick={() => navigate('/select-addiction')}
              >
                Start a Challenge
              </button>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm opacity-80">Completed</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">₹0</p>
                  <p className="text-sm opacity-80">Saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <nav className="bg-white rounded-t-xl p-2 grid grid-cols-5">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              className="flex flex-col items-center justify-center py-2 px-1 text-savemysoul-blue hover:bg-savemysoul-gray rounded-lg transition-colors"
              onClick={item.onClick}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </GradientBackground>
  );
};

export default Index;
