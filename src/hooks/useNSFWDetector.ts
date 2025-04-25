
import * as nsfwjs from 'nsfwjs';
import { useState, useEffect } from 'react';

export const useNSFWDetector = () => {
  const [model, setModel] = useState<nsfwjs.NSFWJS | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await nsfwjs.load();
        setModel(loadedModel);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load NSFW detection model:', error);
        setIsLoading(false);
      }
    };

    loadModel();
  }, []);

  const detectNSFW = async (element: HTMLImageElement): Promise<boolean> => {
    if (!model) return false;

    try {
      const predictions = await model.classify(element);
      const nsfwScore = predictions.reduce((score, prediction) => {
        if (['Porn', 'Hentai', 'Sexy'].includes(prediction.className)) {
          return score + prediction.probability;
        }
        return score;
      }, 0);

      return nsfwScore > 0.5; // Return true if combined NSFW probability is over 50%
    } catch (error) {
      console.error('Error detecting NSFW content:', error);
      return false;
    }
  };

  return { detectNSFW, isLoading };
};
