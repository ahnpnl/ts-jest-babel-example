import { isStoreOwner } from './foo';

describe('Test optional chaining', () => {
  test(`should work`, () => {
    expect(isStoreOwner({
      isStoreOwner: false,
    })).toEqual(false);
  });
});
