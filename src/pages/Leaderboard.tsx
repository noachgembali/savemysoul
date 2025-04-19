
import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarWithStatus } from "@/components/ui/avatar-with-status";
import { ArrowLeft, Medal, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Leaderboard() {
  const navigate = useNavigate();

  const friends = [
    { id: 1, name: "Raj Kumar", image: "", status: "completed" as const, score: 1200, position: 1 },
    { id: 2, name: "Priya Shah", image: "", status: "completed" as const, score: 950, position: 2 },
    { id: 3, name: "Amit Singh", image: "", status: "active" as const, score: 800, position: 3 },
    { id: 4, name: "Neha Gupta", image: "", status: "completed" as const, score: 700, position: 4 },
    { id: 5, name: "Vikram Patel", image: "", status: "failed" as const, score: 500, position: 5 }
  ];

  return (
    <GradientBackground className="p-4">
      <ThemeToggle />
      <div className="h-16 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold text-foreground ml-2">Leaderboard</h1>
      </div>

      <div className="max-w-md mx-auto pb-20">
        <Tabs defaultValue="friends" className="mb-6">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="friends">
              <Users className="h-4 w-4 mr-2" />
              Friends
            </TabsTrigger>
            <TabsTrigger value="global">
              <Medal className="h-4 w-4 mr-2" />
              Global
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="friends" className="mt-0">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Medal className="h-5 w-5 text-amber-400" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Top 3 with medals */}
                  <div className="flex justify-between items-end pt-6 pb-10">
                    {/* 2nd place */}
                    <div className="flex flex-col items-center">
                      <AvatarWithStatus 
                        name={friends[1].name}
                        image={friends[1].image}
                        status={friends[1].status}
                        showStatus={false}
                        size="md"
                      />
                      <div className="bg-secondary w-12 h-16 mt-3 rounded-t-lg flex items-center justify-center">
                        <span className="font-bold">2</span>
                      </div>
                      <p className="text-xs mt-1 font-medium">₹{friends[1].score}</p>
                    </div>
                    
                    {/* 1st place */}
                    <div className="flex flex-col items-center -mt-8">
                      <div className="relative">
                        <svg className="w-8 h-8 text-amber-400 absolute -top-4 left-1/2 transform -translate-x-1/2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <AvatarWithStatus 
                          name={friends[0].name}
                          image={friends[0].image}
                          status={friends[0].status}
                          showStatus={false}
                          size="lg"
                        />
                      </div>
                      <div className="bg-amber-400 dark:bg-amber-500 w-16 h-24 mt-3 rounded-t-lg flex items-center justify-center">
                        <span className="font-bold text-primary-foreground dark:text-primary">1</span>
                      </div>
                      <p className="text-xs mt-1 font-bold">₹{friends[0].score}</p>
                    </div>
                    
                    {/* 3rd place */}
                    <div className="flex flex-col items-center">
                      <AvatarWithStatus 
                        name={friends[2].name}
                        image={friends[2].image}
                        status={friends[2].status}
                        showStatus={false}
                        size="md"
                      />
                      <div className="bg-amber-700 w-12 h-12 mt-3 rounded-t-lg flex items-center justify-center">
                        <span className="font-bold text-primary-foreground">3</span>
                      </div>
                      <p className="text-xs mt-1 font-medium">₹{friends[2].score}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {friends.slice(3).map((friend) => (
                      <AvatarWithStatus
                        key={friend.id}
                        name={friend.name}
                        image={friend.image}
                        status={friend.status}
                        score={friend.score}
                        position={friend.position}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="global">
            <Card>
              <CardContent className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">Global leaderboard coming soon!</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </GradientBackground>
  );
}
