import type { Linter } from 'eslint';

import { GLOB_YAML } from '../globs';
import { parserYml, pluginYml } from '../plugins';

export const yml: Linter.Config[] = [
  {
    files: [GLOB_YAML],
    languageOptions: {
      parser: parserYml,
    },
    name: 'sarast/yaml',
    plugins: {
      yml: pluginYml as any,
    },
    rules: {
      ...(pluginYml.configs.standard.rules as Linter.RulesRecord),
      ...(pluginYml.configs.prettier.rules as Linter.RulesRecord),
      'yml/no-empty-mapping-value': 'off',
    },
  },
];
