

// // HOW TO CHECK IF YOUR JAVASCRIP FILE IS CONNECTED

// // alert("Hello I am working!!!") this works

// //how you are supposed to check  if the javascirpt is connected or that it loads after the page does
// window.onload = () => {
//     console.log("connecting and working");
// }


// // or you can do EVENT LISTENER

// window.addEventListener("load", (event) => { /// the thing put before ".addEventListener" means event will be "window"
//     // const (document) = event.target; // happening under the hood.
// console.log("connected: ", {event});

// })


const randomNameBtn = document.querySelector("#nameRandomizerButton");
const displayName = document.querySelector("h3.theName");
const listOfNames = [...document.querySelectorAll("#nameDisplay ul li")].map(name => name.innerHTML);// the spread operator sets it up as an array


//These are 2 methods of convering nodelists into an array so you can run loop trhough them by using built in js methods (.filter(), .forEach(), .map())
// const listOfNamesArrMeth2 = [...listOfNames]
s
// onclick is the the saame its just longer I THINK


const randomNum = (maxLimit) => {
    return Math.floor(Math.random() * maxLimit)
}

randomNameBtn.addEventListener("click",  () => {
    // console.log("button clicked");
displayName.innerText = listOfNames[randomNum(listOfNames.length)];               

})


window.addEventListener("load", (event) => { /// the thing put before ".addEventListener" means event will be "window"
    // const (document) = event.target; // happening under the hood.
console.log(randomNameBtn);

})




window.addEventListener("load", () => {

// if I run everything through here it waits for the page to load.
// so i can try to define variables etc. 
// so the page loads then the javascript variables will be written.

})

