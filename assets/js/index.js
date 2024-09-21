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

// Cerrar modal de inicio de sesión al hacer clic en la "X"
spanCerrarLogin.onclick = function () {
    modalLogin.style.display = 'none';
}

// Variables para el modal de gestion de datos
var modalGestionDatos = document.getElementById('modal-gestion-datos');
var btnAbrirGestionDatos = document.getElementById('btn-abrir-gestion-datos');
var spanCerrarGestionDatos = modalGestionDatos.getElementsByClassName('cerrar')[0];

// Abril modal de gestion de datos
btnAbrirGestionDatos.onclick = function () {
    modalGestionDatos.style.display = 'flex';
}

// Cerrar modal de gestion de datos al hacer clic en la "X"
spanCerrarGestionDatos.onclick = function () {
    modalGestionDatos.style.display = 'none';
}

// Cerrar los modales al hacer clic fuera del contenido del modal
window.onclick = function (event) {
    if (event.target == modalRegistro) {
        modalRegistro.style.display = 'none';
    }
    if (event.target == modalLogin) {
        modalLogin.style.display = 'none';
    }
    if (event.target == modalGestionDatos) {
        modalGestionDatos.style.display = 'none';
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

// Función para filtrar por categoría
function filtrarPorCategoria() {
    var categoria = document.getElementById("categoria").value;  // Obtiene el valor del select de categorías
    var productos = document.querySelectorAll(".producto"); // Obtiene todos los productos

    productos.forEach(function(producto) {
      // Si la categoría está vacía (es decir, "Todas las categorías") o el producto pertenece a la categoría seleccionada, se muestra.
      if (categoria === "" || producto.getAttribute("data-categoria") === categoria) {
        producto.style.display = "block";  // Muestra el producto
      } else {
        producto.style.display = "none";   // Oculta el producto si no coincide con la categoría
      }
    });
  }

  // Función para buscar un producto por su nombre
  function buscarProducto() {
    var input = document.getElementById("buscador").value.toLowerCase();  // Obtiene el valor del input de búsqueda y lo convierte a minúsculas
    var productos = document.querySelectorAll(".producto");          // Obtiene todos los productos

    productos.forEach(function(producto) {
      var nombreProducto = producto.querySelector("h3").textContent.toLowerCase(); // Obtiene el nombre del producto en minúsculas
      // Si el nombre del producto incluye el texto introducido en el buscador, se muestra.
      if (nombreProducto.includes(input)) {
        producto.style.display = "block";  // Muestra el producto si coincide con la búsqueda
      } else {
        producto.style.display = "none";   // Oculta el producto si no coincide
      }
    });
  }

// Función básica para agregar un producto al carrito (simulación)
function agregarAlCarrito(nombreProducto) {
    alert(nombreProducto + " agregado al carrito.");
}

// Función para eliminar un producto del carrito (simulación)
function eliminarDelCarrito(nombreProducto) {
    alert(nombreProducto + " eliminado del carrito.");
}