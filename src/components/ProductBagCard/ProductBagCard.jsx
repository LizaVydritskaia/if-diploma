import React from 'react';

//components
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ProductCardBlock } from '../ProductCardBlock';

//styles
import { useProductBagCardStyles } from './ProductBagCard.styles';

export const ProductBagCard = ({
  src,
  alt,
  productName,
  productPrice,
  productColor,
  sizesArray,
  path,
  linkState,
  productQuantity,
  onClick,
}) => {
  const classes = useProductBagCardStyles();

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
        productQuantity={productQuantity}
      />
      <Button type="button" className={classes.button} onClick={onClick}>
        <Icon className={classes.removeIcon} hrefIconName="#close-icon" />
        REMOVE
      </Button>
    </div>
  );
};
