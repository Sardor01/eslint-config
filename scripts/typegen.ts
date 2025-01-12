import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import { writeFile } from 'node:fs/promises';
import pico from 'picocolors';

import { sarast } from '../src/presets';

const dts = await flatConfigsToRulesDTS(
  sarast(
    [
      {
        plugins: { '': { rules: Object.fromEntries(builtinRules) } },
      },
    ],
    { vue: true, unocss: true },
  ),
  { includeAugmentation: false, exportTypeName: 'Rules' },
);

await writeFile('src/typegen.ts', dts);

console.log(pico.green('Type definitions generated!'));
