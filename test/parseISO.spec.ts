import { parseISO } from '../src/parseISO';
//Started
describe('parseISO', () => {
    it('should return valid date UTC', () => expect(parseISO('2010-01-01T06:00:00.000Z') instanceof Date).toBeTruthy());

    it('should return valid date with timezone', () => expect(parseISO('2010-01-01T06:00:00.000T-03:00') instanceof Date).toBeTruthy());

    it('should return valid date - validateDate', () => expect(parseISO('2020-31-31T06:00:00.000Z') instanceof Date).toBeTruthy());

    it('should return valid date - validateDate', () => expect(parseISO('2020-31-31T06:00:00.000Z', { additionalDigits: '2' }) instanceof Date).toBeTruthy());

    it('should return valid date', () => expect(parseISO('') instanceof Date).toBeTruthy());
});
 