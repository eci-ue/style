const fs = require("fs");
const path = require("path");
const { create } = require("./image.cjs");
const style = require("../src/index.cjs");

const main = function() {
  const { variables } = style();
  const html = [
    '名称 | 色值 | 预览',
    '-- | -- | --'
  ];
  for (const key of Object.keys(variables)) {
    const value = variables[key];
    const src = create(key, value);
    html.push(`${key} | ${value} | ![${value}](${src})`);
  }
  const text = html.join("\n");

  const src = path.resolve(__dirname, "..", "README.md");
  fs.writeFileSync(src, text);
}


main();

