import trimText from './trimText';

type csvRow = string | Array<string>;

const escapeValuesWithQuotes = (str: string): string =>
    str.match(/\$-?(\d{1,3},+)?(\d{1,3},\d{3}(\.\d)*)/g) ? str.replace(/,\$/g, '","$') : str.replace(/,/g, '","');

const wrapWithQuotes = (text: csvRow) => `"${text}"`;

const formatMixedEntry = (arr: csvRow): string =>
    arr.constructor === Array ? arr.map(wrapWithQuotes).join() : wrapWithQuotes(arr);

const formatEntryWithCommas = (textString: string, text: csvRow) =>
    (textString.match(/(,\s)+/g) || []).length === 0
        ? wrapWithQuotes(escapeValuesWithQuotes(textString))
        : formatMixedEntry(text);

const escapeValuesWithCommas = (data: csvRow[]): string[] =>
    data.map((value: any) =>
        value.map((text: csvRow) => {
            const textString = !text ? 'N/A' : trimText(text);
            return textString.includes(',') ? formatEntryWithCommas(textString, text) : wrapWithQuotes(textString);
        }),
    );

export const createCsvData = (csv: csvRow[], headers: string[]): string => {
    const data = escapeValuesWithCommas([...csv]);
    data.unshift(headers.join(','));
    return data.join('\r\n');
};

const createCsv = (csv: csvRow[], headers: string[], fileName: string): void => {
    const dataWithBom = `\uFEFF${createCsvData(csv, headers)}`;
    const blob = new Blob([dataWithBom], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

export default createCsv;
