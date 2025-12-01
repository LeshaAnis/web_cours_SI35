const list = document.getElementById('list');
const addBtn = document.getElementById('addBtn');


list.addEventListener('click', function(event) {

    if (event.target.tagName === 'LI') {
        event.target.textContent = 'Нажато!';
        event.target.classList.add('clicked');
    }
});


let counter = 4;
addBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = `ФИО ${counter}`;
    list.appendChild(newItem);
    counter++;
});