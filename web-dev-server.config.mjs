import { fromRollup } from "@web/dev-server-rollup";
import rollupCommonjs from "@rollup/plugin-commonjs";

const commonjs = fromRollup(rollupCommonjs);

export default {
  open: true,
  nodeResolve: true,
  appIndex: './index.html',
  plugins: [
    commonjs({}),
  ],
};