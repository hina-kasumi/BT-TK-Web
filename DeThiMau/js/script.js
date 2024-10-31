function validate() {
    const emailInput = document.getElementById("email").value;
    const ratingInput = document.getElementById("rate").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.trim() === "" || ratingInput.trim() === "") {
        alert("Vui lòng nhập đầy đủ thông tin Email và Rating.");
        return false;
    }
    else if (!emailRegex.test(emailInput)) {
        alert("Địa chỉ email không hợp lệ.");
        return false;
    }

    else if (isNaN(ratingInput) || ratingInput < 1 || ratingInput > 5) {
        alert("Rating phải là từ 1 đến 5.");
        return false;
    }
    else {
        alert("Gửi thông tin thành công");
        return true;
    }
}
