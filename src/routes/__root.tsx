import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '@/components/Header'
import { ThemeProvider } from '@/context/ThemeProvider'

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <div className="mt-12 px-12">
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
})
