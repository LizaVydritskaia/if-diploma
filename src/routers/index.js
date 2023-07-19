import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

//components
import { Home } from '../components/Home';
import { SystemLayout } from '../components/SystemLayout';
import { SignUp } from '../components/sections/SignUp';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Home />} />
    </Route>,
  ),
);
