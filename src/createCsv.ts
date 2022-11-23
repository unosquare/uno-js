const escapeValuesWithQuotes = (str: string): string =>
    str.match(/\$-?(\d{1,3},+)?(\d{1,3},\d{3}\.\d+)/g) ? str.replace(/,\$/g, '","$') : str.replace(/,/g, '","');

const escapeValuesWithCommas = (data: any[]): string[] =>
    data.map((value: any) =>
        value.map((text: string) => {
            const textString = !text ? 'N/A' : text.toString().replace(/\s+(?=\s)/g, '');
            const paragraphCommas = (textString.match(/(,\s)+/g) || []).length;
            return textString.includes(',') && paragraphCommas === 0
                ? `"${escapeValuesWithQuotes(textString)}"`
                : `"${textString}"`;
        }),
    );

export const createCsvData = (csv: any[], headers: string[]): string => {
    const data = escapeValuesWithCommas([...csv]);
    data.unshift(headers.join(','));
    return data.join('\r\n');
}

const createCsv = (csv: any[], headers: string[], fileName: string): void => {
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
