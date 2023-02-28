const trimText = (text: string | Array<string>) =>
    text.constructor === Array
        ? text
              .map((x: string, i: number) => (i === 0 ? x : ` ${x}`))
              .toString()
              .replace(/\s+/g, ' ')
        : text.toString().replace(/\s+/g, ' ');

export default trimText;
