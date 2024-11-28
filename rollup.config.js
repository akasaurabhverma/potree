import { terser } from "rollup-plugin-terser";

export default [
  // ESM Build (for React/modern apps)
  {
    input: "src/Potree.js",
    treeshake: true, // Enable tree-shaking
    output: {
      file: "build/potree/potree.esm.js",
      format: "umd", // ES Modules (ESM)
      sourcemap: true, // Enable sourcemaps for debugging
    },
    plugins: [
      terser(), // Minify the output
    ],
    external: ["proj4", "jquery"],
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
