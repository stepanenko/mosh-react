
let n: number[] = [5, 6, 6];
enum Color { Red = 4, Green = 11, Blue = 55 };
let backgroundColor = Color.Blue;

//\\//\\//\\
let message;
message = 'asd';
let endsWithD = (<string>message).endsWith('d');
let altEndsWithD = (message as string).endsWith('d');

//\\//\\//\\
class Point {
  // private x: number;
  // private y: number;

  constructor(private _x?: number, private _y?: number) { // access modifiers
    // this.x = x;
    // this.y = y;
  }

  draw = () => console.log(this._x, this._y);

  get x() {   // property
    return this._x;
  }

  set x(value) {   // property
    if (value < 0) throw Error('Less than 0 is not allowed');
    this._x = value;
  }
}

let point = new Point(5, 4);
point.x = 15;
point.draw();
