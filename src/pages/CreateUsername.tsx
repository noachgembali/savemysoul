
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { useToast } from "@/hooks/use-toast";

export default function CreateUsername() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [suggestedUsernames, setSuggestedUsernames] = useState<string[]>([]);

  // Generate username suggestions based on the provided name
  useEffect(() => {
    if (name.length > 0) {
      const nameParts = name.toLowerCase().split(" ");
      const suggestions = [
        `${nameParts[0]}${Math.floor(Math.random() * 1000)}`,
        `${nameParts[0]}_${Math.floor(Math.random() * 100)}`,
        nameParts.length > 1 
          ? `${nameParts[0][0]}${nameParts[nameParts.length - 1]}${Math.floor(Math.random() * 100)}`
          : `${nameParts[0]}${Math.floor(Math.random() * 10000)}`
      ];
      setSuggestedUsernames(suggestions);
    }
  }, [name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast({
        title: "Username required",
        description: "Please enter a username to continue",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would save the username to the user's account
    // For now, we'll just store it in localStorage
    localStorage.setItem("username", username);
    
    toast({
      title: "Username created!",
      description: `Welcome, @${username}!`,
    });
    
    navigate("/home");
  };

  const selectSuggestion = (suggestion: string) => {
    setUsername(suggestion);
  };

  return (
    <GradientBackground className="p-4">
      <ThemeToggle />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader>
            <CardTitle className="text-center">Create Username</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Choose a Username
                </label>
                <Input
                  id="username"
                  placeholder="Enter a unique username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  This will be used by your friends to find you
                </p>
              </div>

              {suggestedUsernames.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Suggested Usernames:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedUsernames.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                        onClick={() => selectSuggestion(suggestion)}
                      >
                        @{suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <AnimatedButton
                type="submit"
                className="w-full"
              >
                Continue
              </AnimatedButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </GradientBackground>
  );
}
