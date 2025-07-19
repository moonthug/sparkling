import type { InputProfile, MineralProfile, MmolsAndGrams, MolecularWeights } from '@/types';
import { gramsToMillimoles } from './gramsToMillimoles';


export function calculateMineralProfile(
  inputProfile: InputProfile,
  molecularWeights: MolecularWeights,
): MineralProfile<MmolsAndGrams> {
  return {
    ca: {
      mmol: gramsToMillimoles('ca', inputProfile.ca, molecularWeights),
      grams: inputProfile.ca,
    },
    mg: {
      mmol: gramsToMillimoles('mg', inputProfile.mg, molecularWeights),
      grams: inputProfile.mg,
    },
    na: {
      mmol: gramsToMillimoles('na', inputProfile.na, molecularWeights),
      grams: inputProfile.na,
    },
    k: {
      mmol: gramsToMillimoles('k', inputProfile.k, molecularWeights),
      grams: inputProfile.k,
    },
    hco3: {
      mmol: gramsToMillimoles('hco3', inputProfile.hco3, molecularWeights),
      grams: inputProfile.hco3,
    },
    so4: {
      mmol: gramsToMillimoles('so4', inputProfile.so4, molecularWeights),
      grams: inputProfile.so4,
    },
    cl: {
      mmol: gramsToMillimoles('cl', inputProfile.cl, molecularWeights),
      grams: inputProfile.cl,
    },
    no3: {
      mmol: gramsToMillimoles('no3', inputProfile.no3, molecularWeights),
      grams: inputProfile.no3,
    }
  };
}
