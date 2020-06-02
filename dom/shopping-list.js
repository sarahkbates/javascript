const unorderedList = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.onclick = buttonRun;


function buttonRun(){
    const currentInput = input.value;
    const list = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    list.appendChild(span);
    list.appendChild(deleteButton);
    span.textContent = currentInput;
    deleteButton.textContent = "delete";
    unorderedList.appendChild(list);
    deleteButton.addEventListener("click", ()=> {unorderedList.removeChild(list)});
    input.focus();
    
}


