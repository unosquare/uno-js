const escapeValuesWithQuotes = (str: string): string =>
    str.match(/\$-?(\d{1,3},{1})?(\d{1,3},\d{3}\.\d+)/g) ? str.replace(/,\$/g, '","$') : str.replace(/,/g, '","');

const escapeValuesWithCommas = (data: string[]): string[] =>
    data.map((value: any) =>
        value.map((text: string) => {
            const textString = !text ? 'N/A' : text.toString().replace(/\s+(?=\s)/g, '');
            const paragraphCommas = (textString.match(/(,\s){1}/g) || []).length;
            return textString.includes(',') && paragraphCommas === 0
                ? `"${escapeValuesWithQuotes(textString)}"`
                : `"${textString}"`;
        }),
    );

const createCsv = (csv: any, headers: string[], fileName: string): void => {
    let data: string | string[] = escapeValuesWithCommas([...csv]);
    data.unshift(headers.join(','));
    data = data.join('\r\n');
    const dataWithBom = `\uFEFF${data}`;

    const exportedFilename = fileName;
    const blob = new Blob([dataWithBom], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', exportedFilename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

export default createCsv;
