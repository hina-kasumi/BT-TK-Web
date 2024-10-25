function valid (e) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = e.target.email.value;
    if (!emailRegex.test(email)) {
        alert('email khong hop le');
    }
    const phoneRegex = /^(0|\+84)(\d{9})$|^\d{10}$/;
    const number = e.target.number.value;
    if (!phoneRegex.test(number)) {
        alert('Please enter a valid phone number');
    }
}