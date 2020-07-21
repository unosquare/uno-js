export const getQueryParam = (param: string, url: string): string | number | null => {
    const regex = new RegExp(`\\b(${param}=)\\b`);
    const match = url.match(regex);
    if (match) {
        const hasMoreValues = url.indexOf('&');
        const hasAnchor = url.lastIndexOf('#');
        const initial = match.index + match[0].length;
        if (hasMoreValues >= initial) {
            return url.substr(initial, hasMoreValues - initial);
        }
        if (hasAnchor >= initial) {
            return url.substr(initial, hasAnchor - initial);
        }
        return url.substr(initial);
    }
    return null;
};
