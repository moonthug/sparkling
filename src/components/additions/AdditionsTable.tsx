import { MineralName } from '@/components/additions/MineralName.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table.tsx';
import type { EnabledExtraAdditions, MineralAdditions } from '@/types.ts';


type AdditionsTableProps = {
  additions?: MineralAdditions,
  enabledExtraAdditions: EnabledExtraAdditions,
  setEnabledExtraAdditions: (enabled: EnabledExtraAdditions) => void,
}

function formatValue(value: number | undefined): string {
  return value === undefined ? '-' : value.toFixed(2);
}

export function AdditionsTable({
  additions,
  enabledExtraAdditions,
  setEnabledExtraAdditions
}: AdditionsTableProps) {

  const setMineralEnabled = (mineral: keyof EnabledExtraAdditions) => {
    if (mineral === 'mgoh2' || mineral === 'mgco3') {
      setEnabledExtraAdditions({
        ...enabledExtraAdditions,
        mgoh2: !enabledExtraAdditions.mgoh2,
        mgco3: !enabledExtraAdditions.mgco3,
      });
    } else if (mineral === 'caoh2' || mineral === 'caco3') {
      setEnabledExtraAdditions({
        ...enabledExtraAdditions,
        caoh2: !enabledExtraAdditions.caoh2,
        caco3: !enabledExtraAdditions.caco3,
      });
    } else {
      setEnabledExtraAdditions({
        ...enabledExtraAdditions,
        [mineral]: !enabledExtraAdditions[mineral],
      });
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Enabled</TableHead>
          <TableHead>Mineral</TableHead>
          <TableHead>g</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell></TableCell>
          <TableCell><MineralName name="NaCl" description="Soldium Chloride [Table Salt]"/></TableCell>
          <TableCell>{ formatValue(additions?.nacl) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell><MineralName name="NaHCO3" description="Sodium Bicarbonate [Baking Soda]"/></TableCell>
          <TableCell>{ formatValue(additions?.nahco3) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={ enabledExtraAdditions.k }
              onCheckedChange={() => setMineralEnabled('k') }
            />
          </TableCell>
          <TableCell><MineralName name="KHCO3" description="Potassium Bicarbonate"/></TableCell>
          <TableCell>{ formatValue(additions?.khco3) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={ enabledExtraAdditions.mgcl2 }
              onCheckedChange={() => setMineralEnabled('mgcl2') }
            />
          </TableCell>
          <TableCell><MineralName name="MgCL2" description="Magnesium Chloride"/></TableCell>
          <TableCell>{ formatValue(additions?.mgcl2) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={ enabledExtraAdditions.no3 }
              onCheckedChange={() => setMineralEnabled('no3') }
            />
          </TableCell>
          <TableCell><MineralName name="Ca(NO3)2·4H2O" description="Calcium Nitrate Tetrahydrate"/></TableCell>
          <TableCell>{ formatValue(additions?.cano3) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell><MineralName name="MgSO4·7H2O" description="Magnesium Sulfate Heptahydrate [Epsom Salt]"/></TableCell>
          <TableCell>{ formatValue(additions?.mgso4) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell><MineralName name="CaSO4·0.5H2O" description="Calcium Sulfate Hemihydrate [Plaster of Paris]"/></TableCell>
          <TableCell>{ formatValue(additions?.caso4) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={ enabledExtraAdditions.mgoh2 }
              onCheckedChange={() => setMineralEnabled('mgoh2') }
            />
          </TableCell>
          <TableCell><MineralName name="Mg(OH)2" description="Magnesium Hydroxide [Milk of Magnesia]"/></TableCell>
          <TableCell>{ formatValue(additions?.mgoh2) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={ enabledExtraAdditions.caoh2 }
              onCheckedChange={() => setMineralEnabled('caoh2') }
            />
          </TableCell>
          <TableCell><MineralName name="Ca(OH)2" description="Calcium Hydroxide [Slacked Lime]"/></TableCell>
          <TableCell>{ formatValue(additions?.caoh2) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={ enabledExtraAdditions.mgco3 }
              onCheckedChange={() => setMineralEnabled('mgco3') }
            />
          </TableCell>
          <TableCell><MineralName name="MgCO3" description="Magnesium Carbonate"/></TableCell>
          <TableCell>{ formatValue(additions?.mgco3) }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={ enabledExtraAdditions.caco3 }
              onCheckedChange={() => setMineralEnabled('caco3') }
            />
          </TableCell>
          <TableCell><MineralName name="CaCO3" description="Calcium Carbonate [Chalk]"/></TableCell>
          <TableCell>{ formatValue(additions?.caco3) }</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
