
import { Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function BottomNav() {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-md px-4 py-2 z-40 shadow-lg">
      <div className="flex items-center justify-around">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/home")}
          className="text-foreground hover:text-primary transition-colors"
        >
          <Home className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/profile")}
          className="text-foreground hover:text-primary transition-colors"
        >
          <User className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
}
