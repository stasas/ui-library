import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import { visualizer } from "rollup-plugin-visualizer";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        // dir: "dist",
        format: "cjs",
        sourcemap: true,
        // preserveModules: true,
        // preserveModulesRoot: "src",
      },
      {
        file: packageJson.module,
        // dir: "dist",
        format: "esm",
        exports: "named",
        sourcemap: true,
        // preserveModules: true,
        // preserveModulesRoot: "src",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
      terser(),
      // visualizer({
      //   filename: "bundle-analysis.html",
      //   open: true,
      // }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, "react", "react-dom"],
  },
];
