import { useGetInputProfile } from '@/lib/api/inputProfiles/useGetInputProfile.ts';
import type { InputProfile } from '@/types.ts';

import { InputProfileSelect } from './InputProfileSelect.tsx';
import { InputProfileTable } from './InputProfileTable.tsx';


type InputProfileProps = {
  inputProfile?: InputProfile,
  setInputProfile: (inputProfile?: InputProfile) => void
}

export function InputProfile({
  inputProfile,
  setInputProfile
}: InputProfileProps) {
  const getInputProfile = useGetInputProfile();

  const setInputProfileFromId = (profileId: string) => {
    const inputProfile = getInputProfile(profileId);
    setInputProfile(inputProfile);
  }

  return (
    <>
      <div className="flex flex-col gap-2 p-4 min-h-36">
        <h2 className="text-lg mb-2">Water Source</h2>
        <InputProfileSelect onChange={inputProfileId => setInputProfileFromId(inputProfileId)} />
      </div>
      <InputProfileTable inputProfile={inputProfile} onChange={inputProfile => setInputProfile(inputProfile)} />
    </>
  );
}
