
const userFunc = {
  talk() {
    let self = this; // old school way
    setTimeout(function () {
      console.log('self', self); // self { talk: [Function: talk] }
      console.log('userFunc this', this); // userFunc this Timeout { ... }
    }, 1000);
  }
}

userFunc.talk();

const userArrow = {
  talk() {
    setTimeout(() => { // arrows don't reset/rebind 'this', they inherit it
      console.log('this', this); // this { talk: [Function: talk] }
    }, 1000);
  }
}

userArrow.talk();
