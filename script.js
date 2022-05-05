//  FUNÇÕES
const sendButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

sendButton.disabled = true;

function send() {
  if (agreement.checked) {
    sendButton.disabled = false;
  }
}
agreement.addEventListener('click', send);
