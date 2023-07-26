import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//services
import { useGetProductsQuery } from '../../../services/api/products';

//slices
import { saveAllProducts } from '../../../store/slices/filter.slice';

//components
import { Container } from '../../Container';
import { Loader } from '../../Loader';
import { Product } from '../../Product';
import { TextMessage } from '../../TextMessage';
import { Title } from '../../Title';

//styles
import { useCatalogStyles } from './Catalog.styles';

export const Catalog = () => {
  const classes = useCatalogStyles();

  const [allProducts, setAllProducts] = useState([]);

  const dispatch = useDispatch();

  const { data: products, isLoading } = useGetProductsQuery();

  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts,
  );
  const category = useSelector((state) => state.filter.category);
  const showCategory = useSelector((state) => state.filter.showCategory);

  useEffect(() => {
    setAllProducts(products);
    dispatch(saveAllProducts(allProducts));
  }, [dispatch, allProducts, products]);

  return (
    <Loader loading={isLoading}>
      {showCategory && (
        <section>
          <Container>
            {filteredProducts.length < 1 ? (
              <TextMessage
                className={classes.messageBlock}
                contentText="No beauty products found"
              />
            ) : (
              <>
                <Title contentText={category} />
                <div className={classes.productsList}>
                  {filteredProducts?.map((product) => {
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
              </>
            )}
          </Container>
        </section>
      )}
    </Loader>
  );
};
