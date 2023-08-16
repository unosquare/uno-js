export type stringTemplateType = (value: string, index: number) => string;

export const stringTemplate = (template: string | string[], isPrefix: boolean): stringTemplateType => {
    if (typeof template === 'object') {
        return (value: string, index: number): string => {
            if (index > template.length - 1) {
                return value;
            }
            return isPrefix ? template[index] + value : value + template[index];
        };
    }

    return (value: string): string => (isPrefix ? template + value : value + template);
};
