function init() {
    const head = document.querySelector('head')
    const title = document.createElement('title')
    title.textContent = 'Registration Form'
    head.append(title)

    // -------------------------------- //

    const body = document.querySelector('body')
    const h2 = document.createElement('h2')
    const div1 = document.createElement('div')
    const label1 = document.createElement('label')
    const input1 = document.createElement('input')

    h2.textContent = 'Register'
    label1.setAttribute('for', 'name')
    label1.textContent = 'Full Name'
    input1.setAttribute('type', 'text')
    input1.setAttribute('id', 'name')
    input1.setAttribute('name', 'name')
    input1.setAttribute('required', '')

    body.appendChild(h2)
    body.appendChild(div1)
    div1.appendChild(label1)
    div1.appendChild(input1)

    // -------------------------------- //

    const div2 = document.createElement('div')
    const label2 = document.createElement('label')
    const input2 = document.createElement('input')

    label2.setAttribute('for', 'email')
    label2.textContent = 'Email Address'
    input2.setAttribute('type', 'email')
    input2.setAttribute('id', 'email')
    input2.setAttribute('name', 'email')
    input2.setAttribute('required', '')

    body.appendChild(div2)
    body.appendChild(div2)
    div2.appendChild(label2)
    div2.appendChild(input2)

    // ------------------------------- //

    const div3 = document.createElement('div')
    const btn = document.createElement('button')
    btn.setAttribute('type', 'submit')
    btn.textContent = 'Register'

    body.appendChild(div3)
    div3.appendChild(btn)

    btn.addEventListener('click', showUserRegister)

    // ------------------------------ //

    const div4 = document.createElement('div')
    body.appendChild(div4)

}
function showUserRegister() {
    //1. Create a <p> tag and add a <p> tag to last a <div> tag.
    //2. Set a <p> tag textContent: name and email from an <input> tag
    const allDiv = document.querySelectorAll('div')
    const lastestDiv = allDiv[allDiv.length - 1]
    const p = document.createElement('p')
    lastestDiv.appendChild(p)

    const input1 = document.getElementById('name')
    const input2 = document.getElementById('email')
    p.textContent = `${input1.value} ${input2.value}`
    input1.value = ''
    input2.value = ''
}
init()