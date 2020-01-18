export const truncateText = (text: string, length: number): string => {
    if (text && text.length > length) {
        const newString = text.substr(0, length);
        const indexLastSpace = Array.from(newString)
            .reverse()
            .indexOf(' ');

        if (indexLastSpace > -1) {
            return `${text.substr(0, (indexLastSpace - newString.length) * -1).trimEnd()}...`;
        } else {
            return `${newString}...`;
        }
    }
    return text;
};
