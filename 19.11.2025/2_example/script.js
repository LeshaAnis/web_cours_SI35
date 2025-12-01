
const divElement = document.getElementById('targetDiv');
const buttonElement = document.getElementById('toggleButton');

buttonElement.addEventListener('click', function() {

    divElement.classList.toggle('highlight');
});