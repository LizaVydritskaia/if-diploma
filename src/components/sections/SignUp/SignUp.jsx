import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//slices
import { changeStatus } from '../../../store/slices/auth.slice';

//constants
import { authStatuses } from '../../../services/constants/authStatuses';
import { PATH } from '../../../services/constants/paths';

//components
import { Button } from '../../Button';
import { Icon } from '../../Icon';

//styles
import { useSignUpStyles } from './SignUp.styles';

export const SignUp = () => {
  const classes = useSignUpStyles();

  const checkboxId = useId();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeSignUp = () => {
    navigate(PATH.index);
  };

  const signIn = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { email, password, firstName, lastName } = data;

    if (email && password && firstName && lastName) {
      dispatch(changeStatus(authStatuses.loggedIn));
      navigate(PATH.index);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.signUp}>
        <div className={classes.header}>
          <h2>CREATE ACCOUNT</h2>
          <Icon
            className={classes.iconClose}
            hrefIconName="#close-icon"
            onClick={closeSignUp}
          />
        </div>
        <form className={classes.form} onSubmit={signIn}>
          <input
            className={classes.input}
            name="firstName"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className={classes.input}
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
          />
          <input
            className={classes.input}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className={classes.input}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <div className={classes.checkboxWrapper}>
            <input
              type="checkbox"
              id={checkboxId}
              className={classes.checkboxInput}
            />
            <label className={classes.checkboxLabel} htmlFor={checkboxId}>
              Let&apos;s get personal! We&apos;ll send you only the good stuff:{' '}
              <br /> Exclusive early access to Sale, new arrivals and
              promotions. No nasties.
            </label>
          </div>
          <p className={classes.privacy}>
            By signing up you agree to <span>Terms of Service</span> and{' '}
            <span>Privacy Policy</span>
          </p>
          <Button type="submit" className={classes.button}>
            SIGN UP
          </Button>
        </form>
        <p className={classes.signInLink}>
          <a>I HAVE AN ACCOUNT</a>
        </p>
      </div>
    </div>
  );
};
