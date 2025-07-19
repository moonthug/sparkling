import { useEffect, useState } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import { type ProfileItem, useListTargetProfiles } from '@/lib/api/targetProfiles/useListTargetProfiles.ts';

type ProfileSelectProps = {
  onChange?: (profileId: string) => void;
}

export function TargetProfileSelect({
  onChange,
}: ProfileSelectProps) {
  const [profileItems, setProfileItems] = useState<ProfileItem[]>([]);
  const listTargetProfiles = useListTargetProfiles();

  useEffect(() => {
    setProfileItems(listTargetProfiles());
  }, []);

  const onValueChange = (value: string) => {
    const profile = profileItems.find(p => p.id === value);
    if (profile && onChange) {
      onChange(profile.id);
    }
  }

  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Profile" />
      </SelectTrigger>
      <SelectContent>
        {
          profileItems.map(profile =>
            <SelectItem key={profile.id} value={profile.id}>{profile.name}</SelectItem>
          )
        }
      </SelectContent>
    </Select>
  );
}
