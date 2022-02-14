function info(plan) {
  var op = document.getElementById("div-info");
  cantA = document.getElementById("cantA");
  cantC = document.getElementById("cantC");
  m1 = document.getElementById("1m");
  m3 = document.getElementById("3m");
  m6 = document.getElementById("6m");
  a1 = document.getElementById("1a");
  switch (plan) {
    case bronce:
      cantA.textContent = "1";
      cantC.textContent = "3";
      m1.textContent = "$100.000";
      m3.textContent = "$250.000";
      m6.textContent = "$600.000";
      a1.textContent = "$900.000";
      break;
    case plata:
      cantA.textContent = "1 a 2";
      cantC.textContent = "3";
      m1.textContent = "$200.000";
      m3.textContent = "$500.000";
      m6.textContent = "$900.000";
      a1.textContent = "$1'300.000";
      break;
    case oro:
      cantA.textContent = "2 a 3";
      cantC.textContent = "3";
      m1.textContent = "$300.000";
      m3.textContent = "$700.000";
      m6.textContent = "$1'200.000";
      a1.textContent = "$1'800.000";
      break;
    case diamante:
      cantA.textContent = "4";
      cantC.textContent = "Ilimitadas";
      m1.textContent = "$400.000";
      m3.textContent = "$1'000.000";
      m6.textContent = "$1'800.000";
      a1.textContent = "$2'400.000";
      break;
  }
  op.style.display="block";
}
function hide()
{
    var op = document.getElementById("div-info");
    op.style.display="none";
}
