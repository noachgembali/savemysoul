
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarWithStatus } from "@/components/ui/avatar-with-status";
import { useToast } from "@/hooks/use-toast";
import { Search, UserPlus } from "lucide-react";

interface FriendSearchProps {
  onClose?: () => void;
}

export function FriendSearch({ onClose }: FriendSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { toast } = useToast();

  // This would connect to your backend in a real app
  const handleSearch = () => {
    if (!searchTerm) return;
    
    // Mock search results - in a real app this would be an API call
    const mockUsers = [
      { id: 101, name: "Alex Johnson", username: searchTerm.toLowerCase(), status: "active" as const },
      { id: 102, name: "Sam Wilson", username: `${searchTerm.toLowerCase()}22`, status: "completed" as const },
      { id: 103, name: "Taylor Kim", username: `real_${searchTerm.toLowerCase()}`, status: "completed" as const }
    ];
    
    setSearchResults(mockUsers.filter(user => 
      user.username.includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };

  const sendFriendRequest = (userId: number, username: string) => {
    // In a real app, this would send an API request
    toast({
      title: "Friend request sent",
      description: `You sent a friend request to @${username}`
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search by username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSearch} size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {searchResults.length > 0 ? (
        <div className="space-y-2">
          {searchResults.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-2 rounded-lg bg-accent/50">
              <div className="flex items-center gap-2">
                <AvatarWithStatus
                  name={user.name}
                  image=""
                  status={user.status}
                  showStatus={false}
                  size="sm"
                />
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">@{user.username}</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => sendFriendRequest(user.id, user.username)}
              >
                <UserPlus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          ))}
        </div>
      ) : searchTerm ? (
        <p className="text-center text-sm text-muted-foreground py-4">
          No users found matching "{searchTerm}"
        </p>
      ) : null}
    </div>
  );
}
