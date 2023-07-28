import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//slices
import { addProductToWishList } from '../../store/slices/wishList.slice';

//components
import { Icon } from '../Icon';

//styles
import { useProductSaleBlockStyles } from './ProductSaleBlock.styles';

export const ProductSaleBlock = ({
  image,
  alt,
  discount,
  oldPrice,
  newPrice,
  productState,
}) => {
  const classes = useProductSaleBlockStyles();

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
    <div className={classes.productSaleBlock}>
      <div className={classes.imageBlock}>
        <img className={classes.productSaleImage} src={image} alt={alt} />
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
        <div className={classes.discount}>
          <span className={classes.discountText}>{discount}</span>
        </div>
      </div>
      <div className={classes.prices}>
        <span className={classes.oldPrice}>{oldPrice}</span>
        <span className={classes.newPrice}>{newPrice}</span>
      </div>
    </div>
  );
};
