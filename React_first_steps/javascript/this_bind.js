
const person = {
  name: 'Mosh',
  sayHi() {
    console.log(this);
  }
}

// person.sayHi(); // { name: 'Mosh', sayHi: [Function: sayHi] }
const say = person.sayHi.bind(person);
// say(); // { name: 'Mosh', sayHi: [Function: sayHi] }


const user = {
  talk() {
    let self = this;
    setTimeout(function() {
      console.log('self', self);
    }, 1000);
  }
}

// user.talk(); // self { talk: [Function: talk] }

const user2 = {
  talk() {
    setTimeout(() => {
      console.log('this', this);
    }, 1000);
  }
}

user2.talk(); // self { talk: [Function: talk] }
