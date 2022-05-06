const sendButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const loginButton = document.getElementById('login-button');
const loginEmail = document.getElementById('login-email');
const loginSenha = document.getElementById('login-senha');
const form = document.getElementById('evaluation-form').value;
const inputName = document.getElementById('input-name').value;
const inputLastName = document.getElementById('input-lastname').value;
const email = document.getElementById('input-email').value;
const house = document.getElementById('house').value;
const family = document.getElementById('families').value;
const subject = document.getElementById('label-content').value;
const assessment = document.getElementById('label-rate').value;
const observation = document.getElementById('textarea').value;
var printscreen = '';


sendButton.disabled = true;

function send() {
  if (agreement.checked) {
    sendButton.disabled = false;
  }
}

agreement.addEventListener('click', send);

function wordsCount() {
  console.log(textArea.value.length);
  counter.innerText = 500 - textArea.value.length;
}
textArea.addEventListener('input', wordsCount);

function button(event) {
  event.preventDefault();
  if (loginEmail.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', button);

function printform(value) {
  return {
    Nome: inputName + inputLastName,
    Email: email,
    Casa: house,
    Família: family,
    Matérias: subject,
    Avaliação: assessment,
    Observações: observation,
  };
}

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  alert(printform);
});
