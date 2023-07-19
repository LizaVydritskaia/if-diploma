import React from 'react';

//components
import { Categories } from '../sections/Categories';
import { Footer } from '../sections/Footer';
import { Instagram } from '../sections/Instagram';
import { Sale } from '../sections/Sale';
import { TopSection } from '../sections/TopSection';
import { SignUp } from '../sections/SignUp';

export const Home = () => {
  return (
    <>
      <SignUp/>
      <TopSection />
      <Categories />
      <Sale />
      <Instagram />
      <Footer />
    </>
  );
};
