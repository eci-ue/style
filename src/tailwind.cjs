/**
 * @file tailwind 公共配置
 * @param colors 全局颜色
 * @returns 
 */

const calc = function(index, fontSize) {
  const unit = fontSize / 4;
  const size = index * unit;
  const half = size - unit / 2;
  return {
    half: parseFloat((half / fontSize).toFixed(4)),
    value: parseFloat((size / fontSize).toFixed(4)),
  }
}

const tailWind = function(colors = {}, fontSize = 16, len = 100) {
  const spacing = {};
  for (let i = 1; i <= len; i++) {
    const size = calc(i, fontSize);
    spacing[String(i - 0.5)] = `${size.half}rem`;
    spacing[String(i)] = `${size.value}rem`;
  }
  const width = Object.assign({ fit: "fit-content" }, spacing);
  return { 
    spacing, 
    
    height: spacing, 
    minHeight: spacing,
    maxHeight: spacing,
    lineHeight: spacing,

    width, 
    minWidth: width,
    maxWidth: width,
    
    colors,
    screens: {
      xs: "30rem"
    }
  };
};

module.exports = tailWind;