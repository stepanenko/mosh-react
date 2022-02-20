// 'use strict'; // unnecessary inside of modules

const user = {
  name: 'Tom',
  walk() {
    console.log(this);
  }
}

user.walk(); // { name: 'Tom', walk: [Function: walk] }

const walkBad = user.walk;
walkBad(); // prints Global

const walk = user.walk.bind(user);
walk(); // { name: 'Tom', walk: [Function: walk] }
