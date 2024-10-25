function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regex.test(email));
    if(!regex.test(email))
        alert('Please enter a valid email');
}

function confirmEmail(confirm) {
    const email = document.getElementById('email').value;
    if (email !== confirm)
        alert('Please enter a correct email');
}