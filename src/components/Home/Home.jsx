import React from 'react';

//components
import { Categories } from '../sections/Categories';
import { Footer } from '../sections/Footer';
import { Instagram } from '../sections/Instagram';
import { Sale } from '../sections/Sale';
import { TopSection } from '../sections/TopSection';

export const Home = () => {
  return (
    <>
      <TopSection />
      <Categories />
      <Sale />
      <Instagram />
      <Footer />
    </>
  );
};
