const path = require('path');
const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const basePresets = ['react', 'stage-2'];
const basePlugins = ['transform-decorators-legacy', 'syntax-dynamic-import'];
const testPlugins = env === 'test' ? ['dynamic-import-node'] : [];
const pkg = require(path.resolve('package.json'));
const modules = process.env.IN_WEBPACK === 'true' || pkg.module ? false : 'commonjs';
const envPreset = env === 'test' ? ['env', {targets: {node: 'current'}, modules}] : ['env', {modules}];
const presets = [envPreset].concat(basePresets);
const plugins = basePlugins.concat(testPlugins);
module.exports = {presets, plugins};
