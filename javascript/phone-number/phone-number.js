export class PhoneNumber {
  constructor(phone) {
    this.phone = phone;
  }

  number() {
    let result = null;
    const regEx = /[\d\s()+-.]/g;
    if (regEx.test(this.phone)) {
      let reg2 = /\d+/g;
      let arr = this.phone.match(reg2);
      let str = arr.join('');
      if (str.length > 9 && str.length < 12) {
        if (str.length === 11 && str[0] === '1') {
          str = str.slice(1, str.length);
        }
        if (str.length === 10) {
          if ((str[0] !== '0' && str[0] !== '1') && (str[3] !== '0' && str[3] !== '1')) {
            result = str;
          }
        }
      }
    }
    return result;
  }
}