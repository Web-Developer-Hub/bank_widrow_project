//login button functionality...
document.getElementById('login_submit').addEventListener('click', function () {
    const emailField = document.getElementById('input_field').value;
    const userPassword = document.getElementById('password').value;
    if (emailField == 'testuser1@gmail.com' && userPassword == 'testUser') {
        window.location.href = "bank.html";
    }
    else {
        const erroeMassage = document.getElementById('error');
        erroeMassage.innerText = 'Sorry don\'t match email or password, please try again!';
        erroeMassage.style.color = 'red';
        erroeMassage.style.marginTop = '10px';
        erroeMassage.style.fontSize = '20px';
    }
})