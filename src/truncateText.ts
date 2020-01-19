export const truncateText = (complement: TemplateStringsArray | string, text: string, length: number): string => {
    let result = text;
    if (text && text.length > length) {
        result = text.substr(0, length);
        const indexLastSpace = result.lastIndexOf(' ');

        if (indexLastSpace > -1 && typeof complement === 'string') {
            return `${result.substr(0, indexLastSpace).trimEnd()}${complement}`;
        } else if (indexLastSpace > -1 && typeof complement === 'object') {
            result = result.substr(0, indexLastSpace).trimEnd();
        } else {
            return `${result}${complement}`;
        }
    }
    return typeof complement === 'object' ? `${complement[0]}${result}${complement[2]}` : result;
};
