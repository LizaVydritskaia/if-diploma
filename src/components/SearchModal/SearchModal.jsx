import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//services
import { useGetProductsQuery } from '../../services/api/products';

//slices
import {
  setInputValue,
  setSearchResultList,
  setShowSearchModal,
  setShowSearchResults,
} from '../../store/slices/search.slice';

//components
import { Icon } from '../Icon';

//styles
import { useSearchModalStyles } from './SearchModal.styles';

export const SearchModal = ({ onCloseModal }) => {
  const classes = useSearchModalStyles();

  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.search.inputValue);

  const { data: productsList } = useGetProductsQuery();

  useEffect(() => {
    const searchResult = productsList?.filter((product) => {
      return (
        product.type.toLowerCase().includes(inputValue) ||
        product.name.toLowerCase().includes(inputValue)
      );
    });

    dispatch(setSearchResultList(searchResult));
  }, [dispatch, inputValue, productsList]);

  const handleFilterProducts = (event) => {
    event.preventDefault();

    const value = event.target.value.toLowerCase();
    dispatch(setInputValue(value));
  };

  const searchProducts = (event) => {
    event.preventDefault();

    if (event.key === 'Enter') {
      dispatch(setShowSearchModal(false));
      dispatch(setShowSearchResults(true));
    }
  };

  return (
    <>
      <div className={classes.modalMask}>
        <div className={classes.formWrapper}>
          <Icon
            className={classes.closeIcon}
            hrefIconName="#close-icon"
            onClick={onCloseModal}
          />
          <input
            className={classes.input}
            type="text"
            placeholder="ENTER SEARCH TERMS"
            name="search"
            onChange={handleFilterProducts}
            onKeyUp={searchProducts}
          />
        </div>
      </div>
    </>
  );
};
