document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymaj domyślne działanie formularza

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    // Walidacja imienia
    if (name === '') {
        document.getElementById('name-error').textContent = 'Imię i nazwisko są wymagane.';
        valid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }

    // Walidacja adresu e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Proszę podać poprawny adres e-mail.';
        valid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Walidacja wiadomości
    if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Wiadomość musi mieć co najmniej 10 znaków.';
        valid = false;
    } else {
        document.getElementById('message-error').textContent = '';
    }

    if (valid) {
        alert('Formularz został wysłany!');
        // Możesz dodać kod do wysyłania formularza
    }
});