
const first = { name: 'Sergio' };
const second = { surname: 'Stepanenko' };

const fullname = { ...first, ...second, location: 'Ukraine' };
console.log(fullname);
