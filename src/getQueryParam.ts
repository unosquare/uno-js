const getQueryParam = (param: string, url: string): string | number | null => {
    const regex = new RegExp(`\\b(${param}=)\\b`);
    const match = url.match(regex);

    if (!match) {
        return null;
    }

    const hasMoreValues = url.indexOf('&');
    const initial = match.index + match[0].length;

    if (hasMoreValues >= initial) {
        return url.substr(initial, hasMoreValues - initial);
    }

    const hasAnchor = url.lastIndexOf('#');

    return hasAnchor >= initial ? url.substr(initial, hasAnchor - initial) : url.substr(initial);
};

export default getQueryParam;