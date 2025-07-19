import type { Profile } from '@/types.ts';
import { targetProfiles } from './targetProfiles.ts';

export type ProfileItem = Pick<Profile, "id" | "name">

export function useListTargetProfiles() {
  return (): ProfileItem[] => {
    return targetProfiles.map(profile => ({ id: profile.id, name: profile.name }));
  }
}
