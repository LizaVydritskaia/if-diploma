import React from 'react';

//components
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
      />
      <button type="button" className={classes.button} onClick={onClick}>
        <Icon className={classes.removeIcon} hrefIconName="#close-icon" />
        REMOVE
      </button>
    </div>
  );
};
