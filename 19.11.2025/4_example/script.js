let count = 0;

const counterDisplay = document.getElementById('counterDisplay');
const incrementButton = document.getElementById('incrementButton');

incrementButton.addEventListener('click', function() { 
    count++;
    counterDisplay.textContent = `Счетчик: ${count}`;
});