let addForm = document.querySelector('#botaoAdiciona');

addForm.addEventListener('click', function () {
    event.preventDefault();
    let form = document.querySelector('#formInsere');
    let inscrito = getInscrito(form);
    let erros = validaInscrito(inscrito);
    if (erros.length > 0) {
        exibeMsgErros(erros);
        return;
    }
    
    let inscritoTr = montaTr(inscrito);
    let tabela = document.querySelector('#tabelaInscritos');
    tabela.appendChild(inscritoTr);
    form.reset();
    let ul = document.querySelector('#mensagemErro');
    ul.innerHTML = '';
});

function exibeMsgErros(erros){
    let ul = document.querySelector('#mensagemErro')
    ul.innerHTML = '';
    erros.forEach(function(erro) {
        let li = document.createElement('li');
        li.classList.add('cor');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function getInscrito(form) {

    let inscrito = {
        nome: form.nome.value,
        email: form.email.value,
        endereco: form.endereco.value,
        cidade: form.cidade.value,
        uf: form.uf.value,
        cep: form.cep.value
    }
    return inscrito;
}

function montaTr(inscrito) {
    let inscritoTr = document.createElement('tr');
    inscritoTr.classList.add('inscrito');

    let nomeTd = document.createElement('td');
    let emailTd = document.createElement('td');
    let enderecoTd = document.createElement('td');
    let cidadeTd = document.createElement('td');
    let ufTd = document.createElement('td');
    let cepTd = document.createElement('td');

    inscritoTr.appendChild(montaTd(inscrito.nome, 'infoNome'));
    inscritoTr.appendChild(montaTd(inscrito.email, 'infoEmail'));
    inscritoTr.appendChild(montaTd(inscrito.endereco, 'infoEndereco'));
    inscritoTr.appendChild(montaTd(inscrito.cidade, 'infoCidade'));
    inscritoTr.appendChild(montaTd(inscrito.uf, 'infoUf'));
    inscritoTr.appendChild(montaTd(inscrito.cep, 'infoCep'));
    return inscritoTr;
}

function montaTd(dado, classe) {
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaInscrito(inscrito) {
    var erros = [];
    if (inscrito.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (inscrito.email.length == 0) {
        erros.push("O email não pode ser em branco");
    }
    if (inscrito.endereco.length == 0) {
        erros.push("O endereço não pode ser em branco");
    }
    if (inscrito.cidade.length == 0) {
        erros.push("A cidade não pode ser em branco");
    }
    if (inscrito.cep.length == 0) {
        erros.push("O CEP não pode ser em branco");
    }
    return erros;
}