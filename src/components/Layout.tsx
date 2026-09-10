import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LightboxProvider } from './Lightbox';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <LightboxProvider>
      <ScrollToTop />
      <Outlet />
    </LightboxProvider>
  );
}
