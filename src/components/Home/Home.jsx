import React from 'react';

//components
import { Catalog } from '../sections/Catalog';
import { Categories } from '../sections/Categories';
import { Footer } from '../sections/Footer';
import { Instagram } from '../sections/Instagram';
import { Sale } from '../sections/Sale';
import { SearchResults } from '../sections/SearchResults';
import { TopSection } from '../sections/TopSection';

export const Home = () => {
  return (
    <>
      <TopSection />
      <SearchResults />
      <Categories />
      <Catalog />
      <Sale />
      <Instagram />
      <Footer />
    </>
  );
};
