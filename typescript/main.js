
// transpiled with TSC version 4.0.5

var n = [5, 6, 6];
var Color;
(function (Color) {
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 55] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
//\\//\\//\\
var message;
message = 'asd';
var endsWithD = message.endsWith('d');
var altEndsWithD = message.endsWith('d');
//\\//\\//\\
var Point = /** @class */ (function () {
    // private x: number;
    // private y: number;
    function Point(_x, _y) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.draw = function () { return console.log(_this._x, _this._y); };
        // this.x = x;
        // this.y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw Error('Less than 0 is not allowed');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(5, 4);
point._x = 15;
point.draw();
