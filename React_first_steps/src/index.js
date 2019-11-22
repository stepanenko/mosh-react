
import React from 'react';
import ReactDOM from 'react-dom';
import Teacher, { promote } from './models/teacher';


const root = document.getElementById('root');

// const element = <div>Hello World</div>;
// ReactDOM.render(element, root);
// console.log(element);

const colors = ['red', 'green', 'blue'];
const items = colors.map(color => <li key={color}>{color}</li>);

ReactDOM.render(<ul>{items}</ul>, root);


const teacher = new Teacher('Peter', 'Master');
teacher.teach();
promote();
