function valid(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const phoneNumber = e.target['phone-num'].value;
    const day = parseInt(e.target.day.value);
    const month = parseInt(e.target.month.value);
    const year = parseInt(e.target.year.value);
    const date = new Date(year, month - 1, day);
    const checker = /^[\p{L}\s]+$/u;
    const location = /^[\p{L}\d\s]+$/u;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Email không hợp lệ");
    } else if (email !== e.target['confirm-email'].value) {
        alert("nhập lại email bạn đã nhập");
    } else if (!/^\d{10}$/.test(phoneNumber)) {
        // Kiểm tra số điện thoại
        alert("Số điện thoại không hợp lệ");
    } else if ((date.getFullYear() !== year) && (date.getMonth() !== month - 1) && (date.getDate() !== day)) {
        alert("Ngày sinh không hợp lệ.");
    } else if (checker.test(e.target['first_name'].value) && checker.test(e.target['last_name'].value)) {
        alert('tên chỉ chứa chữ bình thường');
    } else if (!location.test(e.target.location.value)
        || !checker.test(e.target.district.value)
        || !checker.test(e.target.city.value)
    ) {
        alert('tên địa chỉ không chứa kí tự đặc biệt')
    }
}