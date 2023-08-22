/**
 * @file tailwind 公共配置
 * @param colors 全局颜色
 * @returns 
 */

const container = {
  xs: (480 / 16) + "rem",
  sm: (640 / 16) + "rem",
  md: (768 / 16) + "rem",
  lg: (1024 / 16) + "rem",
  xl: (1280 / 16) + "rem",
  "2xl": (1536 / 16) + "rem"
};

const calc = function(length = 100, fontSize = 16) {
  const unit = 0.125;
  const spacing = {};
  for (let i = 1; i <= length; i++) {
    for(let size = 1; size <= 8; size++) {
      const key = size * unit * i;
      const value = key * 4 / fontSize;
      spacing[String(key)] = `${value}rem`;
    }
  }
  return spacing;
}

const tailWind = function(colors = {}, fontSize = 16, len = 100) {
  const spacing = calc(len, fontSize);
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
    screens: container
  };
};

module.exports = tailWind;