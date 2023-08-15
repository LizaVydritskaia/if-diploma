import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import paymentIcon from '../../../assets/images/payment.svg';

//constants
import { PATH } from '../../../services/constants/paths';

//services
import { useOrderProductsMutation } from '../../../services/api/order';

//slices
import {
  clearBag,
  removeIdFromList,
  removeProductFromBag,
  setShowMessage,
  setSuccessMessage,
} from '../../../store/slices/bag.slice';

//components
import { Button } from '../../Button';
import { Footer } from '../../sections/Footer';
import { Header } from '../../sections/Header';
import { Line } from '../../Line';
import { ProductBagCard } from '../../ProductBagCard';
import { TextMessage } from '../../TextMessage';

//styles
import { useBagStyles } from './Bag.styles';

export const Bag = () => {
  const classes = useBagStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [orderProducts] = useOrderProductsMutation();

  const productsInBag = useSelector((state) => state.bag.productsInBag);
  const productsIdList = useSelector((state) => state.bag.productsIdList);
  const showMessage = useSelector((state) => state.bag.showMessage);
  const successMessage = useSelector((state) => state.bag.successMessage);

  const totalPrice = productsInBag.reduce(
    (acc, product) => acc + +product.price.value * product.quantity,
    0,
  );

  const handleDeleteProductFromBag = (id) => {
    dispatch(removeProductFromBag(id));
    dispatch(removeIdFromList(id));
  };

  const handleOrderProducts = () => {
    orderProducts(productsIdList).then((response) => {
      dispatch(setShowMessage(true));
      dispatch(setSuccessMessage(response.data.message));
      dispatch(clearBag());
    });
  };

  const navigateToHomePage = () => {
    navigate(PATH.index);
    dispatch(setShowMessage(false));
  };

  return (
    <>
      <Header />
      {showMessage ? (
        <TextMessage
          className={classes.successMessage}
          contentText={successMessage}
        />
      ) : (
        <>
          <div className={classes.titleBlock}>
            <h2 className={classes.title}>BAG</h2>
            <span className={classes.count}>
              {productsInBag.length}{' '}
              {productsInBag.length > 1 ? 'items' : 'item'}
            </span>
          </div>
          <Line />
          <div className={classes.productsList}>
            {productsInBag.length < 1 ? (
              <TextMessage
                className={classes.emptyBag}
                contentText="There are no items in the cart"
              />
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
                    path={product.id}
                    linkState={{ ...product }}
                    productQuantity={product.quantity}
                    onClick={() => handleDeleteProductFromBag(product.id)}
                  />
                  <Line />
                </Fragment>
              ))
            )}
          </div>
          <div className={classes.paymentBlock}>
            <div className={classes.totalPrice}>Total USD ${totalPrice}</div>
            <Button
              type="button"
              className={classes.button}
              disabled={productsInBag.length < 1}
              onClick={handleOrderProducts}
            >
              PROCEED TO CHECKOUT
            </Button>
            <img
              className={classes.paymentIcon}
              src={paymentIcon}
              alt="Payment icon"
            />
          </div>
        </>
      )}
      {showMessage ? (
        <Button
          type="button"
          className={classNames(classes.button, classes.backButton)}
          onClick={navigateToHomePage}
        >
          BACK TO SHOPPING
        </Button>
      ) : null}
      <Footer />
    </>
  );
};
