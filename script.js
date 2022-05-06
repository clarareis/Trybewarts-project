const sendButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const loginButton = document.getElementById('login-button');
const loginEmail = document.getElementById('login-email');
const loginSenha = document.getElementById('login-senha');

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
