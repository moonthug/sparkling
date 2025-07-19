import { createFileRoute } from '@tanstack/react-router';

import { Calculator } from '@/components/Calculator.tsx';

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      <h1 className="text-2xl mb-4">About</h1>
      <p>This is a calculator for calculating the additions needed to achieve a target profile.</p>
      <p>It allows you to input your current profile and the target profile, and it will calculate the necessary additions.</p>
      <p>Feel free to explore and use the calculator!</p>
    </div>
  );
}
