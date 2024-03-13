const { defineConfig } = require('rollup');
const typescript = require('@rollup/plugin-typescript');

module.exports = defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    name: 'express-error-handler',
  },
  external: ['express', 'body-parser'],
  plugins: [
    typescript({ tsconfig: 'tsconfig.json' }),
  ],
});
