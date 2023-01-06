const getQueryParam = (param: string, url: string): string | number | null => {
    const regex = new RegExp(`\\b(${param}=)\\b`);
    const match = url.match(regex);

    if (!match) {
        return null;
    }

    const restUrl = url.substring(match.index + match[0].length);
    const hasMoreValues = restUrl.indexOf('&');

    if (hasMoreValues !== -1) {
        return restUrl.substring(0, hasMoreValues);
    }

    const hasAnchor = restUrl.lastIndexOf('#');

    return hasAnchor !== -1 ? restUrl.substring(0, hasAnchor) : restUrl;
};

export default getQueryParam;
