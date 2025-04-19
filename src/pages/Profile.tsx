
import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Settings, Edit, LogOut } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  
  // In a real app, this would come from your authentication system
  const user = {
    name: "Rahul Sharma",
    username: "@rahul_s",
    joinDate: "April 2025",
    challenges: 5,
    completed: 3,
    failed: 2
  };

  return (
    <GradientBackground className="p-4">
      <ThemeToggle />
      <div className="h-16 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/home")}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold text-foreground ml-2">Profile</h1>
      </div>

      <div className="max-w-md mx-auto pb-20">
        <Card className="bg-accent/20 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary">
                <AvatarFallback className="text-xl">{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                <AvatarImage src="" alt={user.name} />
              </Avatar>
              <div>
                <CardTitle className="text-xl">{user.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{user.username}</p>
                <p className="text-xs text-muted-foreground">Member since {user.joinDate}</p>
              </div>
            </div>
            <Button variant="outline" size="icon" onClick={() => {}}>
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 my-4">
              <div className="bg-background p-3 rounded-lg text-center">
                <p className="text-xl font-bold">{user.challenges}</p>
                <p className="text-xs text-muted-foreground">Challenges</p>
              </div>
              <div className="bg-background p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-primary">{user.completed}</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
              <div className="bg-background p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-destructive">{user.failed}</p>
                <p className="text-xs text-muted-foreground">Failed</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-6">
              <Button variant="outline" className="w-full justify-start" onClick={() => {}}>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive" onClick={() => navigate('/welcome')}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </GradientBackground>
  );
}
