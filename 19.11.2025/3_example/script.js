
const listElement = document.getElementById('itemList');
const inputElement = document.getElementById('textInput');
const buttonElement = document.getElementById('addItemButton');


buttonElement.addEventListener('click', function() {

    const inputValue = inputElement.value.trim();


    if (inputValue) {

        const listItem = document.createElement('li');
        listItem.textContent = inputValue;


        listElement.appendChild(listItem);


        inputElement.value = '';
    }
});