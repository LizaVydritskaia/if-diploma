import React from 'react';
import classNames from 'classnames';

//components
import { Icon } from '../Icon';

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
    <div className={classes.productBlock}>
      <img className={classes.image} src={src} alt={alt} />
      <div className={classes.productInfo}>
        <h3 className={classes.name}>{productName}</h3>
        <p className={classes.price}>{productPrice}</p>
        <div className={classes.selectBlock}>
          <span className={classes.selectText}>COLOR:</span>
          <select className={classNames(classes.select, classes.selectText)}>
            <option>{productColor}</option>
          </select>
        </div>
        <div className={classes.selectBlock}>
          <span className={classes.selectText}>SIZE:</span>
          <select className={classNames(classes.select, classes.selectText)}>
            {sizesArray[0].split(',').map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <span className={classes.selectText}>QUANTITY: 1</span>
        </div>
      </div>
      <button type="button" className={classes.button} onClick={onClick}>
        <Icon className={classes.removeIcon} hrefIconName="#close-icon" />
        REMOVE
      </button>
    </div>
  );
};
