var inscritos = document.querySelectorAll(".inscrito");

var tabela = document.querySelector('#tabelaInscritos');

tabela.addEventListener('dblclick', function (event) {
    event.target.parentNode.classList.add('fadeOut');

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);
});


