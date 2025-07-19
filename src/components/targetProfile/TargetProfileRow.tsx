import { ArrowBigDown, ArrowBigUp, Check } from 'lucide-react';

import { TableCell, TableRow } from '@/components/ui/table.tsx';
import { formatValue } from './formatValue';

function getIcon(difference: number) {
  if (difference < -1) {
    return <ArrowBigDown className="text-red-600" />;
  }

  if (difference > 1) {
    return <ArrowBigUp className="text-red-600"/>;
  }

  return <Check className="text-green-400" />
}

type TargetProfileRowProps = {
  name: string,
  compositionValue?: number,
  targetValue?: number,
}

export function TargetProfileRow({
  name,
  compositionValue,
  targetValue
}: TargetProfileRowProps) {
  const difference = Math.round((targetValue || 0) - (compositionValue || 0));

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{ formatValue(targetValue) }</TableCell>
      <TableCell>{ formatValue(compositionValue) }</TableCell>
      <TableCell>
        {
          !!(compositionValue || targetValue) &&
          <div className="flex flex-col items-center justify-center h-full">
            { getIcon(difference) }
          </div>
        }
      </TableCell>
    </TableRow>
  )
}
