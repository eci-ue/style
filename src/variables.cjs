/**
 * @file 转换 css 文件
 * @author svon.me@gmail.com
 */

const fs = require("fs");
const path = require("path");

const variables = function(src, common = {}) {
  const map = Object.assign({}, common || {});
  const normalize = path.posix.normalize(src);
  const dir = path.isAbsolute(src) ? normalize : path.resolve(__dirname, "..", normalize);
  const text = fs.readFileSync(dir, "utf-8");

  text.split("\n").forEach(function(row) {
    if (row.includes("import")) {
      const value = row.replace("@import", "").replace(/"|'|;/g, "").trim();
      const parent = path.dirname(dir);
      const file = path.normalize(path.resolve(parent, value));
      const data = variables(file, common);
      Object.assign(map, data);
    } else if (/@/.test(row) && /:/.test(row) && /;/.test(row)) {
      const [, key ] = row.match(/@([\w-]+)/);
      if (key in map) {
        return;
      }
      const value = row.slice(row.lastIndexOf(":") + 1, row.lastIndexOf(";")).replace(/\s|@/g, "");
      if (value in map) {
        map[key] = map[value];
      } else {
        map[key] = value;
      }
    }
  });
  return map;
}

module.exports = variables;