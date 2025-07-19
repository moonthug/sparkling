import type { InputProfile } from '@/types.ts';

import { inputProfiles } from './inputProfiles.ts';

export function useGetInputProfile() {
  return (id: string): InputProfile | undefined => {
    return inputProfiles.find(profile => profile.id === id);
  }
}
