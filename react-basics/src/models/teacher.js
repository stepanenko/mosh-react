
import { Person } from './person';

export function promote() {
  console.log('Named with default exports work fine');
}

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log(`${this.name} is teaching...`)
  }
}
