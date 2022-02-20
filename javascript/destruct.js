
// ___ Object destructuring ___

const address = {
  street: 'Baker str',
  city: 'London',
  country: 'United Kingdom'
}

const { street: st } = address;

console.log(st); // Baker str
