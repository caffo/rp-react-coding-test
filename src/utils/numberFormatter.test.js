import { numberFormatter } from './numberFormatter';

describe('numberFormatter', () => {
  beforeAll(() => {
    const htmlTag = document.querySelector('html');
    htmlTag.setAttribute('lang', 'en');
  });

  it('before initializing formatter', () => {
    expect(numberFormatter.intl).toBeNull();
  });

  it('initialize formatter', () => {
    numberFormatter.init();
    expect(numberFormatter.intl).toBeTruthy();
  });

  it('formats number', () => {
    expect(numberFormatter.format(1000)).toEqual('1,000');
  });
});
