import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import type { EnabledExtraAdditions, MineralAdditions } from '@/types.ts';
import { AdditionsTable } from './AdditionsTable.tsx';


type AdditionsProps = {
  additions?: MineralAdditions,
  enabledExtraAdditions: EnabledExtraAdditions,
  productionVolume: number,
  setEnabledExtraAdditions: (enabled: EnabledExtraAdditions) => void,
  setProductionVolume: (volume: number) => void
}

export function Additions({
  additions,
  enabledExtraAdditions,
  productionVolume,
  setEnabledExtraAdditions,
  setProductionVolume
}: AdditionsProps) {
  return (
    <>


      <div className="flex flex-col gap-2 p-4 min-h-36">
        <h2 className="text-lg mb-2">Additions</h2>
        <div className="flex flex-col gap-2">
          <Label htmlFor="productionVolume">Production Volume (L)</Label>
          <Input
            name="productionVolume"
            className="flex"
            type="number"
            onChange={event => setProductionVolume(parseFloat(event.target.value))}
            placeholder="Litres"
            value={productionVolume}
          />
        </div>
      </div>
      <AdditionsTable
        additions={additions}
        enabledExtraAdditions={enabledExtraAdditions}
        setEnabledExtraAdditions={setEnabledExtraAdditions}
      />
    </>
  );
}
