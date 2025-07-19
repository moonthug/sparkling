import { createFileRoute } from '@tanstack/react-router';

import { Calculator } from '@/components/Calculator.tsx';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <Calculator />
}
