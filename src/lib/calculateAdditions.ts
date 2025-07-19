import { gramsToMillimoles } from '@/lib/gramsToMillimoles.ts';
import type {
  EnabledExtraAdditions,
  MineralProfile,
  MmolsAndGrams,
  MmolsMgramsAndGrams,
  MolecularWeights,
  Profile
} from '@/types';
import { millimolesToMilligrams } from './millimolesToMilligrams.ts';

function positiveValueOrZero(value: number): number {
  return value > 0 ? value : 0;
}

function enabledValueOrZero(enabled: boolean, value: number): number {
  return enabled ? value : 0;
}

function mgramsToGrams(mgrams: number, multiplier: number): number {
  return (mgrams * multiplier) / 1000;
}

export type Additions = {
  nacl: MmolsMgramsAndGrams,
  nahco3: MmolsMgramsAndGrams,
  khco3: MmolsMgramsAndGrams,
  mgcl2: MmolsMgramsAndGrams,
  cano3: MmolsMgramsAndGrams,
  mgso4: MmolsMgramsAndGrams,
  caso4: MmolsMgramsAndGrams,
  mgoh2: MmolsMgramsAndGrams,
  caoh2: MmolsMgramsAndGrams,
  mgco3: MmolsMgramsAndGrams,
  caco3: MmolsMgramsAndGrams,
}

export function calculateAdditions(
  inputProfile: MineralProfile<MmolsAndGrams>,
  targetProfile: Profile,
  molecularWeights: MolecularWeights,
  extraAdditions: EnabledExtraAdditions,
  productionVolume: number
): Additions {

  const ca = positiveValueOrZero(targetProfile.ca - inputProfile.ca.grams);
  const mg = positiveValueOrZero(targetProfile.mg - inputProfile.mg.grams);
  const na = positiveValueOrZero(targetProfile.na - inputProfile.na.grams);
  const k = positiveValueOrZero(targetProfile.k - inputProfile.k.grams);
  const hco3 = positiveValueOrZero(targetProfile.hco3 - inputProfile.hco3.grams);
  const so4 = positiveValueOrZero(targetProfile.so4 - inputProfile.so4.grams);
  const cl = positiveValueOrZero(targetProfile.cl - inputProfile.cl.grams);
  const no3 = positiveValueOrZero(targetProfile.no3 - inputProfile.no3.grams);

  const correctedTargetValues: MineralProfile<MmolsAndGrams> = {
    ca: {
      mmol: gramsToMillimoles('ca', ca, molecularWeights),
      grams: ca
    },
    mg: {
      mmol: gramsToMillimoles('mg', mg, molecularWeights),
      grams: mg
    },
    na: {
      mmol: gramsToMillimoles('na', na, molecularWeights),
      grams: na
    },
    k: {
      mmol: gramsToMillimoles('k', k, molecularWeights),
      grams: k
    },
    hco3: {
      mmol: gramsToMillimoles('hco3', hco3, molecularWeights),
      grams: hco3
    },
    so4: {
      mmol: gramsToMillimoles('so4', so4, molecularWeights),
      grams: so4
    },
    cl: {
      mmol: gramsToMillimoles('cl', cl, molecularWeights),
      grams: cl
    },
    no3: {
      mmol: gramsToMillimoles('no3', no3, molecularWeights),
      grams: no3
    }
  }


  const nacl = correctedTargetValues.na.mmol > correctedTargetValues.cl.mmol
    ? correctedTargetValues.cl.mmol
    : correctedTargetValues.na.mmol;
  const nahco3 = positiveValueOrZero(correctedTargetValues.na.mmol - nacl);
  const khco3 = enabledValueOrZero(extraAdditions.k, correctedTargetValues.k.mmol)
  const mgcl2 = enabledValueOrZero(extraAdditions.mgcl2, (correctedTargetValues.cl.mmol - nacl) / 2)
  const cano3 = enabledValueOrZero(extraAdditions.no3, correctedTargetValues.no3.mmol / 2)
  const mgso4 = correctedTargetValues.so4.mmol - mgcl2 < correctedTargetValues.mg.mmol
      ? positiveValueOrZero(correctedTargetValues.so4.mmol - mgcl2)
      : positiveValueOrZero(correctedTargetValues.mg.mmol - mgcl2);
  const caso4 = positiveValueOrZero(correctedTargetValues.so4.mmol - mgso4);
  const mgoh2 = enabledValueOrZero(extraAdditions.mgoh2,
    positiveValueOrZero(correctedTargetValues.mg.mmol - mgso4 - mgcl2)
  );
  const caoh2 = enabledValueOrZero(extraAdditions.caoh2,
    positiveValueOrZero(correctedTargetValues.ca.mmol - caso4 - cano3)
  )
  const mgco3 = enabledValueOrZero(extraAdditions.mgco3,
    positiveValueOrZero(correctedTargetValues.mg.mmol - mgso4 - mgcl2)
  )
  const caco3 = enabledValueOrZero(extraAdditions.caco3,
    positiveValueOrZero(correctedTargetValues.ca.mmol - caso4 - cano3)
  );

  const mmolValues = {
    nacl,
    nahco3,
    khco3,
    mgcl2,
    cano3,
    mgso4,
    caso4,
    mgoh2,
    caoh2,
    mgco3,
    caco3
  };

  const mgramsValues = Object.entries(mmolValues).reduce((acc, [key, value]) => {
    acc[key as keyof Additions] = millimolesToMilligrams(key as keyof MolecularWeights, value, molecularWeights);
    return acc;
  }, {} as Record<keyof Additions, number>);

  const gramValues = Object.entries(mgramsValues).reduce((acc, [key, value]) => {
    acc[key as keyof Additions] = mgramsToGrams(value, productionVolume);
    return acc;
  }, {} as Record<keyof Additions, number>)


  return {
    nacl: { mmol: nacl, mgrams: mgramsValues.nacl, grams: gramValues.nacl },
    nahco3: { mmol: nahco3, mgrams: mgramsValues.nahco3, grams: gramValues.nahco3 },
    khco3: { mmol: khco3, mgrams: mgramsValues.khco3, grams: gramValues.khco3},
    mgcl2: { mmol: mgcl2, mgrams: mgramsValues.mgcl2, grams: gramValues.mgcl2 },
    cano3: { mmol: cano3, mgrams: mgramsValues.cano3, grams: gramValues.cano3 },
    mgso4: { mmol: mgso4, mgrams: mgramsValues.mgso4, grams: gramValues.mgso4 },
    caso4: { mmol: caso4, mgrams: mgramsValues.caso4, grams: gramValues.caso4 },
    mgoh2: { mmol: mgoh2, mgrams: mgramsValues.mgoh2, grams: gramValues.mgoh2 },
    caoh2: { mmol: caoh2, mgrams: mgramsValues.caoh2, grams: gramValues.caoh2 },
    mgco3: { mmol: mgco3, mgrams: mgramsValues.mgco3, grams: gramValues.mgco3 },
    caco3: { mmol: caco3, mgrams: mgramsValues.caco3, grams: gramValues.caco3 }
  };
}
