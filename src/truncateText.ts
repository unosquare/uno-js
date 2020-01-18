export const truncateText = (text: string, length: number): string => {
    if (text && text.length > length) {
        const newString = text.substr(0, length);
        const indexLastSpace = newString.lastIndexOf(' ');

        if (indexLastSpace > -1) {
            return `${text.substr(0, indexLastSpace).trimEnd()}...`;
        } else {
            return `${newString}...`;
        }
    }
    return text;
};
