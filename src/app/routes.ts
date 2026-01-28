import { createBrowserRouter } from 'react-router';
import Home from '@/app/pages/Home';
import Docs from '@/app/pages/Docs';
import Pricing from '@/app/pages/Pricing';
import Status from '@/app/pages/Status';
import Privacy from '@/app/pages/Privacy';
import Terms from '@/app/pages/Terms';
import Contact from '@/app/pages/Contact';

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
  {
    path: '/privacy',
    Component: Privacy,
  },
  {
    path: '/terms',
    Component: Terms,
  },
  {
    path: '/contact',
    Component: Contact,
  },
]);