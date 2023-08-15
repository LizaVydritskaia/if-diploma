import React from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//slices
import { changeStatus } from '../../../store/slices/auth.slice';
import { setShowSearchModal } from '../../../store/slices/search.slice';

//constants
import { authStatuses } from '../../../services/constants/authStatuses';
import { PATH } from '../../../services/constants/paths';

//components
import { Icon } from '../../Icon';
import { SearchModal } from '../../SearchModal';

//styles
import { useHeaderStyles } from './Header.styles';
import classNames from 'classnames';

export const Header = () => {
  const classes = useHeaderStyles();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const loggedIn = useSelector(
    (state) => state.auth.status === authStatuses.loggedIn,
  );
  const bagProductsCount = useSelector((state) => state.bag.productsInBag);
  const showSearchModal = useSelector((state) => state.search.showSearchModal);

  const SignIn = () => {
    navigate(PATH.signUp);
  };

  const SignOut = () => {
    dispatch(changeStatus(authStatuses.loggedOut));
    navigate(PATH.index);
  };

  const openBag = () => {
    navigate(PATH.bag);
  };

  const openWishList = () => {
    navigate(PATH.wishList);
  };

  const openSearchModal = () => {
    dispatch(setShowSearchModal(true));
  };

  const closeSearchModal = () => {
    dispatch(setShowSearchModal(false));
  };

  return (
    <>
      <header className={classes.root}>
        <Icon
          className={
            location.pathname !== PATH.index
              ? classes.burgerMenuIconBlack
              : classes.burgerMenuIcon
          }
          hrefIconName="#burger-menu"
        />
        <div className={classes.menu}>
          <span
            className={
              location.pathname !== PATH.index
                ? classes.textBlack
                : classes.text
            }
          >
            NEW ARRIVALS
          </span>
          <span
            className={
              location.pathname !== PATH.index
                ? classes.textBlack
                : classes.text
            }
          >
            SHOP
          </span>
          <span
            className={
              location.pathname !== PATH.index
                ? classes.textBlack
                : classes.text
            }
          >
            COLLECTIONS
          </span>
        </div>
        <Link to={PATH.index}>
          <Icon
            className={
              location.pathname !== PATH.index
                ? classes.logoBlack
                : classes.logo
            }
            hrefIconName="#logo"
          />
        </Link>
        <div className={classes.menu}>
          <div className={classes.search} onClick={openSearchModal}>
            <Icon
              className={
                location.pathname !== PATH.index
                  ? classes.searchIconBlack
                  : classes.searchIcon
              }
              hrefIconName="#search"
            />
            <span
              className={classNames(
                classes.hiddenText,
                location.pathname !== PATH.index
                  ? classes.textBlack
                  : classes.text,
              )}
            >
              SEARCH
            </span>
          </div>
          {loggedIn ? (
            <span
              className={classNames(
                classes.hiddenText,
                location.pathname !== PATH.index
                  ? classes.textBlack
                  : classes.text,
              )}
              onClick={SignOut}
            >
              SIGN OUT
            </span>
          ) : (
            <span
              className={classNames(
                classes.hiddenText,
                location.pathname !== PATH.index
                  ? classes.textBlack
                  : classes.text,
              )}
              onClick={SignIn}
            >
              SIGN IN
            </span>
          )}
          <div onClick={openBag}>
            <Icon
              className={
                location.pathname !== PATH.index
                  ? classes.cartBlack
                  : classes.cart
              }
              hrefIconName="#shopping-cart"
            />
            <span
              className={classNames(
                classes.hiddenText,
                location.pathname !== PATH.index
                  ? classes.textBlack
                  : classes.text,
              )}
            >
              BAG <span>({bagProductsCount.length})</span>
            </span>
          </div>
          {location.pathname === PATH.wishList ? (
            <Icon
              className={classes.wishListFilled}
              hrefIconName="#wish-list-filled"
            />
          ) : (
            <Icon
              className={
                location.pathname !== PATH.index
                  ? classes.wishListIconBlack
                  : classes.wishListIcon
              }
              hrefIconName="#wish-list"
              onClick={openWishList}
            />
          )}
        </div>
      </header>
      {showSearchModal &&
        createPortal(
          <SearchModal onCloseModal={closeSearchModal} />,
          document.body,
        )}
    </>
  );
};
