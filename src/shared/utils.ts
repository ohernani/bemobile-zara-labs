import CryptoJS from 'crypto-js';

export type ClassMap = { [value: string]: boolean };
export const getClassNames = (classMap: ClassMap): string =>
  Object.keys(classMap)
    .filter((styleClass) => classMap[styleClass])
    .join(' ');

export const getYearFromDate = (date: string): string => {
  return new Date(date).getFullYear().toString();
};

export const generateHash = (input: string): string => {
  return CryptoJS.MD5(input).toString();
};
