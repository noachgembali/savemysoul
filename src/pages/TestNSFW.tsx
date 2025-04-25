
import React from 'react';
import { NSFWImage } from '@/components/NSFWImage';
import { GradientBackground } from '@/components/ui/gradient-background';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TestNSFW() {
  const navigate = useNavigate();
  
  return (
    <GradientBackground className="p-4">
      <div className="h-16 flex items-center">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Test NSFW Detection</h1>
        
        <Card className="p-4">
          <h2 className="font-semibold mb-2">Safe Image (Should Display)</h2>
          <NSFWImage 
            src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
            alt="A beautiful landscape"
            className="w-full h-48 object-cover rounded-lg"
          />
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-2">Adult Content (Should be Blurred)</h2>
          <NSFWImage 
            src="https://raw.githubusercontent.com/infinitered/nsfwjs/master/example/nsfw.jpg"
            alt="NSFW test image"
            className="w-full h-48 object-cover rounded-lg"
          />
        </Card>
      </div>
    </GradientBackground>
  );
}
