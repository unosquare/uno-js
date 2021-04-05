const humanize = (name: string): string =>
    (name || '').replace(/^./, (str: string) => str.toUpperCase()).replace(/([a-z])([A-Z])/g, '$1 $2');

export default humanize;
