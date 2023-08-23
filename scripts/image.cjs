const fs = require('fs');
const path = require("path");
const { createCanvas } = require("canvas");

const image = function(color) {
  const width = 16;
  const height = 10;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  if (color) {
    ctx.fillStyle = color;
  }
  ctx.fillRect(0, 0, width, height);

  return canvas;
}

const toDataURL = function(color) {
  const canvas = image(color);
  return canvas.toDataURL("image/jpeg");
}

const create = function(key, color) {
  const canvas = image(color);
  const name = `${key}.png`;
  const src = path.join("../doc/image", name);
  const out = fs.createWriteStream(src);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  return `./doc/image/${name}`;
  // return new Promise(function(resolve, reject) {
  //   stream.pipe(out);
  //   out.on('finish', () => {
  //     resolve(src);
  //   });
  //   out.on('error', (e) => {
  //     reject(e);
  //   });
  // })
}

module.exports = { image, toDataURL, create };
