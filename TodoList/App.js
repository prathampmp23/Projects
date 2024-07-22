let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  let delbtn = document.createElement("button");
  // to add task
  item.innerText = input.value;
  delbtn.innerText = "x";
  delbtn.classList.add("delete")
  // to add button after task
  item.appendChild(delbtn);

  // to add list in ul element
  ul.appendChild(item);
  input.value = ""; //make input box empty
});

// let delbtn = document.querySelectorAll("delete");
// delbtn.addEventListener("click", function() {
    
// });
ul.addEventListener("click" , function(event) {
  if(event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("Deleted");
  } 

})
