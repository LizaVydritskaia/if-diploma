import React, { Fragment, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

//services
import { useGetProductsQuery } from '../../../services/api/products';

//components
import { Container } from '../../Container';
import { Loader } from '../../Loader';
import { Product } from '../../Product';
import { Title } from '../../Title';

//styles
import { useCatalogStyles } from './Catalog.styles';
import { useDispatch, useSelector } from 'react-redux';
import { saveProducts } from '../../../store/slices/filter.slice';

export const Catalog = () => {
  const classes = useCatalogStyles();

  const dispatch = useDispatch();

  const { data: products, isLoading } = useGetProductsQuery();

  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts,
  );

  useCallback(() => {dispatch(saveProducts([...products]))}, [dispatch, products])
  console.log('products', products);
  console.log(filteredProducts);

  return (
    <Loader loading={isLoading}>
      {
        <section>
          <Container>
            <Title contentText="Dresses" />
            <div className={classes.productsList}>
              {products?.map((product) => {
                return (
                  <Fragment key={product.id}>
                    <NavLink to={`/${product.id}`} state={{ ...product }}>
                      <Product
                        imageUrl={product.images[0]}
                        alt={product.name}
                        price={product.price.value}
                      />
                    </NavLink>
                  </Fragment>
                );
              })}
            </div>
          </Container>
        </section>
      }
    </Loader>
  );
};
