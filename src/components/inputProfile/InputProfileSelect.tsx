import { useEffect, useState } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import { useListInputProfiles } from '@/lib/api/inputProfiles/useListInputProfiles.ts';
import { type ProfileItem } from '@/lib/api/targetProfiles/useListTargetProfiles.ts';

type ProfileSelectProps = {
  onChange?: (profileId: string) => void;
}

export function InputProfileSelect({
  onChange,
}: ProfileSelectProps) {
  const [inputProfileItems, setInputProfileItems] = useState<ProfileItem[]>([]);
  const inputProfiles = useListInputProfiles();

  useEffect(() => {
    setInputProfileItems(inputProfiles());
  }, []);

  const onValueChange = (value: string) => {
    const profile = inputProfileItems.find(p => p.id === value);
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
          inputProfileItems.map(profile =>
            <SelectItem key={profile.id} value={profile.id}>{profile.name}</SelectItem>
          )
        }
      </SelectContent>
    </Select>
  );
}
