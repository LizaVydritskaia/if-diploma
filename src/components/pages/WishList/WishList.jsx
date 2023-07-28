import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//slices
import { deleteProductFromWishList } from '../../../store/slices/wishList.slice';
import { addProductToBag } from '../../../store/slices/bag.slice';

//components
import { Footer } from '../../sections/Footer';
import { Header } from '../../sections/Header';
import { Line } from '../../Line';
import { ProductWishListCard } from '../../ProductWishListCard';
import { TextMessage } from '../../TextMessage';

//styles
import { useWishListStyles } from './WishList.styles';

export const WishList = () => {
  const classes = useWishListStyles();

  const dispatch = useDispatch();

  const productsInWishList = useSelector(
    (state) => state.wishList.productsInWishList,
  );

  const handleDeleteProductFromWishList = (id) => {
    dispatch(deleteProductFromWishList(id))
  };

  const handleAddProductToBag = (item) => {
    dispatch(addProductToBag(item))
  }

  return (
    <>
      <Header />
      <div className={classes.titleBlock}>
        <h2 className={classes.title}>WISH LIST</h2>
        <span className={classes.count}>
          {productsInWishList.length}{' '}
          {productsInWishList.length > 1 ? 'items' : 'item'}
        </span>
      </div>
      <Line />
      <div>
        {productsInWishList.length < 1 ? (
          <TextMessage className={classes.emptyWishList} contentText="There are no items in the wish list" />
        ) : (
          productsInWishList.map((product) => (
            <Fragment key={product.id}>
              <ProductWishListCard
                src={product.images[0]}
                alt={product.name}
                productName={product.name}
                productPrice={`${product.price.currency} $${product.price.value}`}
                productColor={product.color.name}
                sizesArray={product.availableSizes}
                removeProduct={() => handleDeleteProductFromWishList(product.id)}
                addToBag={() => handleAddProductToBag(product)}
              />
              <Line />
            </Fragment>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};
