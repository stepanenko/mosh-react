
const first = { name: 'Michael' };
const second = { surname: 'Jackson' };

const fullname = { ...first, ...second, location: 'USA' };
console.log(fullname);
