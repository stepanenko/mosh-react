
import { Person } from './person';

export function promote() { // named export
  console.log('Promotion!');
}

export default class Teacher extends Person { // default export
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log(`${this.name} is teaching...`)
  }
}
