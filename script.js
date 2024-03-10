// ul reference
const ul = document.querySelector("ul");

// todo list array
let toDoList = [];

// adds a todo to todo list on form submission
document.querySelector("#addTodo").addEventListener("submit", function(event) {
    event.preventDefault();
    let toDo = {
        text: document.querySelector("#toDo").value,
        complete: false
    };
    toDoList.push(toDo);
    
    updateScreen();
    deleteItem();
    completeItem();

});

// Function that displays todo list items on the screen
function updateScreen() {
    // Maps array items into todo list items
    const template = toDoList.map(toDoListItem => `
        <li>
            ${toDoListItem.text}
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        </li>
    `);

    ul.innerHTML = template.join("");
    
}

// Function that deletes the selected item from the todo list
function deleteItem() {
    // delete buttons reference
    let deleteButtons = document.querySelectorAll(".delete");

    // delete buttons click event listeners
    for (i = 0; i < toDoList.length; i++) {
        let listIndex = i;
        // on click, the delete button should remove the corresponding list item from the screen
        deleteButtons[i].addEventListener("click", function() {
            toDoList.splice(listIndex, 1);
            // updates screen after deleting list item
            updateScreen();
            // delete button event listeners have to be readded after the screen updates
            deleteItem();
            // complete button event listeners have to be added after the delete item function is called
            completeItem();
        });
    }
}

// Function that completes an item from the todo list
function completeItem() {
    // complete buttons reference
    let completeButtons = document.querySelectorAll(".complete");

    // complete buttons click event listeners
    for (i = 0; i < toDoList.length; i++) {
        let listIndex = i;
        // on click, the complete button should turn the list item text green
        completeButtons[i].addEventListener("click", function(event) {
            if (!(toDoList[listIndex].complete)) {
                event.currentTarget.parentNode.style.color = "green";
                toDoList[listIndex].complete = true;
            } else {
                event.currentTarget.parentNode.style.color = "black";
                toDoList[listIndex].complete = false;
            }
        })
    }
}