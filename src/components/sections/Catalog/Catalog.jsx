import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

//services
import { useGetProductsQuery } from '../../../services/api/products';

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

  const { isLoading } = useGetProductsQuery();

  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts,
  );
  const category = useSelector((state) => state.filter.category);
  const showCategory = useSelector((state) => state.filter.showCategory);

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
                        <Product
                          imageUrl={product.images[0]}
                          alt={product.name}
                          price={product.price.value}
                          productState={product}
                          path={product.id}
                          linkState={{ ...product }}
                        />
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
