import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
//
// import { persistor, store } from '../../store';

//components
// import { Loader } from '../Loader';
import { Sprite } from '../Sprite';

export const SystemLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Sprite />
      <Outlet />
    </>
  );
};
