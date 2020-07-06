let form = document.querySelector('#formulario');
let submit = document.querySelector('.botaoEntrar');

submit.addEventListener('click', function () {
    let user = form.usuario.value;
    let pass = form.senha.value;
    ValidaLogin(user, pass);
});

function ValidaLogin(user, pass) {
    if (user == "admin" && pass == "admin") {
        window.open('admin.html');
    } else {
        alert('Usuário e/ou incorretos.');
    }
}