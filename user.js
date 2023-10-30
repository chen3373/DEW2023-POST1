class User {
  name;

  constructor(name) {
    this.name = name;
  }

  read(txt) {
    return `${this.name} is reading ${txt}`;
  }

  notify(Post) {
    return this.read(Post.summary);
  }
}

module.exports = User;
