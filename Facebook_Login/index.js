const username = document.getElementsByName("account");
const password = document.getElementsByName("password");

function login() {
    const u = username[0].value.trim();
    const pw = password[0].value.trim();
    if (u === "" || pw === "") {
        alert("Please enter a valid username and password");
    }
    else {
        alert("success");
    }
}