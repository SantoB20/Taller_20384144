function info() {
  var op = document.getElementById("div-info");
  var nombre = document.getElementById("inombre");
  var email = document.getElementById("iemail");
  var asunto = document.getElementById("iasunto");
  var mensaje = document.getElementById("imensaje");
  var tnombre = document.getElementById("txtnombre");
  var temail = document.getElementById("txtemail");
  var tasunto = document.getElementById("txtasunto");
  var tmensaje = document.getElementById("txtmensaje");
    nombre.textContent = tnombre.value;
    email.textContent = temail.value;
    asunto.textContent = tasunto.value;
    mensaje.textContent = tmensaje.value;
    op.style.display = "block";

}
