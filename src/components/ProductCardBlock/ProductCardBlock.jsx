import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

//constants
import { PATH } from '../../services/constants/paths';

//styles
import { useProductCardBlockStyles } from './ProductCardBlock.styles';

export const ProductCardBlock = ({
  src,
  alt,
  productName,
  productPrice,
  productColor,
  sizesArray,
}) => {
  const classes = useProductCardBlockStyles();

  const location = useLocation();

  return (
    <>
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
          {location.pathname === PATH.bag ? (
            <div>
              <span className={classes.selectText}>QUANTITY: 1</span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
