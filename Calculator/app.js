let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = " ";
let arr = Array.from(buttons);  //create an array of button
arr.forEach(button => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerText == '=') {
            string = eval(string);  // eval => default function to evaluate string operation
            input.value = string;
        } else if(e.target.innerText == 'AC') {
            string = " ";
            input.value = string;
        } else if(e.target.innerText == 'DEL') {
            string = string.substring(0,string.length-1); // this removes string fron end
            input.value = string;
        } else {
            string += e.target.innerText; //this add new string at end
            input.value = string;
        }

    });
});