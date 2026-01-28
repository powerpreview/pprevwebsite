import { createBrowserRouter } from 'react-router';
import Home from '@/app/pages/Home';
import Docs from '@/app/pages/Docs';
import Pricing from '@/app/pages/Pricing';
import Status from '@/app/pages/Status';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/docs',
    Component: Docs,
  },
  {
    path: '/pricing',
    Component: Pricing,
  },
  {
    path: '/status',
    Component: Status,
  },
]);