import 'jest';

import { murmur2 } from '../src';

const SEED = 3339675911;

describe('murmur2', () => {
  it('should encode ASCII strings', () => {
    const str = 'abcde';
    const h = murmur2(str, SEED);
    expect(h).toEqual(730143326);
  });

  it('should encode Unicode strings', () => {
    const str = "print('€') --  🧪";
    const h = murmur2(str, SEED);
    expect(h).toEqual(413577488);
  });

  it('should encode long strings', () => {
    const str = 'x 🧪 x'.repeat(2 ** 10);
    const h = murmur2(str, SEED);
    expect(h).toEqual(696183827);
  });
});
