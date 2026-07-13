const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const cedula = document.getElementById("cedula").value;
    const curso = document.getElementById("curso").value;

    const resultado = document.getElementById("resultado");

    resultado.style.display = "block";

    resultado.innerHTML = `

        <h3><i class="fa-solid fa-circle-check"></i> Registro Exitoso</h3>

        <p><strong>Nombre:</strong> ${nombre}</p>

        <p><strong>Apellido:</strong> ${apellido}</p>

        <p><strong>Edad:</strong> ${edad} años</p>

        <p><strong>Cédula:</strong> ${cedula}</p>

        <p><strong>Curso:</strong> ${curso}</p>

    `;

    formulario.reset();

});