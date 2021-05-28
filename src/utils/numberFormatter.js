class NumberFormatter {
  constructor() {
    this.intl = null;
  }

  init() {
    const htmlTag = document.querySelector('html');
    if (!htmlTag) {
      return;
    }
    const language = htmlTag.getAttribute('lang');
    this.intl = new Intl.NumberFormat(language);
  }

  format(number) {
    return this.intl ? this.intl.format(number) : number;
  }
}

const numberFormatter = new NumberFormatter();

export { numberFormatter };
