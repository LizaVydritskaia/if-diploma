import React from 'react';

//components
import { Categories } from '../sections/Categories';
import { Sale } from '../sections/Sale';
import { TopSection } from '../sections/TopSection';

export const Home = () => {
  return (
    <>
      <TopSection />
      <Categories />
      <Sale />
    </>
  );
};
