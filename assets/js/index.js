// Variables para el modal
var modal = document.getElementById('modal-registro');
var btnAbrirModal = document.getElementById('btn-abrir-modal');
var spanCerrar = document.getElementsByClassName('cerrar')[0];

// Abrir modal al hacer clic en el botón de "Registrarse"
btnAbrirModal.onclick = function() {
    modal.style.display = 'flex';
}

// Cerrar modal al hacer clic en la "X"
spanCerrar.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Función para registrar un usuario (demo)
function registrarUsuario(event) {
    event.preventDefault(); // Evita el envío del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    setTimeout(() => {
        alert(`¡Registro exitoso! se envio un correo para confirmar el registro a ${email}.`);
        var modal = document.getElementById('modal-registro');
        modal.style.display= 'none';
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
