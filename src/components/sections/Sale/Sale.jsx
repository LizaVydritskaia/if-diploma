import React, { Fragment } from 'react';

//config
import { configSale } from './configSale';

//components
import { Container } from '../../Container';
import { Icon } from '../../Icon';
import { ProductSaleBlock } from '../../ProductSaleBlock';
import { Title } from '../../Title';

//styles
import { useSaleStyles } from './Sale.styles';

export const Sale = () => {
  const classes = useSaleStyles();

  return (
    <section>
      <Title contentText="#MODNIKKY" boldText="_Sale" />
      <Container>
        <div className={classes.productsSaleList}>
          {configSale.map((product) => {
            return (
              <Fragment key={product.id}>
                <ProductSaleBlock
                  image={product.images[0]}
                  alt={product.name}
                  discount={product.discount}
                  oldPrice={product.price.oldPrice}
                  newPrice={`$${product.price.value}`}
                  productState={product}
                />
              </Fragment>
            );
          })}
          <Icon className={classes.arrow} hrefIconName="#arrow" />
        </div>
      </Container>
    </section>
  );
};
