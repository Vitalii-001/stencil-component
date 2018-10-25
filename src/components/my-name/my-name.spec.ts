import { MyName } from './my-name';

describe('app', () => {
  it('builds', () => {
    expect(new MyName()).toBeTruthy();
  });
});
