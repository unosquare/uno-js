export type stringTemplateType = (value: string, index?: number) => string;

export const stringTemplate = (template: string | string[], isPrefix: boolean): stringTemplateType => {
    if (typeof template === 'object') {
        return (value: string, index = 0): string => {
            if (index > template.length - 1) return value;

            return isPrefix ? template[index] + value : value + template[index];
        };
    }

    return (value: string): string => (isPrefix ? template + value : value + template);
};

export const sanitizeNumericString = (str: string) => Number(str.replace(/[^0-9.-]+/g, ''));

export const defaultStringFilter = (search: string) => (element: unknown) =>
    Boolean(element && String(element).toLocaleLowerCase().includes(search.toLocaleLowerCase()));

export const sortComparer = (left: string, right: string) =>
    left.trim().localeCompare(right.trim(), undefined, { numeric: true, sensitivity: 'base' });

export const sortNumericString = (a: string, b: string) => {
    if ((a.includes('$') && b.includes('$')) || (a.includes('%') && b.includes('%'))) {
        const numStrA = sanitizeNumericString(a);
        const numStrB = sanitizeNumericString(b);

        if (typeof numStrA === 'number' && typeof numStrB === 'number') {
            const result = numStrA - numStrB;
            if (result !== 0) return result > 0 ? 1 : -1;
        }
    }

    return sortComparer(a, b);
};
