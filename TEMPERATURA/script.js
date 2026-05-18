function calcular() {
  var tempInicial  = parseFloat(document.getElementById('tempInicial').value);
  var tempAmbiente = parseFloat(document.getElementById('tempAmbiente').value);
  var constante    = parseFloat(document.getElementById('constante').value);
  var tiempo       = parseFloat(document.getElementById('tiempo').value);
  var error     = document.getElementById('error');
  var resultado = document.getElementById('resultado');

  if (isNaN(tempInicial) || isNaN(tempAmbiente) || isNaN(constante) || isNaN(tiempo)) {
    error.style.display = 'block';
    resultado.style.display= 'none';
    return;
  }

  error.style.display = 'none';

  var temperatura = tempAmbiente + (tempInicial - tempAmbiente) * Math.exp(-constante * tiempo);
  var redondeado  = Math.round(temperatura);

  document.getElementById('valorResultado').textContent=redondeado;
  resultado.style.display = 'block';
}

function resetear() {
  document.getElementById('tempInicial').value  = '';
  document.getElementById('tempAmbiente').value = '';
  document.getElementById('constante').value    = '';
  document.getElementById('tiempo').value       = '';
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('error').style.display    = 'none';
}
