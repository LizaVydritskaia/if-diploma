import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';

//constants
import { PATH } from '../services/constants/paths';

//components
import { Bag } from '../components/pages/Bag';
import { Home } from '../components/Home';
import { ProductPage } from '../components/pages/ProductPage';
import { SignUp } from '../components/sections/SignUp';
import { SystemLayout } from '../components/SystemLayout';
import { WishList } from '../components/pages/WishList';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route path={PATH.signUp} element={<SignUp />} />
      <Route path={PATH.index} element={<Home />} />
      <Route path={PATH.index} element={<Outlet />}>
        <Route path="/:id" element={<ProductPage />} />
      </Route>
      <Route path={PATH.bag} element={<Bag />} />
      <Route path={PATH.wishList} element={<WishList />} />
    </Route>,
  ),
);
