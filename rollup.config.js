import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const babelConfig = {
    "presets": [
        ["env", {
            "targets": {
                "browsers": ["last 2 versions"]
            },
            "modules": false,
            "loose": true
        }]
    ]
};

export default {
  entry: 'src/alpha.js',
  format: 'umd',
  moduleName: 'Alpha',
  plugins: [
    babel(babelrc({
      addExternalHelpersPlugin: false,
      config: babelConfig,
      exclude: 'node_modules/**'
    }))
  ],
  dest: 'dist/bundle.js'
};