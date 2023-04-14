import tinyColor from 'tinycolor2';

export const COLOR = {
  BLUE: () => tinyColor('#293FFF'),
  RED: () => tinyColor('#FF6262'),
  YELLOW: () => tinyColor('#FFC875'),

  LIGHT_BLUE: () => tinyColor('#7E8BFF'),

  BLACK: () => tinyColor('#191F28'),

  GRAYSCALE_7: () => tinyColor('#1F2732'),
  GRAYSCALE_6: () => tinyColor('#333D4B'),
  GRAYSCALE_5: () => tinyColor('#515A68'),
  GRAYSCALE_4: () => tinyColor('#6D7684'),
  GRAYSCALE_3: () => tinyColor('#ADB3BE'),
  GRAYSCALE_2: () => tinyColor('#E5E7EC'),
  GRAYSCALE_1: () => tinyColor('#F3F4F5'),

  WHITE: () => tinyColor('#FFFFFF'),
};
