// Variables para el modal de registro
var modalRegistro = document.getElementById('modal-registro');
var btnAbrirRegistro = document.getElementById('btn-abrir-registro');
var spanCerrarRegistro = modalRegistro.getElementsByClassName('cerrar')[0];

// Abrir modal de registro al hacer clic en el botón "Registrarse"
btnAbrirRegistro.onclick = function () {
    modalRegistro.style.display = 'flex';
}

// Cerrar modal de registro al hacer clic en la "X"
spanCerrarRegistro.onclick = function () {
    modalRegistro.style.display = 'none';
}

// Variables para el modal de inicio de sesión
var modalLogin = document.getElementById('modal-login');
var btnAbrirLogin = document.getElementById('btn-abrir-login');
var spanCerrarLogin = modalLogin.getElementsByClassName('cerrar')[0];

// Abrir modal de inicio de sesión al hacer clic en el botón "Iniciar sesión"
btnAbrirLogin.onclick = function () {
    modalLogin.style.display = 'flex';
}

// Abrir modal de gestión de datos personales al hacer clic en el ícono de cuenta
var modalGestionDatos = document.getElementById('modal-gestion-datos');
var btnAbrirGestionDatos = document.getElementById('btn-abrir-gestion-datos');
var spanCerrarGestionDatos = modalGestionDatos.getElementsByClassName('cerrar')[0];

btnAbrirGestionDatos.onclick = function () {
    modalGestionDatos.style.display = 'flex';
}

spanCerrarGestionDatos.onclick = function () {
    modalGestionDatos.style.display = 'none';
}

// Cerrar modal de inicio de sesión al hacer clic en la "X"
spanCerrarLogin.onclick = function () {
    modalLogin.style.display = 'none';
}

// Cerrar los modales al hacer clic fuera del contenido del modal
window.onclick = function (event) {
    if (event.target == modalRegistro) {
        modalRegistro.style.display = 'none';
    }
    if (event.target == modalLogin) {
        modalLogin.style.display = 'none';
    }
}

// Función para registrar un usuario (simulación)
document.getElementById('form-registro').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario real
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    // Simulación del registro con un timeout
    setTimeout(() => {
        alert(`¡Registro exitoso! Se envió un correo para confirmar el registro a ${email}.`);
        modalRegistro.style.display = 'none'; // Cerrar el modal
    }, 1000);
});

// Función para iniciar sesión (simulación)
document.getElementById('form-login').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario real
    var email = document.getElementById('email-login').value;
    var password = document.getElementById('password-login').value;

    // Simulación de inicio de sesión con un timeout
    setTimeout(() => {
        if (email === "edgarnitola@gmail.com" && password === "12345") {
            alert("Inicio de sesión exitoso.");
        } else {
            alert("Credenciales incorrectas.");
        }
        modalLogin.style.display = 'none'; // Cerrar el modal
    }, 1000);
});

// Función para buscar productos por nombre
function buscarProducto() {
    var input = document.getElementById('buscador').value.toLowerCase();
    var productos = document.getElementById('lista-productos').getElementsByTagName('li');

    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];
        if (producto.innerHTML.toLowerCase().indexOf(input) > -1) {
            producto.style.display = '';
        } else {
            producto.style.display = 'none';
        }
    }
}

// Función para filtrar productos por categoría
function filtrarPorCategoria() {
    var categoriaSeleccionada = document.getElementById('categoria').value;
    var productos = document.getElementById('lista-productos').getElementsByTagName('li');

    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];
        var categoriaProducto = producto.getAttribute('data-categoria');

        if (categoriaSeleccionada === "" || categoriaSeleccionada === categoriaProducto) {
            producto.style.display = '';
        } else {
            producto.style.display = 'none';
        }
    }
}

// Función básica para agregar un producto al carrito (simulación)
function agregarAlCarrito(nombreProducto) {
    alert(nombreProducto + " agregado al carrito.");
}

// Función para eliminar un producto del carrito (simulación)
function eliminarDelCarrito(nombreProducto) {
    alert(nombreProducto + " eliminado del carrito.");
}