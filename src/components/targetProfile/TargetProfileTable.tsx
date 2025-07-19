import { TargetProfileRow } from './TargetProfileRow.tsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx';
import type { MineralProfile, Profile } from '@/types.ts';
import { formatValue } from './formatValue';


type ProfileTableProps = {
  composition?: MineralProfile<number>,
  profile?: Profile,
}
export function TargetProfileTable({
  composition,
  profile
}: ProfileTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Profile mg/L</TableHead>
          <TableHead>Composition mg/L</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TargetProfileRow name="Calcium" targetValue={profile?.ca} compositionValue={composition?.ca} />
        <TargetProfileRow name="Magnesium" targetValue={profile?.mg} compositionValue={composition?.mg} />
        <TargetProfileRow name="Sodium" targetValue={profile?.na} compositionValue={composition?.na} />
        <TargetProfileRow name="Potassium" targetValue={profile?.k} compositionValue={composition?.k} />
        <TargetProfileRow name="Bicarbonate" targetValue={profile?.hco3} compositionValue={composition?.hco3} />
        <TargetProfileRow name="Sulphate" targetValue={profile?.so4} compositionValue={composition?.so4} />
        <TargetProfileRow name="Chloride" targetValue={profile?.cl} compositionValue={composition?.cl} />
        <TargetProfileRow name="Nitrate" targetValue={profile?.no3} compositionValue={composition?.no3} />
        <TableRow>
          <TableCell>Carbon Dioxide</TableCell>
          <TableCell>{ formatValue(profile?.co2) }</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>pH</TableCell>
          <TableCell>{ formatValue(profile?.ph) }</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>TDS</TableCell>
          <TableCell>{ formatValue(profile?.tds) }</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
