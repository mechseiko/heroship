import { useState } from 'react';

const useHeroGenerator = () => {
  const [heroData, setHeroData] = useState({
    headline: '',
    subheading: '',
    cta: '',
  });

  const generateHero = (input) => {
    // Simple mock logic – you can replace with AI or backend call
    setHeroData({
      headline: `Welcome to ${input.headline || 'Heroship'}`,
      subheading: input.subheading || 'Build your dream hero section',
      cta: input.cta || 'Get Started',
    });
  };

  return { heroData, generateHero };
};

export default useHeroGenerator;
