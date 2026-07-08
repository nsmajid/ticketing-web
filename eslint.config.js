import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage', '.husky'],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  ...pluginVue.configs['flat/recommended'],

  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],

    languageOptions: {
      parser: vueParser,

      parserOptions: {
        parser: tseslint.parser,

        ecmaVersion: 'latest',

        sourceType: 'module',

        extraFileExtensions: ['.vue'],
      },

      globals: {
        ...globals.browser,
      },
    },

    rules: {
      /*
       * Vue
       */

      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/max-attributes-per-line': 'off',
      /*
       * TypeScript
       */

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      /*
       * General
       */

      'no-console': 'off',

      'no-debugger': 'warn',
    },
  },
]
