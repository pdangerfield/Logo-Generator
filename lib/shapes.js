class Shapes {
    constructor() {
        this.color = '';
        this.height = '200';
        this.width = '200' ;
        this.textColor = '';
    }
    shapeColor(color){
        this.color = color;
    }
    setTextColor(color){
        this.textColor = color;
    }
    setCharacters(characters){
        this.characters = characters;
    }
    setWidth(width){
        this.width = width;
    }
    setHeight(height){
        this.height = height;
    }
}

class Circle extends Shapes{
    render(){
        return ` <circle cx="150" cy="100" r="100" stroke="3" stroke-width="4" fill="${this.color}"></circle>
        <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="75">${this.characters}</text>
       `;
               
}
}

class Square extends Shapes{
    render(){
        return `<rect x="0" y="0" width="${this.width}" height="${this.height}" stroke="3" stroke-width="4" fill="${this.color}"></rect>
        <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="75">${this.characters}</text>`;
    }
}
class Triangle extends Shapes{
    render(){
        return `<polygon points="0,200 150,0 300,200" stroke="3" stroke-width="4" fill="${this.color}"></polygon>
        <text x="150" y="150" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="75">${this.characters}</text>`
    }
}

module.exports = {Circle, Square, Triangle, Shapes};