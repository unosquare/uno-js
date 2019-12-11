import { groupedCount } from '../lib/groupedCount';

describe('groupedCount', function () {
  it('should return vegetable potatoes with 3', function () {
    const x = [{ vegetable: 'potatoes' }, { vegetable: 'potatoes' }, { vegetable: 'potatoes' }];
    const result = groupedCount(x, 'vegetable')[0].value;
    expect(result).toBe(3);
  });
});