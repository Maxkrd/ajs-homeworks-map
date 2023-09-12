export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    const reg1 = /^[\w-]*$/.test(this.nickname);
    const reg2 = !/(\d{4,})+/g.test(this.nickname);
    const reg3 = /^[^\d-_].*[^\d-_]$/.test(this.nickname);
    const result = reg1 && reg2 && reg3;
    return result;
  }
}
