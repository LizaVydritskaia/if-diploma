import React, { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//config
import { descriptionConfig } from './descriptionConfig';

//slices
import { addProductToBag } from '../../../store/slices/bag.slice';

//components
import { Footer } from '../../sections/Footer';
import { Header } from '../../sections/Header';
import { Icon } from '../../Icon';

//styles
import { useProductPageStyles } from './ProductPage.styles';

export const ProductPage = () => {
  const classes = useProductPageStyles();

  const [showDescription, setShowDescription] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const toggleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddProductToBag = (event) => {
    event.stopPropagation();
    dispatch(addProductToBag(state));
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
            <button>
              <Icon className={classes.icon} hrefIconName="#like" />
            </button>
          </div>
          {descriptionConfig.map((item) => (
            <Fragment key={item.id}>
              <div
                className={classes.titleBlock}
                onClick={toggleShowDescription}
              >
                {showDescription === true ? (
                  <Icon
                    className={classes.expandCollapseIcon}
                    hrefIconName="#collapse-icon"
                  />
                ) : (
                  <Icon
                    className={classes.expandCollapseIcon}
                    hrefIconName="#expand-icon"
                  />
                )}
                <p className={classes.title}>{item.title}</p>
              </div>
              {showDescription && (
                <p className={classes.description}>{state.description}</p>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
