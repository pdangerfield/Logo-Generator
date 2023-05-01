const{Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    it('should create a circle', () => {
        const circle = new Circle();
        let color = 'red';
        circle.shapeColor(color);

        expect(circle.render()).toBe(` <circle cx="150" cy="100" r="100" stroke="3" stroke-width="4" fill="${this.color}"></circle>
        <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="100">${this.characters}</text>
       `);
    });
});

describe('Square', () => {
    it('should create a square', () => {
        const square = new Square();
        let color = 'red';
        square.shapeColor(color);

        expect(square.render()).toEqual(`<rect x="0" y="0" width="${this.width}" height="${this.height}" stroke="3" stroke-width="4" fill="${this.color}" />`);
    });
});

describe('Triangle', () => {
    it('should create a triangle', () => {
        const triangle = new Triangle();
        let color = 'red';
        triangle.shapeColor(color);

        expect(triangle.render()).toEqual(`<polygon points="0,200 150,0 300,200" stroke="3" stroke-width="4" fill="${this.color}" />`);
    });
});