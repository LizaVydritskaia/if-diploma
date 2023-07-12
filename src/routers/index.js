import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { SystemLayout } from '../components/SystemLayout';
import { Home } from '../components/Home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route path="/" element={<Home />} />
    </Route>,
  ),
);
