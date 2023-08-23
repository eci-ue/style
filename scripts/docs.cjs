const fs = require("fs");
const path = require("path");
const style = require("../src/index.cjs");

const main = function() {
  const { variables } = style();
  const html = [
    '名称 | 色值',
    '-- | --'
  ];
  for (const key of Object.keys(variables)) {
    const value = variables[key];
    html.push(`${key} | ${value}`);
  }
  const text = html.join("\n");

  const src = path.resolve(__dirname, "..", "README.md");
  fs.writeFileSync(src, text);
}


main();

