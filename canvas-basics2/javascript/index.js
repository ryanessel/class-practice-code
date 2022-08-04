// Getting Canvas And Seeting context for canvas but inside a funciton right now


function draw(x, y) {
    //getting the canvas element using its ID 
    const theCanvas = document.querySelector("#example");
    //applying the 2d context to the canvas; allows rending 2d objecterinos!
    const context = theCanvas.getContext("2d");

    // clears the canvas to similate animation of a sqaure or rectangle-kun
    context.clearRect(0, 0, 300, 300); // this clears the width and height of the canvas you determine; if equal to the canvas height and width then it will clear everything within the canvas window.

    context.fillStyle ="green";

    context.fillRect(x, 0, 50, 50);
    //sets the change of the movement speed each time its called via "setTimemout" below:
    x += 5;

    //calls itself everyer 30 miloseconds- isint that "interval"???
    setTimeout(`draw(${x}, ${y})`, 30);
    

}


// function draw(x, y) {
//     // use id "example" to get <canvas></canvas> tag
//     const theCanvas = document.getElementById('example');
   
//     // capture 2d context where everything happens in canvas
//     // context has all the methods for drawing things
//     const ctx = theCanvas.getContext('2d');
   
//     // clears whole canvas to simulate animation (==movement) of the rectangle
//     ctx.clearRect(0, 0, 300, 300);
   
//     // colors rectangle with this color
//     ctx.fillStyle = 'green';
   
//     // creates rectangle => ctx.fillRect(x, y, width, height);
//     ctx.fillRect(x, 0, 50, 50);
   
//     // changes position of X coordinate
//     x += 3;
   
//     // calls itself every 30ms
//     setTimeout(`draw(${x}, ${y})`, 30);
//   }