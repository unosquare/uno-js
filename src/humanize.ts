export function humanize(name: string): string {
    return (name || '').replace(/^./, (str: string) => str.toUpperCase()).replace(/([a-z])([A-Z])/g, '$1 $2');
}
