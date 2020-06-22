
const user = {
  talk() {
    let self = this; // old school way
    setTimeout(function() {
      console.log('self', self);
      // if 'this' was used instead of 'self'
      // the Window/Global will be logged
    }, 1000);
  }
}

user.talk(); // self { talk: [Function: talk] }

const user2 = {
  talk() {
    setTimeout(() => { // arrows don't reset/rebind 'this', they inherit it
      console.log('this', this);
    }, 1000);
  }
}

user2.talk(); // self { talk: [Function: talk] }
