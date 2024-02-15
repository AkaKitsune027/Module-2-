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

const ul = document.createElement('ul')
ul.setAttribute('id', 'todoList')

const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Enter a new task')
input.addEventListener('keyup', ((e) => {
    console.log(e.key);
}))


function init() {
    const fDiv = document.querySelector('div')

    const btn = document.createElement('button')
    btn.textContent = 'Add'
    btn.addEventListener('click', addTask)

    fDiv.appendChild(input)
    fDiv.appendChild(btn)

    const sDiv = document.querySelector('div+div')
    sDiv.appendChild(ul)
}
function addTask() {
    const li = document.createElement('li')
    li.textContent = input.value
    ul.appendChild(li)
}
init()