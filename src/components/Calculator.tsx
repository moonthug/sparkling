import { DefaultEnabledExtraAdditions } from '@/constants/defaultEnabledExtraAdditions.ts';
import { useCalculateAdditions } from "@/hooks/useCalculateAdditions";
import type { EnabledExtraAdditions, Profile, InputProfile as InputProfileType } from '@/types.ts';
import { Additions } from "./additions/Additions";
import { InputProfile } from "./inputProfile/InputProfile";
import { TargetProfile } from "./targetProfile/TargetProfile";
import { useState } from "react";

export function Calculator() {
  const [targetProfile, setTargetProfile] = useState<Profile>();
  const [inputProfile, setInputProfile] = useState<InputProfileType>();
  const [enabledExtraAdditions, setEnabledExtraAdditions] = useState<EnabledExtraAdditions>(DefaultEnabledExtraAdditions);
  const [productionVolume, setProductionVolume] = useState<number>(20);


  const { additions, composition } = useCalculateAdditions(
    inputProfile,
    targetProfile,
    enabledExtraAdditions,
    productionVolume
  );

  return (
    <div className="flex flex-row gap-12">
      <div className="flex flex-col rounded-lg border w-2/8">
        <InputProfile inputProfile={inputProfile} setInputProfile={setInputProfile} />
      </div>
      <div className="flex flex-col rounded-lg border w-4/8">
        <TargetProfile
          composition={composition}
          profile={targetProfile}
          onProfileChange={setTargetProfile}
        />
      </div>
      <div className="flex flex-col rounded-lg border w-2/8">
        <Additions
          additions={additions}
          enabledExtraAdditions={enabledExtraAdditions}
          setEnabledExtraAdditions={setEnabledExtraAdditions}
          productionVolume={productionVolume}
          setProductionVolume={setProductionVolume}
        />
      </div>
    </div>
  )
}
