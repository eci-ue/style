const color = require("./variables.cjs");

const main = function(src, common) {
  if (src) {
    return color(src, common);
  }
  const variables = color("./style/variables.less", common);
  const antds = color("./style/antd.less", common);
  return { variables, antds };
}

module.exports = function(src, common) {
  if (typeof src === "string") {
    if (typeof common === "object") {
      return main(src, common);
    }
    return main(src);
  }
  if (typeof src === "object") {
    return main(null, src);
  }
  return main();
};
