class Shapes {
    constructor() {
        this.color = '';
        this.height = '200';
        this.width = '300' ;
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
}

class Circle extends Shapes{
    render(){
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="100">${this.characters}</text>
        <circle cx="200" cy="200" r="100" stroke="3" stroke-width="4" height="${this.height}" width="${this.width}" fill="${this.color}" </circle>`;
               
}
}

class Square extends Shapes{
    render(){
        return `<rect x="200" y="200" width="${this.width}" height="${this.height}" stroke="3" stroke-width="4" fill="${this.color}" />`;
    }
}
class Triangle extends Shapes{
    render(){
        return `<polygon points="10,70 50,10 90,70" stroke="3" stroke-width="4" fill="${this.color}" />`
    }
}

module.exports = {Circle, Square, Triangle, Shapes};