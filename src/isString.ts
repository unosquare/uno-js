export const isString = (value: unknown): boolean => typeof value === 'string';

export const matchText = (text: string, filterText: string) => text.toLowerCase().match(filterText.toLowerCase());
