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

// Instantiating elements //
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let items = document.querySelectorAll("li");

// function: gets the input length //
let intputLength = () => {
  return input.value.length;
};

// function: creating the new list items //
let createListElement = () => {
  // creates element
  let li = document.createElement("li");

  // creates the input value text insilde the li
  li.appendChild(document.createTextNode(input.value));

  //new button for delete
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function () {
    li.parentNode.removeChild(li);
  });
  // adds the li to the end of the ul
  li.appendChild(deleteButton);
  ul.appendChild(li);
  input.value = "";
};
// function: toggles the done class/style //

// Existing Items: edit //
Array.from(items).forEach(function (item) {
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  item.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    item.parentNode.removeChild(item);
  });

  //   item.classList.toggle("done");
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });
});

// function: removes listed item //
let removeListedItem = () => {
  items.parentElement.removeChild(items);
};

// APPLYING FUNCTIONS //-----------------------------------------------------

// function: button "Enter" click
let addListAfterClick = () => {
  if (intputLength() > 0) {
    createListElement();
  }
};

// function: "Enter" Keypress
// "e" = event

let addListAfterEnterPress = (e) => {
  if (intputLength() > 0 && e.code === "Enter") {
    createListElement();
  }
};

let deleteItem = () => {
  removeButton();
  removeListedItem();
};

// on button click
button.addEventListener("click", addListAfterClick);
// on enter press
input.addEventListener("keypress", addListAfterEnterPress);