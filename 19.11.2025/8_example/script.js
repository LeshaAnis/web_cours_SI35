const box = document.getElementById('box');
const button = document.getElementById('toggleBtn');

button.addEventListener('click', () => {
    box.classList.toggle('hidden');
});