import type { MolecularWeights } from '@/types.ts';

export function gramsToMillimoles(
  mineral: keyof MolecularWeights,
  value: number,
  molecularWeights: MolecularWeights
): number {
  const molecularWeight = molecularWeights[mineral];
  return value / molecularWeight;
}
