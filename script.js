// // gets the button by tag & be sure to put the index
// let button = document.getElementsByTagName("button")[0];
// // adds event listener to log "Click!" to the console when the buttonis clicked.
// button.addEventListener("click", function() {
//     console.log("Click!");
// });
// // logs "Click!" to the console when the mouse hovers over the button.
// button.addEventListener("mouseenter", function() {
//     console.log("Click!");
// });
// // logs "Click!" to the console when the mouse leaves the button area.
// button.addEventListener("mouseleave", function() {
//     console.log("Click!");
// });

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

// function that gets the input length
let intputLength = () => {
  return input.value.length;
};

// function for creating the list element
let createListElement = () => {
  // creates element
  let li = document.createElement("li");
  // creates the input value text insilde the li
  li.appendChild(document.createTextNode(input.value));
  // adds the li to the end of the ul
  ul.appendChild(li);
  input.value = "";
};

// function for button click
let addListAfterClick = () => {
  if (intputLength() > 0) {
    createListElement();
  }
}; 

// function for enter press
//"e" = event

let addListAfterEnterPress = (e) => {
  if (intputLength() > 0 && e.code === "Enter") {
    createListElement();
  }
};

// on button click
button.addEventListener("click", addListAfterClick);

// on enter press
input.addEventListener("keypress", addListAfterEnterPress);
