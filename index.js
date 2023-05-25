const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

function setShape(shape, color) {
    if(shape === "circle") {
        const myShape = new Circle();
        myShape.setColor(color);
        return myShape.render(); 
    }else if(shape === "square") {
        const myShape = new Square();
        myShape.setColor(color);
        return myShape.render();         
    }else {
        const myShape = new Triangle();
        myShape.setColor(color);
        return myShape.render(); 
}};

inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Choose up to three characters.',
    },
    {
        type: 'input',
        message: 'Choose a color.',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        message: 'Choose a shape color.',
        name: 'shapeColor',
    },
  ])
  .then((data) => {
    if(data.text.length < 1 || data.text.length > 3) {
        console.log("Please enter 1 to 3 characters.");
        prompt();
    }else {fs.writeFile('./lib/logo.svg', `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${setShape(data.shape, data.shapeColor)}"${data.textColor}">${data.text}</text>      
    </svg>`, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );}  
});
