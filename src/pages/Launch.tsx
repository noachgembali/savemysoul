
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Launch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to Welcome page after animation
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="animate-fade-in flex flex-col items-center space-y-4">
        <Shield className="h-24 w-24 animate-float text-primary" />
        <h1 className="text-4xl font-bold text-primary animate-slide-up">
          SaveMySoul
        </h1>
      </div>
    </div>
  );
};

export default Launch;
