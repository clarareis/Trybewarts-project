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

function printform() {
  const printscreen = {
    Nome: document.getElementById('input-name').value,
    Sobrenome: document.getElementById('input-lastname').value,
    Email: document.getElementById('input-email').value,
    Casa: document.getElementById('house').value,
    Família: document.querySelector('input[name="family"]:checked').value,
    Matérias: document.querySelectorAll('input[type="checkbox"]:checked'),
    Avaliação: document.querySelector('input[name="rate"]:checked').value,
    Observações: document.getElementById('textarea').value,
  };
  return printscreen;
}

function subjects() {
  const subjectsSelect = printform().Matérias;
  const subjectsArray = [];
  for (let index = 0; index < subjectsSelect.length; index += 1) {
    subjectsArray.push(subjectsSelect[index].value);
  }
  return subjectsArray.join(', ');
}

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  const inputs = printform();
  const formPrint = document.getElementById('evaluation-form');
  formPrint.innerHTML = `Nome: ${inputs.Nome} ${inputs.Sobrenome}
  Email: ${inputs.Email}
  Casa: ${inputs.Casa}
  Família: ${inputs.Família}
  Avaliação: ${inputs.Avaliação}
  Matérias: ${subjects()}
  Observações: ${inputs.Observações}
  `;
});
