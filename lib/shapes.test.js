const{Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    it('should create a circle', () => {
        const circle = new Circle();
        let color = 'red';
        circle.shapeColor(color);

        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="50" stroke="3" stroke-width="4" height="${this.height}" width="${this.width}" fill="${this.color}" />`);
    });
});

describe('Square', () => {
    it('should create a square', () => {
        const square = new Square();
        let color = 'red';
        square.shapeColor(color);

        expect(shape.render()).toEqual(`<rect x="200" y="200" width="${this.width}" height="${this.height}" stroke="3" stroke-width="4" fill="${this.color}" />`);
    });
});

describe('Triangle', () => {
    it('should create a triangle', () => {
        const triangle = new Triangle();
        let color = 'red';
        triangle.shapeColor(color);

        expect(shape.render()).toEqual(`<polygon points="10,70 50,10 90,70" stroke="3" stroke-width="4" width="${this.width}" height="${this.height}" fill="${this.color}" />`);
    });
});