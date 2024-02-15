//By P'toey

/* Instruction:
- Adding task When the user enters text into the input field and clicks the button, add the
text as a new item in the list <ul id="todoList"></ul>.
1. init() :: Add an event listener to the "addButton" button to call the "addTask" function
when clicked.
2. addTask() ::
2.1 Create a <li> tag and set its textContent to the value from the <input type="text"
 id="todoInput" placeholder="Enter a new task"> field.
2.2 Add a <li> tag to the <ul id="todoList"></ul>
2.3 After adding the item, clear the <input type="text" id="todoInput"
 placeholder="Enter a new task"> field to prepare for the next task
 */

const input = document.querySelector('.todoInput')
// const input = document.getElementsByClassName('todoInput')
// const arrayInput = Array.from(input).forEach((e) => { console.log(e.key) })
// e.addEventListener('keyup', arrayInput)
input.addEventListener('keyup', (e) => {
    console.log(e.key);
})

function init() {
    const btn = document.querySelector('.addButton')
    btn.addEventListener('click', addTask)
}

function addTask() {
    const ul = document.getElementById('todoList')
    const li = document.createElement('li')
    li.textContent = input.value
    ul.appendChild(li)
    input.value = ''
}
init();


