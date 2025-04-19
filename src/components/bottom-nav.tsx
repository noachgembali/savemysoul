
import { Shield, Home, Wallet, Medal, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { 
      id: 'home',
      icon: <Home className="h-5 w-5" />, 
      label: 'Home',
      path: '/home'
    },
    { 
      id: 'new-challenge',
      icon: <Shield className="h-5 w-5" />, 
      label: 'Challenge', 
      path: '/select-addiction'
    },
    { 
      id: 'wallet',
      icon: <Wallet className="h-5 w-5" />, 
      label: 'Wallet', 
      path: '/wallet'
    },
    { 
      id: 'leaderboard',
      icon: <Medal className="h-5 w-5" />, 
      label: 'Ranking', 
      path: '/leaderboard'
    },
    { 
      id: 'charity',
      icon: <Heart className="h-5 w-5" />, 
      label: 'Charity', 
      path: '/charity'
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-md px-4 py-2 z-40 shadow-lg">
      <div className="flex items-center justify-around">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="icon"
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 h-auto py-1 ${
              location.pathname === item.path 
                ? "text-primary" 
                : "text-foreground hover:text-primary"
            } transition-colors`}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
}
