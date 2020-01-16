import { parseISO } from '../src/parseISO';

describe('parseISO', () => {
    it('should return valid date', () => expect(parseISO('2010-01-01T06:00:00.000Z') instanceof Date).toBe(true));
});
