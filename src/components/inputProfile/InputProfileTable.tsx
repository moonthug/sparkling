import { useEffect, useState } from 'react';

import type { InputProfile } from '@/types.ts';
import { Input } from '@/components/ui/input.tsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx';

type InputProfileTableProps = {
  inputProfile?: InputProfile;
  onChange?: (inputProfile: InputProfile) => void;
}

type MineralKeys = keyof Pick<InputProfile, "ca" | "mg" | "na" | "k" | "hco3" | "so4" | "cl" | "no3">;

export function InputProfileTable({
  inputProfile,
  onChange
}: InputProfileTableProps) {
  const [currentInputProfile, setCurrentInputProfile] = useState<InputProfile>(inputProfile || {
    id: '0',
    name: 'Default Input Profile',
    ca: 0,
    mg: 0,
    na: 0,
    k: 0,
    hco3: 0,
    so4: 0,
    cl: 0,
    no3: 0
  });

  useEffect(() => {
    if (inputProfile) {
      setCurrentInputProfile(inputProfile);
    }
  }, [inputProfile]);

  useEffect(() => {
    onChange && onChange(currentInputProfile)
  }, [currentInputProfile]);

  const setMineralValue = (key: MineralKeys, value: string) => {
    setCurrentInputProfile(currentInputProfile => {
      const newInputProfile = { ...currentInputProfile };
      newInputProfile[key] = value ? parseFloat(value) : 0;
      return newInputProfile;
    })
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className="w-24">mg/L</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Calcium</TableCell>
          <TableCell>
            <Input
              type="number"
              min="0"
              value={currentInputProfile.ca}
              onChange={event => setMineralValue("ca", event.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Magnesium</TableCell>
          <TableCell>
            <Input
              type="number"
              min="0"
              value={currentInputProfile.mg}
              onChange={event => setMineralValue("mg", event.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Sodium</TableCell>
          <TableCell>
            <Input
              type="number"
              min="0"
              value={currentInputProfile.na}
              onChange={event => setMineralValue("na", event.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Potassium</TableCell>
          <TableCell>
            <Input
              type="number"
              min="0"
              value={currentInputProfile.k}
              onChange={event => setMineralValue("k", event.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bicarbonate</TableCell>
          <TableCell>
            <Input
              type="number"
              min="0"
              value={currentInputProfile.hco3}
              onChange={event => setMineralValue("hco3", event.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Sulphate</TableCell>
          <TableCell>
            <Input
              type="number"
              min="0"
              value={currentInputProfile.so4}
              onChange={event => setMineralValue("so4", event.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Chloride</TableCell>
          <TableCell>
            <Input
              type="number"
              min="0"
              value={currentInputProfile.cl}
              onChange={event => setMineralValue("cl", event.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Nitrate</TableCell>
          <TableCell>
            <Input
              type="number"
              min="0"
              value={currentInputProfile.no3}
              onChange={event => setMineralValue("no3", event.target.value)}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
