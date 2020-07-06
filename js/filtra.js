let campoFiltro = document.querySelector('#filtra');

campoFiltro.addEventListener('input', function () {
    console.log(this.value);
    let inscritos = document.querySelectorAll('.inscrito');

    if (this.value.length > 0) {
        for (let i = 0; i < inscritos.length; i++) {
            let inscrito = inscritos[i];
            let tdNome = inscrito.querySelector('.infoNome')
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i")
            if (!expressao.test(nome)) {
                inscrito.classList.add('invisivel');
            } else {
                inscrito.classList.remove('invisivel');
            }
        }
    } else {
        for (let i = 0; i < inscritos.length; i++) {
            let inscrito = inscritos[i];
            inscrito.classList.remove('invisivel')
        }
    }
});