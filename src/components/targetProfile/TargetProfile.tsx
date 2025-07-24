import { useGetTargetProfile } from '@/lib/api/targetProfiles/useGetTargetProfile.ts';
import type { MineralProfile, Profile } from '@/types.ts';

import { TargetProfileSelect } from './TargetProfileSelect.tsx';
import { TargetProfileTable } from './TargetProfileTable.tsx';


type TargetProfileProps = {
  profile?: Profile,
  composition?:  MineralProfile<number>,
  onProfileChange: (profile: Profile | undefined) => void
}

export function TargetProfile({
  profile,
  composition,
  onProfileChange
}: TargetProfileProps) {
  const getTargetProfile = useGetTargetProfile();

  const setProfileFromId = (profileId: string) => {
    const targetProfile = getTargetProfile(profileId)
    onProfileChange(targetProfile);
  }

  return (
    <>
      <div className="flex flex-col gap-2 p-4 min-h-36">
        <h2 className="text-lg mb-2">Target Profile</h2>
        <TargetProfileSelect onChange={profileId => setProfileFromId(profileId)} />
      </div>
      <TargetProfileTable profile={profile} composition={composition} />
    </>
  );
}
