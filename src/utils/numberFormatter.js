class NumberFormatter {
  constructor() {
    this.intl = null;
  }

  init() {
    const htmlTag = document.querySelector('html');
    const language = htmlTag && htmlTag.hasAttribute('lang')
      ? htmlTag.getAttribute('lang')
      : 'en';
    this.intl = new Intl.NumberFormat(language);
  }

  format(number) {
    return this.intl ? this.intl.format(number) : number;
  }
}

const numberFormatter = new NumberFormatter();

export { numberFormatter };
