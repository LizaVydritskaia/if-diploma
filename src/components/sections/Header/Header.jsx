import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import { Icon } from '../../Icon';

//styles
import { useHeaderStyles } from './Header.styles';

export const Header = () => {
  const classes = useHeaderStyles();

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/sign-up');
  };

  return (
    <header className={classes.root}>
      <div className={classes.menu}>
        <span className={classes.text}>NEW ARRIVALS</span>
        <span className={classes.text}>SHOP</span>
        <span className={classes.text}>COLLECTIONS</span>
      </div>
      <Icon className={classes.logo} hrefIconName="#logo" />
      <div className={classes.menu}>
        <div className={classes.search}>
          <Icon className={classes.searchIcon} hrefIconName="#search" />
          <span className={classes.text}>SEARCH</span>
        </div>
        <span className={classes.text} onClick={handleSignIn}>
          SIGN IN
        </span>
        <span className={classes.text}>BAG (2)</span>
        <Icon className={classes.wishListIcon} hrefIconName="#wish-list" />
      </div>
    </header>
  );
};
