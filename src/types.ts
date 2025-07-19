export type Profile = {
  id: string,
  name: string,
  ca: number,
  mg: number,
  na: number,
  k: number,
  hco3: number,
  so4: number,
  cl: number,
  no3: number,
  co2?: number,
  ph?: number,
  tds?: number,
  tdsCalculated: number,
  tdsDiff?: number,
  caMg?: number,
  caNa?: number,
  positiveCharge: number,
  negativeCharge: number,
  chargeDiff: number,
  comment?: string,
  url?: string
}

export type InputProfile = {
  id: string,
  name: string
  ca: number,
  mg: number,
  na: number,
  k: number,
  hco3: number,
  so4: number,
  cl: number,
  no3: number,
}


export type MmolsAndGrams = {
  mmol: number;
  grams: number;
}

export type MmolsMgramsAndGrams = {
  mmol: number;
  mgrams: number;
  grams: number;
}

export type MineralProfile<TUnitType = MmolsAndGrams | number> = {
  ca: TUnitType,
  mg: TUnitType,
  na: TUnitType,
  k: TUnitType,
  hco3: TUnitType,
  so4: TUnitType,
  cl: TUnitType,
  no3: TUnitType,
}

export type MolecularWeights = {
  ca: number,
  mg: number,
  na: number,
  k: number,
  hco3: number,
  so4: number,
  cl: number,
  no3: number,
  co2: number,
  nacl: number,
  nahco3: number,
  mgso4: number,
  caso4: number,
  mgoh2: number,
  caoh2: number,
  cano3: number,
  khco3: number,
  mgcl2: number,
  caco3: number,
  mgco3: number,
}

export type MineralAdditions = {
  nacl: number,
  nahco3: number,
  khco3: number,
  mgcl2: number,
  cano3: number,
  mgso4: number,
  caso4: number,
  mgoh2: number,
  caoh2: number,
  mgco3: number,
  caco3: number,
}

export type EnabledExtraAdditions = {
  k: boolean,
  no3: boolean,
  mgcl2: boolean,
  mgoh2: boolean,
  caoh2: boolean,
  mgco3: boolean,
  caco3: boolean,
}
