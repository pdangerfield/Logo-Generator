const{Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    it('should create a circle', () => {
        const circle = new Circle();
        let color = '';
        let textColor = '';
        let characters = '';
        circle.shapeColor(color);
        circle.setTextColor(textColor);
        circle.setCharacters(characters);

        expect(circle.render()).toEqual(` <circle cx="150" cy="100" r="100" stroke="3" stroke-width="4" fill="${color}"></circle>
        <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="75">${characters}</text>
       `);
    });
});

describe('Square', () => {
    it('should create a square', () => {
        const square = new Square();
        let color = '';
        let textColor = '';
        let characters = '';
        let width = '';
        let height = '';
       
        square.setTextColor(textColor);
        square.setCharacters(characters);
        square.shapeColor(color);
        square.setWidth(width);
        square.setHeight(height);

        expect(square.render()).toEqual(`<rect x="0" y="0" width="${width}" height="${height}" stroke="3" stroke-width="4" fill="${color}"></rect>
        <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="75">${characters}</text>`);
    });
});

describe('Triangle', () => {
    it('should create a triangle', () => {
        const triangle = new Triangle();
        let color = '';
        let textColor = '';
        let characters = '';
        triangle.setTextColor(textColor);
        triangle.shapeColor(color);
        triangle.setCharacters(characters);

        expect(triangle.render()).toEqual(`<polygon points="0,200 150,0 300,200" stroke="3" stroke-width="4" fill="${color}"></polygon>
        <text x="150" y="150" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="75">${characters}</text>`);
    });
});