class Polygon {
    constructor(side) {
      this.side = side;
    }

  }

  class Square extends Polygon {
    area() {
      return this.side * this.side;
    }

    toString() {
        return `Square: side = ${this.side}, area = ${this.area()}`;
      }
  }

class Circle extends Polygon{
    
    area() {
        return this.side * this.side*Math.PI;
      }

      toString() {
          return `Circle: side = ${this.side}, area = ${this.area()}`;
        }   
}
class Triangle extends Polygon{
    constructor(base, height) {
        super(base);
        this.h = height;
    }
    area() {
        return this.h * this.side*0.5;
      }
      toString() {
          return `Triangle: base = ${this.side}, height = ${this.h}, area = ${this.area()}`;
        }

}
class Rectangle extends Polygon {
  constructor(length, width) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }

  get area() {
    return this.length * this.width;
  }

  toString() {
    return `<b> Rectangle : Area= ${this.area} Length= ${this.length} Width= ${this.width}`;
  }
}
let r=new Rectangle(4,5);
document.write(r +"<br>");

let s=new Square(3);
document.write(s +"<br>");

let c=new Circle(2);
document.write(c +"<br>");

let t=new Triangle(2,3);
document.write(t+"<br>");