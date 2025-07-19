import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="mt-20 px-12">
      <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
