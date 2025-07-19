import { DefaultEnabledExtraAdditions } from '@/constants/defaultEnabledExtraAdditions.ts';
import { useListMolecularWeights } from '@/lib/api/molecularWeights/useListMolecularWeights.ts';

import { calculateAdditions } from '@/lib/calculateAdditions.ts';
import { calculateComposition } from '@/lib/calculateComposition.ts';
import { calculateMineralProfile } from '@/lib/calculateMineralProfile.ts';
import type {
  EnabledExtraAdditions,
  InputProfile,
  MineralAdditions,
  MineralProfile, MmolsAndGrams,
  MolecularWeights,
  Profile
} from '@/types.ts';
import { useCallback } from 'react';


type UseCalculateAdditionsValue = {
  additions?: MineralAdditions,
  composition?: MineralProfile<number>,
};

export function useCalculateAdditions(
  inputProfile?: InputProfile,
  targetProfile?: Profile,
  extraAdditions: EnabledExtraAdditions = DefaultEnabledExtraAdditions,
  productionVolume: number = 20
): UseCalculateAdditionsValue {
  const listMolecularWeights = useListMolecularWeights();
  const molecularWeights = listMolecularWeights();

  const memoizedCalculateAdditions = useCallback(
    (inputProfile: MineralProfile<MmolsAndGrams>,
      targetProfile: Profile,
      molecularWeights: MolecularWeights,
      extraAdditions: EnabledExtraAdditions,
      productionVolume: number
    ) => calculateAdditions(inputProfile, targetProfile, molecularWeights, extraAdditions, productionVolume)
    , [molecularWeights]
  );

  if (!inputProfile || !targetProfile) {
    return { additions: undefined, composition: undefined };
  }

  const inputMineralProfile = calculateMineralProfile(inputProfile, molecularWeights);
  const additions = memoizedCalculateAdditions(inputMineralProfile, targetProfile, molecularWeights, extraAdditions, productionVolume);
  const composition = calculateComposition(additions, inputMineralProfile, molecularWeights);

  console.log(composition);

  return {
    additions: Object.entries(additions).reduce((acc, [key, value]) => {
      acc[key as keyof MineralAdditions] = value.grams;
      return acc;
    }, {} as MineralAdditions),
    composition: Object.entries(composition).reduce((acc, [key, value]) => {
      acc[key as keyof MineralProfile] = value.grams;
      return acc;
    }, {} as MineralProfile<number>),
  }
}
