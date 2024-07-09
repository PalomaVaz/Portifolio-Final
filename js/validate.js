//Seu JavaScript de validação aqui

const botao = document.querySelector('.formcontato__botao');

botao.onclick = function () {
    validarInputs();
}

const nome = document.querySelector('#nome')
nome.onblur = function () {
    validarNome(nome.value);
}

const email = document.getElementById('email')
email.onblur = function () {
    validarEmail(email.value);
}

const assunto = document.querySelector('#assunto')
assunto.onblur = function () {
    validarAssunto(assunto.value);
}

const mensagem = document.querySelector('#mensagem')
mensagem.onblur = function () {
    validarMensagem(cxMsg.value);
}

function validarInputs() {
    // if(validarNome() &&
    // validarEmail() &&
    // validarAssunto() &&
    // validarMensagem()){
    //     alert('Enviado com sucesso');
    // }
}

function validarNome(nome) {
    if (validarSeEstaVazio(nome) || validarTamanhoMaximo(nome, 50)) { 
        alert('Por favor corrigir campo Nome:\n- É obrigatório\n- Máximo de 50 caracteres');
        return false
    }
    return true
}

function validarEmail(email) {
    if (validarSeEstaVazio(email) || validarFormatoEmail(email)) {
        alert('Por favor corrigir campo Email:\n- É obrigatório\n- Deve ser um e-mail válido');
    }
}

function validarAssunto(assunto) {
    if (validarSeEstaVazio(assunto) || validarTamanhoMaximo(assunto, 50)) { 
        alert('Por favor corrigir campo Assunto:\n- É obrigatório\n- Máximo de 50 caracteres');
    }
}

function validarMensagem(mensagem) {
    if (validarSeEstaVazio(mensagem) || validarTamanhoMaximo(mensagem, 300)) { 
        alert('Por favor corrigir campo Mensagem:\n- É obrigatório\n- Máximo de 300 caracteres');
        return false
    }
    return true
}

function validarSeEstaVazio(value) {
    return value?.length === 0
}

function validarTamanhoMaximo(value, maximo) {
    return value.length > maximo
}

function validarFormatoEmail(email) {
    return new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/gi).test(email);
}