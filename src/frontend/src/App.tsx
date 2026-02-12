import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';
import AboutPage from './pages/AboutPage';
import PrivacyDisclaimerPage from './pages/PrivacyDisclaimerPage';
import AppLayout from './components/AppLayout';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
      <Toaster />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chat',
  component: ChatPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: PrivacyDisclaimerPage,
});

const routeTree = rootRoute.addChildren([indexRoute, chatRoute, aboutRoute, privacyRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
