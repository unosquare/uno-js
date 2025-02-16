import { createCsvData } from '../src/createCsv';

const testObject = [
    ['John', '30', '$500.00', '"quoted"', 'This is a multiline\nstring'],
    ['Mary', '28', '$1,000.00', '"quoted"', ''],
    ['Peter', '40', '$1,500.00', '"quoted"', 'This is a multiline\nstring'],
];

const alreadyQuoted = [['"quoted\nok"', '"quoted"', '"quoted"']];

describe('createCsvData', () => {
    it('should return a csv string', () => {
        const result = createCsvData(testObject, ['name', 'age', 'salary', 'quote']);
        expect(result).toBe(
            'name,age,salary,quote\r\n"John","30","$500.00","""quoted""","This is a multiline\nstring"\r\n"Mary","28","$1,000.00","""quoted""","N/A"\r\n"Peter","40","$1,500.00","""quoted""","This is a multiline\nstring"',
        );
    });

    it('should return a csv string with already quoted values', () => {
        const result = createCsvData(alreadyQuoted, ['1', '2', '3']);
        expect(result).toBe('1,2,3\r\n"""quoted\nok""","""quoted""","""quoted"""');
    });
});
