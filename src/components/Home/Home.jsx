import React from 'react';

//components
import { Catalog } from '../sections/Catalog';
import { Categories } from '../sections/Categories';
import { Footer } from '../sections/Footer';
import { Instagram } from '../sections/Instagram';
import { Sale } from '../sections/Sale';
import { TopSection } from '../sections/TopSection';
// import { useGetProductsQuery } from '../../services/api/products';

export const Home = () => {
  // const { data: products = [] } = useGetProductsQuery();
  // const chooseCategory = (category) => {
  //  return products.filter((product) => product.type === category);
  // };

  return (
    <>
      <TopSection />
      <Categories />
      <Catalog />
      <Sale />
      <Instagram />
      <Footer />
    </>
  );
};
