
const titleElement = document.getElementById('title');
const buttonElement = document.getElementById('changeButton');


buttonElement.addEventListener('click', function() {

    titleElement.textContent = 'Заголовок изменен!';
});