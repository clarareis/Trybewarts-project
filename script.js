//  FUNÇÕES
const sendButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

// FUNÇÕES
function validation() {
  if (!agreement.checked) {
    alert('Por favor, concorde com o uso das informações antes de enviar o formulário!');
  }
}

//  EVENTOS
// sendButton.addEventListener('click', validation);
