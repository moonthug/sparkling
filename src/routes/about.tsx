import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      <h1 className="text-2xl mb-4">About</h1>
      <p>Sparkling Water Profile Calculator</p>
      <p>Based on the hard work of Martin Lersch <a href="https://khymos.org/" target="_blank">khymos.org</a></p>
    </div>
  );
}
