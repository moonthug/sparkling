import { millimolesToMilligrams } from '@/lib/millimolesToMilligrams.ts';
import type { MineralProfile, MmolsAndGrams, MolecularWeights } from '@/types';
import type { Additions } from './calculateAdditions';

export type Composition = {
  ca: MmolsAndGrams;
  mg: MmolsAndGrams;
  na: MmolsAndGrams;
  k: MmolsAndGrams;
  hco3: MmolsAndGrams;
  so4: MmolsAndGrams;
  cl: MmolsAndGrams;
  no3: MmolsAndGrams;
}

export function calculateComposition(
  additions: Additions,
  inputProfile: MineralProfile<MmolsAndGrams>,
  molecularWeights: MolecularWeights,
): Composition {
  const ca = additions.caco3.mmol + additions.caso4.mmol + additions.caoh2.mmol + inputProfile.ca.mmol;
  const mg = additions.mgcl2.mmol + additions.mgso4.mmol + additions.mgoh2.mmol + additions.mgco3.mmol + inputProfile.mg.mmol;
  const na = additions.nacl.mmol + additions.nahco3.mmol + inputProfile.na.mmol;
  const k = additions.khco3.mmol + inputProfile.k.mmol;
  const hco3 = additions.nahco3.mmol + additions.khco3.mmol + additions.mgoh2.mmol + 2 * additions.caoh2.mmol + 2 * additions.mgco3.mmol + 2 * additions.caco3.mmol + inputProfile.hco3.mmol;
  const so4 = additions.mgso4.mmol + additions.caso4.mmol + inputProfile.so4.mmol;
  const cl = additions.nacl.mmol + additions.mgcl2.mmol + inputProfile.cl.mmol;
  const no3 = additions.cano3.mmol + inputProfile.no3.mmol;

  console.log('COMP MOLES', ca, mg, na, k, hco3, so4, cl, no3);

  return {
    ca: { mmol: ca, grams: millimolesToMilligrams('ca', ca, molecularWeights) },
    mg: { mmol: mg, grams: millimolesToMilligrams('mg', mg, molecularWeights) },
    na: { mmol: na, grams: millimolesToMilligrams('na', na, molecularWeights) },
    k: { mmol: k, grams: millimolesToMilligrams('k', k, molecularWeights) },
    hco3: { mmol: hco3, grams: millimolesToMilligrams('hco3', hco3, molecularWeights) },
    so4: { mmol: so4, grams: millimolesToMilligrams('so4', so4, molecularWeights) },
    cl: { mmol: cl, grams: millimolesToMilligrams('cl', cl, molecularWeights) },
    no3: { mmol: no3, grams: millimolesToMilligrams('no3', no3, molecularWeights) },
  };
}
