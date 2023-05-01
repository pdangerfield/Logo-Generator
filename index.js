const inquirer = require('inquirer');
const fs = require('fs');
const{Circle, Square, Triangle, Shapes} = require('./lib/shapes');



// generateSVG function
function generateSVG(answers) {
    const {characters, textColor, shape, shapeColor} = answers;
    let shapeObj;
    switch (shape) {
        case 'square':
            shapeObj = new Square();
            break;
        case 'circle':
            shapeObj = new Circle();
            break;
        case 'triangle':
            shapeObj = new Triangle();
            break;
    }
    shapeObj.shapeColor(shapeColor);
    shapeObj.setTextColor(textColor);
    shapeObj.setCharacters(characters);

    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    ${shapeObj.render()}
    </svg>`;
}

// build a series of questions for user input to select
// text of 3 characters, text color, shape, shape color

inquirer
.prompt([
    {
        type: 'input',
        name: 'characters',
        message: 'What characters would you like to use?',
        validate: (value) => {if (value.length === 3) {return true} else {return 'Please enter 3 characters.'}}
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be (color keyword OR a hexadecimal number)?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be (color keyword OR a hexadecimal number)?' 
    },
])
.then((answers) => {
    const svgPageContent = generateSVG(answers);
    fs.writeFile('logo.svg', svgPageContent, (err) =>

    err ? console.log(err) : console.log('Generated logo.svg successfully!')
    );
});
