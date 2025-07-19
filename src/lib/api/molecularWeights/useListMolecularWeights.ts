import type { MolecularWeights } from '@/types.ts';
import { molecularWeights } from './molecularWeights.ts';


export function useListMolecularWeights() {
  return (): MolecularWeights => {
    return molecularWeights;
  }
}
