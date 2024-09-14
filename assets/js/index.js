// Variables para los modales
var modalRegistro = document.getElementById('modal-registro');
var modalLogin = document.getElementById('modal-login');
var btnAbrirModalRegistro = document.getElementById('btn-abrir-modal');
var btnAbrirModalLogin = document.getElementById('btn-abrir-login');
var spanCerrarRegistro = document.getElementsByClassName('cerrar')[0];
var spanCerrarLogin = document.getElementsByClassName('cerrar')[1];

// Abrir modal de registro al hacer clic en el botón de "Registrarse"
btnAbrirModalRegistro.onclick = function () {
    modalRegistro.style.display = 'flex';
}

// Abrir modal de inicio de sesión al hacer clic en el botón de "Iniciar sesión"
btnAbrirModalLogin.onclick = function () {
    modalLogin.style.display = 'flex';
}

// Cerrar modal al hacer clic en la "X"
spanCerrarRegistro.onclick = function () {
    modalRegistro.style.display = 'none';
}

spanCerrarLogin.onclick = function () {
    modalLogin.style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido del modal
window.onclick = function (event) {
    if (event.target == modalRegistro) {
        modalRegistro.style.display = 'none';
    }
    if (event.target == modalLogin) {
        modalLogin.style.display = 'none';
    }
}

// Función para registrar un usuario (demo)
function registrarUsuario(event) {
    event.preventDefault(); // Evita el envío del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    setTimeout(() => {
        alert(`¡Registro exitoso! Se envió un correo para confirmar el registro a ${email}.`);
        modalRegistro.style.display = 'none';
    }, 1000);
}

// Función para iniciar sesión (demo)
function iniciarSesion(event) {
    event.preventDefault(); // Evita el envío del formulario
    var email = document.getElementById('email-login').value;
    var password = document.getElementById('password-login').value;
    setTimeout(() => {
        alert(`¡Inicio de sesión exitoso! Bienvenido ${email}.`);
        modalLogin.style.display = 'none';
    }, 1000);
}

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

// Función básica para agregar un producto al carrito (solo demostración)
function agregarAlCarrito(nombreProducto) {
    alert(nombreProducto + " agregado al carrito.");
}

// Función para eliminar un producto del carrito (solo demostración)
function eliminarDelCarrito(nombreProducto) {
    alert(nombreProducto + " eliminado del carrito.");
}