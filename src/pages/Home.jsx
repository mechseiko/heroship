import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeHero from '../components/hero/HomeHero';
import Loader from '../components/hero/Loader';
import Ship from '../components/hero/Ship';
import Features from '../components/hero/Features';
import Start from '../components/hero/Start';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <HomeHero />
      <Features />
      <Ship />
      <Start />
      <Footer />
    </>
  );
};

export default Home;
