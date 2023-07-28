import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

//constants
import { PATH } from '../../services/constants/paths';

//styles
import { useUpdatesStyles } from './Updates.styles';

export const Updates = () => {
  const classes = useUpdatesStyles();

  const location = useLocation();

  return (
    <div
      className={classNames(classes.root, {
        [classes.rootMargin]: location.pathname === PATH.wishList,
      })}
    >
      <h4 className={classes.title}>SIGN UP FOR UPDATES</h4>
      <p className={classes.text}>
        Sign up for exclusive early sale access and tailored new arrivals.
      </p>
      <span className={classes.formWrapper}>
        <form className={classes.form}>
          <input
            className={classes.input}
            placeholder="Your email address"
            type="email"
          />
          <button className={classes.button}>JOIN</button>
        </form>
      </span>
    </div>
  );
};
