import type { InputProfile } from '@/types.ts';
import { inputProfiles } from './inputProfiles.ts';

export type ProfileItem = Pick<InputProfile, "id" | "name">

export function useListInputProfiles() {
  return (): ProfileItem[] => {
    return inputProfiles.map(profile => ({ id: profile.id, name: profile.name }));
  }
}
