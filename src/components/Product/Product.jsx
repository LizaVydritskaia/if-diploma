import React from 'react';

//components
import { Icon } from '../Icon';

//styles
import { useProductStyles } from './Product.styles';

export const Product = ({ imageUrl, alt, price }) => {
  const classes = useProductStyles();

  return (
    <div className={classes.productBlock}>
      <div className={classes.imageBlock}>
          <img className={classes.productImage} src={imageUrl} alt={alt} />
        <Icon className={classes.likeIcon} hrefIconName="#like" />
      </div>
      <div className={classes.price}>{`$${price}`}</div>
    </div>
  );
};
