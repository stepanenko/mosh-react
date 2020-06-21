// 'use strict'; // unnecessary inside of modules

const user = {
  name: 'Tom',
  walk() {
    console.log(this);
  }
}

user.walk();
const walk = user.walk.bind(user);
walk(); // without bind will log Global - in node, Window - in browser
