const User = require('./user');

class Client extends User {
  billing = 0;

  constructor(name) {
    super(name);
    this.billing = 0;
  }
}

module.exports = Client;
