document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let cedula = document.getElementById("cedula").value;
    let curso = document.getElementById("curso").value;

    document.getElementById("resultado").innerHTML = `
        <h3>Datos Registrados</h3>

        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Apellido:</strong> ${apellido}<br>
        <strong>Edad:</strong> ${edad} años<br>
        <strong>Cédula:</strong> ${cedula}<br>
        <strong>Curso:</strong> ${curso}
    `;
});