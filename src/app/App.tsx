import { RouterProvider } from 'react-router';
import { router } from '@/app/routes';
import '@/styles/pulsepreview.css';

export default function App() {
  return <RouterProvider router={router} />;
}
