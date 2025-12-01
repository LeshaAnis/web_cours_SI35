const form = document.getElementById('userForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    messageDiv.textContent = '';
    messageDiv.style.color = '';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    
    if (!name) {
        messageDiv.textContent = 'Поле "Имя" обязательно для заполнения.';
        messageDiv.style.color = 'red';

        return;
    }
    if (!email) {
        messageDiv.textContent = 'Поле "Email" обязательно для заполнения.';
        messageDiv.style.color = 'red';

        return;
    }

    messageDiv.textContent = 'Форма успешно отправлена (в консоль)!';
    messageDiv.style.color = 'green';
 
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log('Данные формы:', formDataObject);
});