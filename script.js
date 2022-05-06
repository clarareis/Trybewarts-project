const sendButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

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
