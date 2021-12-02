const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias//,

} = require("customize-cra");
const path = require('path');
function resolve (pathUrl) {
  return path.join(__dirname, pathUrl);
}


module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  }),
  addWebpackAlias({
    '@': resolve('src'),
  }),
);