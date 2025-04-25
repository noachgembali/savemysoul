
import React, { useState, useEffect, useRef } from 'react';
import { useNSFWDetector } from '@/hooks/useNSFWDetector';
import { cn } from '@/lib/utils';

interface NSFWImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const NSFWImage: React.FC<NSFWImageProps> = ({ 
  src, 
  alt = "", 
  className,
  fallbackSrc = "/placeholder.svg",
  ...props 
}) => {
  const [isNSFW, setIsNSFW] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const { detectNSFW, isLoading } = useNSFWDetector();

  useEffect(() => {
    if (!src || !imgRef.current || isLoading) return;

    const checkImage = async () => {
      setIsChecking(true);
      try {
        const isNSFWContent = await detectNSFW(imgRef.current!);
        setIsNSFW(isNSFWContent);
      } catch (error) {
        console.error('Error checking image:', error);
      } finally {
        setIsChecking(false);
      }
    };

    // Only check once the image is loaded
    if (imgRef.current.complete) {
      checkImage();
    } else {
      imgRef.current.onload = checkImage;
    }
  }, [src, detectNSFW, isLoading]);

  return (
    <div className="relative">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(
          className,
          isNSFW && "blur-xl",
          isChecking && "opacity-0",
        )}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = fallbackSrc;
        }}
        {...props}
      />
      {isChecking && (
        <div className="absolute inset-0 flex items-center justify-center bg-accent/10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      {isNSFW && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              Content blocked due to active challenge
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
