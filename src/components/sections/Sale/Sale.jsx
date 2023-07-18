import React from 'react';

//config
import { configSale } from './configSale';

//components
import { Container } from '../../Container';
import { Icon } from '../../Icon';
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
              <div key={product.id} className={classes.productSaleBlock}>
                <div className={classes.imageBlock}>
                  <img
                    className={classes.productSaleImage}
                    src={product.image}
                    alt={product.id}
                  />
                  <Icon className={classes.likeIcon} hrefIconName="#like" />
                  <div className={classes.discount}>
                    <span className={classes.discountText}>
                      {product.discount}
                    </span>
                  </div>
                </div>
                <div className={classes.prices}>
                  <span className={classes.oldPrice}>{product.oldPrice}</span>
                  <span className={classes.newPrice}>{product.newPrice}</span>
                </div>
              </div>
            );
          })}
          <Icon className={classes.arrow} hrefIconName="#arrow" />
        </div>
      </Container>
    </section>
  );
};
