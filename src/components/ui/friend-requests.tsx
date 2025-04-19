
import React from "react";
import { Button } from "@/components/ui/button";
import { AvatarWithStatus } from "@/components/ui/avatar-with-status";
import { useToast } from "@/hooks/use-toast";
import { Check, X } from "lucide-react";

// Mock data - in a real app this would come from your backend
const mockRequests = [
  { id: 201, name: "Jamie Smith", username: "jamie_smith", status: "completed" as const },
  { id: 202, name: "Riley Johnson", username: "riley345", status: "active" as const }
];

export function FriendRequests() {
  const { toast } = useToast();
  const [requests, setRequests] = React.useState(mockRequests);

  const handleAccept = (id: number, name: string) => {
    // In a real app, this would send an API request
    setRequests(requests.filter(req => req.id !== id));
    toast({
      title: "Friend request accepted",
      description: `${name} is now your friend`
    });
  };

  const handleReject = (id: number) => {
    // In a real app, this would send an API request
    setRequests(requests.filter(req => req.id !== id));
    toast({
      title: "Friend request rejected"
    });
  };

  if (requests.length === 0) {
    return (
      <div className="text-center p-4 text-muted-foreground">
        <p>No pending friend requests</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {requests.map((request) => (
        <div key={request.id} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
          <div className="flex items-center gap-2">
            <AvatarWithStatus
              name={request.name}
              image=""
              status={request.status}
              showStatus={false}
              size="sm"
            />
            <div>
              <p className="text-sm font-medium">{request.name}</p>
              <p className="text-xs text-muted-foreground">@{request.username}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0 rounded-full"
              onClick={() => handleAccept(request.id, request.name)}
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0 rounded-full text-destructive"
              onClick={() => handleReject(request.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
