const form = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const nivel = document.getElementById("nivel");

/* VALIDACIÓN */

form.addEventListener("submit", e => {

    e.preventDefault();

    if(usuario.value === "" || correo.value === "" || password.value === ""){
        alert("Completa todos los campos");
        return;
    }

    if(password.value.length < 8){
        alert("La contraseña debe tener al menos 8 caracteres");
        return;
    }

    alert("Registro exitoso 🚀");
});


/* BARRA DE SEGURIDAD */

password.addEventListener("input", () => {
    evaluarSeguridad(password.value);
});

function evaluarSeguridad(pass){

    let fuerza = 0;

    if(pass.length >= 8) fuerza++;
    if(/[A-Z]/.test(pass)) fuerza++;
    if(/[0-9]/.test(pass)) fuerza++;
    if(/[@#$%]/.test(pass)) fuerza++;

    let porcentaje = fuerza * 25;

    nivel.style.width = porcentaje + "%";

    if(porcentaje <= 25) nivel.style.background = "red";
    else if(porcentaje <= 50) nivel.style.background = "orange";
    else if(porcentaje <= 75) nivel.style.background = "yellow";
    else nivel.style.background = "limegreen";
}