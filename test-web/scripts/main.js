/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Welcome on site!";
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/testtech.jpg") {
    myImage.setAttribute("src", "images/testtech1.jpg");
  } else {
    myImage.setAttribute("src", "images/testtech.jpg");
  }
};

/*
You stored a reference to your <img> element in myImage. Next, you made its onclick event handler property equal to a function with no name (an "anonymous" function). So every time this element is clicked:

    The code retrieves the value of the image's src attribute.
    The code uses a conditional to check if the src value is equal to the path of the original image:
        If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element.
        If it isn't (meaning it must already have changed), the src value swaps back to the original image path, to the original state.

*/


let myvariable;//declaring variables
myvariable = "Evans";

let myName = "Okello";

let age = 25;
let young = true;

/*
Operators
*/

let multipl = age * 5;
multipl;
alert("You are " + String(multipl) + " Years younger!")
//Conditionals
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} 
else {
  alert("Awwww, but chocolate is my favorite…");
}

//Functions are a way of packaging functionality that you wish to reuse.
alert("Hello Viewer!")

function multiple(num1,num2){
    let answer = num1 * num2;
    return answer;
}

alert(multiple(9,10));

//Events
/*
Real interactivity on a website requires event handlers.
These are code structures that listen for activity in the browser, and run code in response.
The most obvious example is handling the click event,
which is fired by the browser when you click on something with your mouse.
*/

document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
    //Arrow function for Anonymous functions
  });


