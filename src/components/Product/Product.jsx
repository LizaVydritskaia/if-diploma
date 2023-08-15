import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//slices
import { addProductToWishList } from '../../store/slices/wishList.slice';

//components
import { Icon } from '../Icon';

//styles
import { useProductStyles } from './Product.styles';

export const Product = ({
  imageUrl,
  alt,
  price,
  productState,
  path,
  linkState,
}) => {
  const classes = useProductStyles();

  const dispatch = useDispatch();

  const isProductInWishList = useSelector((state) =>
    state.wishList.productsInWishList.some(
      (product) => product.id === productState.id,
    ),
  );

  const handleAddProductToWishList = (productState) => {
    dispatch(addProductToWishList(productState));
  };

  return (
    <div className={classes.productBlock}>
      <div className={classes.imageBlock}>
        <NavLink to={`/${path}`} state={linkState}>
          <img className={classes.productImage} src={imageUrl} alt={alt} />
        </NavLink>
        {isProductInWishList ? (
          <Icon
            className={classes.likeIconFilled}
            hrefIconName="#like-filled"
          />
        ) : (
          <Icon
            className={classes.likeIcon}
            hrefIconName="#like"
            onClick={() => handleAddProductToWishList(productState)}
          />
        )}
      </div>
      <div className={classes.price}>{`$${price}`}</div>
    </div>
  );
};
