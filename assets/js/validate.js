//Seu JavaScript de validação aqui

function validated() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    return name && email && subject && message;
}

var warnId = 0;
function sendWarn(message, color) {
    var warnQuery = document.querySelector('.formcontato__warnings');

    warnQuery.style.color = color;
    warnQuery.style.opacity = 100;
    warnQuery.textContent = message;

    clearTimeout(warnId);

    warnId = setTimeout(() => {

        warnQuery.style.opacity = 0;

    }, 3000);
}

document.querySelector('.formcontato__botao').onclick = (event) => {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var redColor = getComputedStyle(document.documentElement).getPropertyValue('--warning-error');

    if (!validated()) {
        sendWarn('Preencha todos os campos!', redColor);
        return;
    }

    if (!email.includes('@') && !email.includes('.')) {
        sendWarn('Digite um email válido!', redColor);
        return;
    }

    sendWarn('Dados validos, porém essa função está desativada!', redColor);
}