export interface CategoryMap {
  [key: string]: {
    key: CATEGORIES;
    text: string;
    color?: string;
  };
}

export enum CATEGORIES {
  GAME = 'GAME',
  WHITELIST = 'WHITELIST',
  SBT = 'SBT',
  TOKEN = 'TOKEN',
  GENERAL = 'GENERAL',
}
