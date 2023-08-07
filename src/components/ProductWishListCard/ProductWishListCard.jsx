import React from 'react';

//components
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ProductCardBlock } from '../ProductCardBlock';

//styles
import { useProductsWishListCardStyles } from './ProductWishListCard.styles';

export const ProductWishListCard = ({
  src,
  alt,
  productName,
  productPrice,
  productColor,
  sizesArray,
  addToBag,
  removeProduct,
  path,
  linkState,
}) => {
  const classes = useProductsWishListCardStyles();

  return (
    <div className={classes.cardBlock}>
      <ProductCardBlock
        src={src}
        alt={alt}
        productName={productName}
        productPrice={productPrice}
        productColor={productColor}
        sizesArray={sizesArray}
        path={path}
        linkState={linkState}
      />
      <div className={classes.buttonsBlock}>
        <Button type="button" className={classes.button} onClick={addToBag}>
          <Icon
            className={classes.shoppingCartIcon}
            hrefIconName="#shopping-cart"
          />
          ADD TO BAG
        </Button>
        <Button
          type="button"
          className={classes.button}
          onClick={removeProduct}
        >
          <Icon className={classes.removeIcon} hrefIconName="#close-icon" />
          REMOVE
        </Button>
      </div>
    </div>
  );
};
