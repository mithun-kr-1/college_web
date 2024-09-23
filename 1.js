let attempt = 0;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userID = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const blockedUntil = localStorage.getItem(`${userID}_blockedUntil`);
    const currentTime = new Date().getTime();

    // Example credentials
    const correctUserID = 'mithun';
    const correctPassword = 'mithunkr';

    if (userID === correctUserID && password === correctPassword) {
        alert('Login successful!');
        window.location.href = 'a1main.html';
        message.textContent = '';
        attempt = 0;  // reset attempt count on successful login
    } else {
        alert('incorrect password!!!')
        }
    }
);
