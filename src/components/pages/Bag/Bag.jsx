import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import paymentIcon from '../../../assets/images/payment.svg';

//slices
import { deleteProductFromBag } from '../../../store/slices/bag.slice';

//components
import { Footer } from '../../sections/Footer';
import { Header } from '../../sections/Header';
import { Line } from '../../Line';
import { ProductBagCard } from '../../ProductBagCard';

//styles
import { useBagStyles } from './Bag.styles';

export const Bag = () => {
  const classes = useBagStyles();

  const dispatch = useDispatch();
  const productsInBag = useSelector((state) => state.bag.productsInBag);
  const totalPrice = productsInBag.reduce((acc, product) => {
    acc += +product.price.value;
    return acc;
  }, 0);
  console.log(productsInBag);
  const handleDeleteProductFromBag = (id) => {
    dispatch(deleteProductFromBag(id));
  };
  return (
    <>
      <Header />
      <div className={classes.titleBlock}>
        <h2 className={classes.title}>BAG</h2>
        <span className={classes.count}>
          {productsInBag.length} {productsInBag.length > 1 ? 'items' : 'item'}
        </span>
      </div>
      <Line />
      <div className={classes.productsList}>
        {productsInBag.length < 1 ? (
          <div className={classes.emptyBag}>There are no items in the cart</div>
        ) : (
          productsInBag.map((product) => (
            <Fragment key={product.id}>
              <ProductBagCard
                src={product.images[0]}
                alt={product.name}
                productName={product.name}
                productPrice={`${product.price.currency} $${product.price.value}`}
                productColor={product.color.name}
                sizesArray={product.availableSizes}
                onClick={() => handleDeleteProductFromBag(product.id)}
              />
              <Line />
            </Fragment>
          ))
        )}
      </div>
      <div className={classes.paymentBlock}>
        <div className={classes.totalPrice}>Total USD ${totalPrice}</div>
        <button
          type="button"
          className={classes.button}
          disabled={productsInBag.length < 1}
        >
          PROCEED TO CHECKOUT
        </button>
        <img
          className={classes.paymentIcon}
          src={paymentIcon}
          alt="payment-icon"
        />
      </div>
      <Footer />
    </>
  );
};
