import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//config
import { descriptionConfig } from './descriptionConfig';

//slices
import { addIdToList, addProductToBag } from '../../../store/slices/bag.slice';
import { addProductToWishList } from '../../../store/slices/wishList.slice';

//components
import { DescriptionBlock } from '../../DescriptionBlock';
import { Footer } from '../../sections/Footer';
import { Header } from '../../sections/Header';
import { Icon } from '../../Icon';

//styles
import { useProductPageStyles } from './ProductPage.styles';

export const ProductPage = () => {
  const classes = useProductPageStyles();

  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const isProductInWishList = useSelector((s) =>
    s.wishList.productsInWishList.some((product) => product.id === state.id),
  );

  const handleAddProductToBag = () => {
    dispatch(addProductToBag(state));
    dispatch(addIdToList(state.id));
  };

  const handleAddProductToWishList = () => {
    dispatch(addProductToWishList(state));
  };

  return (
    <>
      <Header />
      <div className={classes.productContent}>
        <div className={classes.images}>
          <img src={state.images[0]} alt={state.name} />
          <img src={state.images[1]} alt={state.name} />
        </div>
        <div className={classes.productInfo}>
          <h2 className={classes.productName}>{state.name}</h2>
          <p
            className={classes.productPrice}
          >{`${state.price.currency} $${state.price.value}`}</p>
          <p className={classes.shoppingInfo}>PRE-ORDER</p>
          <div className={classes.color}>
            <p className={classes.text}>COLOR</p>
            <div
              className={classes.colorSquare}
              style={{ backgroundColor: state.color.hex }}
            ></div>
          </div>
          <div className={classes.size}>
            <p className={classes.text}>SIZE</p>
            <div className={classes.sizeList}>
              {state.availableSizes[0].split(',').map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className={classes.buttons}>
            <button type="button" onClick={handleAddProductToBag}>
              ADD TO BAG
            </button>
            <button type="button" onClick={handleAddProductToWishList}>
              {isProductInWishList ? (
                <Icon
                  className={classes.iconFilled}
                  hrefIconName="#like-filled"
                />
              ) : (
                <Icon className={classes.icon} hrefIconName="#like" />
              )}
            </button>
          </div>
          {descriptionConfig.map((item) => (
            <DescriptionBlock
              key={item.id}
              description={state.description}
              title={item.title}
              elementId={item.id}
              itemId={item.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
