const fs = require("fs");
const path = require("path");
const style = require("../src/index.cjs");



const template = function(name, value) {
  const tr = [
    '<tr>',
      `<td>${name}</td>`,
      `<td>${value}</td>`,
      `<td style="background: ${value};">&nbsp;</td>`,
    '</tr>'
  ];
  return tr.join("");
}

const main = function() {
  const { variables } = style();
  const html = [
    '<table>',
    '<tr><td>名称</td><td>色值</td><td></td></tr>'
  ];
  for (const key of Object.keys(variables)) {
    const value = variables[key];
    const tr = template(key, value);
    html.push(tr);
  }
  html.push('</table>');

  const text = html.join("");
  const src = path.resolve(__dirname, "..", "README.md");
  console.log(src);
  console.log(text);
  fs.writeFileSync(src, text);
}


main();

