
// ======Object destructuring======

const address = {
  street: 'Naukova',
  city: 'Lviv',
  country: 'Ukraine'
}

const { street: st } = address;

console.log(st); // Naukova
