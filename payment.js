// Campo de pagamento
let cardNumInput = 
    document.querySelector('#cardNum')

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value
    cNumber = cNumber.replace(/\s/g, "")

    if (Number(cNumber)) {
        cNumber = cNumber.match(/.{1,4}/g)
        cNumber = cNumber.join(" ")
        cardNumInput.value = cNumber
    }
})

// Armazenamento dos dados do cliente
document.getElementById('form-pagamento').addEventListener('submit', function(e){
  e.preventDefault();

  const data = {
    data: {
      nome: document.getElementById('name').value,
      email: document.getElementById('email').value,
      endereco: document.getElementById('address').value,
      cidade: document.getElementById('city').value,
      estado: document.getElementById('state').value,
      cep: document.getElementById('zip').value,
      nome_cartao: document.getElementById('cardName').value,
      numero_cartao: document.getElementById('cardNum').value,
      cvv: document.getElementById('cvv').value
    }
  };

  const endpoint = 'https://sheetdb.io/api/v1/2tzlke8cxbipe';

  fetch(endpoint, {
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result => {
    alert('Dados enviados com sucesso!');
    console.log(result);
  })
  .catch(error => {
    alert('Erro ao enviar os dados.');
    console.log(error);
  });
});
