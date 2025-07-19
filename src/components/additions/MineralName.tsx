import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip.tsx';

type MineralNameProps = {
  name: string;
  description: string;
}

export function MineralName({
  name,
  description
}: MineralNameProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <p>{name}</p>
      </TooltipTrigger>
      <TooltipContent>
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}
