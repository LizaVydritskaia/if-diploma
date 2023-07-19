import React, { useId } from 'react';
import { Icon } from '../../Icon';
import { useSignUpStyles } from './SignUp.styles';

export const SignUp = () => {
  const classes = useSignUpStyles();

  const checkboxId = useId();

  return (
    <div className={classes.root}>
      <div className={classes.signUp}>
        <div className={classes.header}>
          <h2>CREATE ACCOUNT</h2>
          <Icon className={classes.iconClose} hrefIconName="#close-icon" />
        </div>
        <form className={classes.form}>
          <input
            className={classes.input}
            type="text"
            placeholder="First Name"
          />
          <input
            className={classes.input}
            type="text"
            placeholder="Last Name"
          />
          <input className={classes.input} type="email" placeholder="Email" />
          <input
            className={classes.input}
            type="password"
            placeholder="Password"
          />
          <input type="checkbox" id={checkboxId} />
          <label className={classes.checkboxLabel} htmlFor={checkboxId}>
            Let&apos;s get personal! We&apos;ll send you only the good stuff: Exclusive
            early access to Sale, new arrivals and promotions. No nasties.
          </label>
          <p className={classes.privacy}>By signing up you agree to <span>Terms of Service</span> and <span>Privacy Policy</span></p>
          <button className={classes.button}>SIGN UP</button>
        </form>
        <p className={classes.signInLink}><a>I HAVE AN ACCOUNT</a></p>
      </div>
    </div>
  );
};
