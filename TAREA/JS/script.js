function calcularCalor() {
  var t0  = parseFloat(document.getElementById('t0').value);
  var ts  = parseFloat(document.getElementById('ts').value);
  var k   = parseFloat(document.getElementById('k').value);
  var t   = parseFloat(document.getElementById('t').value);
 
  var divError     = document.getElementById('c1-error');
  var divResultado = document.getElementById('c1-resultado');
 
  if (isNaN(t0) || isNaN(ts) || isNaN(k) || isNaN(t)) {
    divError.style.display     = 'block';
    divResultado.style.display = 'none';
    return;
  }
 
  divError.style.display = 'none';
 
  var temperatura = ts + (t0 - ts) * Math.exp(-k * t);
  var redondeado  = Math.round(temperatura);
 
  document.getElementById('c1-val').textContent = redondeado;
  divResultado.style.display = 'block';
}
 
function resetCalor() {
  document.getElementById('t0').value = '';
  document.getElementById('ts').value = '';
  document.getElementById('k').value  = '';
  document.getElementById('t').value  = '';
  document.getElementById('c1-resultado').style.display = 'none';
  document.getElementById('c1-error').style.display     = 'none';
}
 
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
 

function combinaciones(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}
 
function calcularComb() {
  var n1 = parseInt(document.getElementById('n1').value);
  var r1 = parseInt(document.getElementById('r1').value);
  var n2 = parseInt(document.getElementById('n2').value);
  var r2 = parseInt(document.getElementById('r2').value);
 
  var divError     = document.getElementById('c2-error');
  var divResultado = document.getElementById('c2-resultado');
 
  if (r1 > n1 || r2 > n2) {
    divError.style.display     = 'block';
    divResultado.style.display = 'none';
    return;
  }
 
  divError.style.display = 'none';
 
  var grupo1 = combinaciones(n1, r1);
  var grupo2 = combinaciones(n2, r2);
  var total  = grupo1 * grupo2;
 
  const div = document.getElementById("c2-resultado");
  div.className = "resultado-multi";
  div.style.display = "block";
  div.innerHTML = "C(n1,r1)= " + grupo1 + "<br>" + "C(n2,r2)= " + grupo2 + "<br>" + "Total= " + total;
}
 