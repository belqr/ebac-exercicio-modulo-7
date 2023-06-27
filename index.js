const form = document.getElementById('formulario');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let valueCampoA = parseInt(campoA.value);
  console.log(valueCampoA);
  let valueCampoB = parseInt(campoB.value);
  console.log(valueCampoB);

  if (valueCampoB > valueCampoA) {
      const containerMensagemSucesso = document.querySelector('.success-message');
      containerMensagemSucesso.style.display = 'block';
      document.querySelector('.error-message').style.display = 'none';

  } else {
      document.querySelector('.error-message').style.display = 'block';
      document.querySelector('.success-message').style.display = 'none';
  }
});