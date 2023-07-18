import React from 'react';

//styles
import { useUpdatesStyles } from './Updates.styles';

export const Updates = () => {
  const classes = useUpdatesStyles();

  return (
    <div className={classes.root}>
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
