import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

//constants
import { PATH } from '../../services/constants/paths';

//services
import { useSignUpForUpdatesMutation } from '../../services/api/updates';

//slices
import {
  setShowUpdatesMessage,
  setSuccessUpdatesMessage,
} from '../../store/slices/updates.slice';

//components
import { TextMessage } from '../TextMessage';

//styles
import { useUpdatesStyles } from './Updates.styles';

export const Updates = () => {
  const classes = useUpdatesStyles();

  const location = useLocation();
  const dispatch = useDispatch();

  const [signUpForUpdates] = useSignUpForUpdatesMutation();

  const showUpdatesMessage = useSelector(
    (state) => state.updates.showUpdatesMessage,
  );
  const successUpdatesMessage = useSelector(
    (state) => state.updates.successUpdatesMessage,
  );

  const handleSignUp = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { email } = data;

    signUpForUpdates(email).then((response) => {
      dispatch(setShowUpdatesMessage(true));
      dispatch(setSuccessUpdatesMessage(response.data.message));
    });
  };

  return (
    <>
      {showUpdatesMessage ? (
        <TextMessage
          className={classes.successMessage}
          contentText={successUpdatesMessage}
        />
      ) : (
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
            <form className={classes.form} onSubmit={handleSignUp}>
              <input
                className={classes.input}
                placeholder="Your email address"
                name="email"
                type="email"
              />
              <button type="submit" className={classes.button}>
                JOIN
              </button>
            </form>
          </span>
        </div>
      )}
    </>
  );
};
