import type { Profile } from '@/types.ts';
import { targetProfiles } from './targetProfiles.ts';

export function useGetTargetProfile() {
  return (id: string): Profile | undefined => {
    return targetProfiles.find(profile => profile.id === id);
  }
}
