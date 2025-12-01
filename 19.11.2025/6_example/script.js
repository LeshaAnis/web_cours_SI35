const listElement = document.getElementById('itemList');
const buttonElement = document.getElementById('removeLastButton');


buttonElement.addEventListener('click', function() {

    const lastItem = listElement.lastElementChild;


    if (lastItem) {
        listElement.removeChild(lastItem);
    }
});