import { resolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default [
  // ESM Build (for React/modern apps)
  {
    input: "src/Potree.js",
    treeshake: {
      moduleSideEffects: false, // Ensure unused imports are removed
    },
    output: {
      file: "build/potree/potree.esm.js",
      format: "umd", // ES Modules (ESM)
      sourcemap: true, // Enable sourcemaps for debugging
    },
    plugins: [
      resolve({
        moduleDirectories: ["node_modules"], // Ensures it resolves from node_modules
      }),
      terser(), // Minify the output
    ],
  },

  // UMD Build (for legacy or broader compatibility)
  {
    input: "src/Potree.js",
    treeshake: true, // Enable tree-shaking
    output: {
      file: "build/potree/potree.js",
      format: "umd",
      name: "Potree",
      sourcemap: true, // Enable sourcemaps for debugging
    },
    plugins: [
      terser(), // Minify the output
    ],
  },

  // ESM for worker files
  {
    input: "src/workers/BinaryDecoderWorker.js",
    output: {
      file: "build/potree/workers/BinaryDecoderWorker.js",
      format: "es",
      sourcemap: false, // No sourcemaps for worker files
    },
    plugins: [
      terser(), // Minify the worker script (optional)
    ],
  },
  {
    input: "src/modules/loader/2.0/DecoderWorker.js",
    output: {
      file: "build/potree/workers/2.0/DecoderWorker.js",
      format: "es",
      sourcemap: false,
    },
    plugins: [
      terser(), // Minify the worker script (optional)
    ],
  },
  {
    input: "src/modules/loader/2.0/DecoderWorker_brotli.js",
    output: {
      file: "build/potree/workers/2.0/DecoderWorker_brotli.js",
      format: "es",
      sourcemap: false,
    },
    plugins: [
      terser(), // Minify the worker script (optional)
    ],
  },
];

// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';

// export default {
//   input: 'src/main.js', // Entry file
//   output: {
//     file: 'dist/bundle.js', // Output file
//     format: 'esm', // ES module format
//     sourcemap: true, // Optional: Enable source maps
//   },
//   plugins: [
//     resolve({
//       moduleDirectories: ['node_modules'], // Ensures it resolves from node_modules
//     }),
//     commonjs(), // Converts CommonJS modules to ES modules
//     terser(), // Optional: Minify for production
//   ],
//   treeshake: {
//     moduleSideEffects: false, // Ensure unused imports are removed
//   },
// };
