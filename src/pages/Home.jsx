import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeHero from '../components/hero/HomeHero';
import Loader from '../components/hero/Loader';
import Ship from '../components/hero/Ship';
import Features from '../components/hero/Features';
import Start from '../components/hero/Start';
import Calculator from '../components/hero/Calculator';
import Join from '../components/hero/Join';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

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
      <Start />
      <Ship />
      <Calculator />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
