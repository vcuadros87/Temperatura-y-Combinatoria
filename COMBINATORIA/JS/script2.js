function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function combinaciones(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function calcular(event) {
  event.preventDefault();

  const n1 = parseInt(document.getElementById("n1").value);
  const r1 = parseInt(document.getElementById("r1").value);
  const n2 = parseInt(document.getElementById("n2").value);
  const r2 = parseInt(document.getElementById("r2").value);

  if (r1 > n1 || r2 > n2) {
    const div = document.getElementById("resultado");
    div.className = "resultado error";
    div.style.display = "block";
    div.textContent = "Error: r no puede ser mayor que n en ningun grupo.";
    return;
  }

  const grupo1 = combinaciones(n1, r1);
  const grupo2 = combinaciones(n2, r2);
  const total = grupo1 * grupo2;

  const div = document.getElementById("resultado");
  div.className = "resultado";
  div.style.display = "block";
  div.innerHTML = "C(n1,r1)= " + grupo1 + "<br>" + "C(n2,r2)= " + grupo2 + "<br>" + "Total= " + total;
}