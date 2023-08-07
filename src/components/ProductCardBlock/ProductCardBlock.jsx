import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

//constants
import { PATH } from '../../services/constants/paths';

//slices
import {
  addProductToBag,
  quantityDecrement,
} from '../../store/slices/bag.slice';

//components
import { Button } from '../Button';
import { Icon } from '../Icon';

//styles
import { useProductCardBlockStyles } from './ProductCardBlock.styles';

export const ProductCardBlock = ({
  src,
  alt,
  productName,
  productPrice,
  productColor,
  sizesArray,
  path,
  linkState,
  productQuantity,
}) => {
  const classes = useProductCardBlockStyles();

  const dispatch = useDispatch();
  const location = useLocation();

  const handleIncrementQuantity = (product) => {
    dispatch(addProductToBag(product));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(quantityDecrement(productId));
  };

  return (
    <>
      <div className={classes.productBlock}>
        <img className={classes.image} src={src} alt={alt} />
        <div className={classes.productInfo}>
          <NavLink to={`/${path}`} state={linkState}>
            <h3 className={classes.name}>{productName}</h3>
          </NavLink>
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
            <div className={classes.quantityBlock}>
              <span className={classes.selectText}>QUANTITY:</span>
              <div className={classes.numberBlock}>
                <span className={classes.selectText}>{productQuantity}</span>
                <div className={classes.arrowBlock}>
                  <Button
                    type="button"
                    className={classes.arrowButton}
                    onClick={() => handleIncrementQuantity(linkState)}
                  >
                    <Icon
                      className={classNames(classes.arrow, classes.arrowUp)}
                      hrefIconName="#next-arrow"
                    />
                  </Button>

                  <Button
                    type="button"
                    className={classes.arrowButton}
                    onClick={() => handleDecrementQuantity(linkState.id)}
                    disabled={productQuantity === 1}
                  >
                    <Icon
                      className={classNames(classes.arrow, classes.arrowDown)}
                      hrefIconName="#next-arrow"
                    />
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
