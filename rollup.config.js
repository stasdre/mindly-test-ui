/* eslint-disable @typescript-eslint/no-var-requires*/
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import url from 'rollup-plugin-url';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    inlineDynamicImports: true,
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-lib',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      postcss(),
      url(),
      svgr(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      image()
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
