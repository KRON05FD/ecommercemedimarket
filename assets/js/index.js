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
// variables del carrito de compras
var btnAbrirModalCarrito = document.getElementById('btn-abrir-carrito');

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

//4. Registro de cuentas de usuario:
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
// Función para actualizar datos de un usuario (simulación)
document.getElementById('modal-gestion-datos').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario real
    var nombre = document.getElementById('nombre-gestion').value;
    var email = document.getElementById('direccion-gestion').value;
    var email = document.getElementById('telefono-gestion').value;

    // Simulación del registro con un timeout
    setTimeout(() => {
        alert(`¡Registro exitoso! Se actualizo la informacion correctamente.`);
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
// Función para enviar formulario de contacto de un usuario (simulación)
document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario real
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var email = document.getElementById('telefono').value;
    var email = document.getElementById('asunto').value;
    var email = document.getElementById('mensaje').value;

    // Simulación del envio con un timeout
    setTimeout(() => {
        alert(`¡Gracias por escribirnos! ${nombre}, pronto nos contactaremos contigo.`);
        modalRegistro.style.display = 'none'; // Cerrar el modal
    }, 1000);
});
// 1. Búsqueda básica de productos:
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

  //2. Carrito de compras:
  // Función básica para agregar un producto al carrito 
function agregarAlCarrito(nombreProducto) {
    alert(nombreProducto + " agregado al carrito.");
}

// Función para eliminar un producto del carrito 
function eliminarDelCarrito(nombreProducto) {
    alert(nombreProducto + " eliminado del carrito.");
}

  var modalCarrito = document.getElementById('modal-carrito-de-compras');
  var spanCerrarCarrito = document.getElementById('cerrar-carrito');
  
  // Abrir modal de carrito al hacer clic en el botón de "Carrito"
  btnAbrirModalCarrito.onclick = function () {
  
      carrito.mostrarContenido();
      modalCarrito.style.display = 'flex';
  }
  
  spanCerrarCarrito.onclick = function () {
      modalCarrito.style.display = 'none';
  }
  
  let productos = sessionStorage.getItem('productos-carrito');
  productos = productos != null ? JSON.parse(productos): [];
  
  const carrito = {
      productos
  };
  
  carrito.mostrarContenido = () => {
      const contenidoCarrito = document.getElementById('contenido-carrito-de-compras');
      contenidoCarrito.innerHTML = "";
  
      if (carrito.productos.length > 0){
          const tabla = document.createElement('table');
  
          const encabezados = ["", "Producto", "Cantidad", "Valor unitario", "Valor total",""];
          const filaEncabezados = document.createElement('tr');
          encabezados.forEach(encabezado => {
              const th = document.createElement('th');
              th.textContent = encabezado;
              filaEncabezados.appendChild(th);
          });
          tabla.appendChild(filaEncabezados);
  
          carrito.productos.forEach(producto => {
              const fila = document.createElement('tr');
  
              let td = document.createElement('td');
              let img = document.createElement('img');
              img.src = producto.imagen;
              td.appendChild(img);
              fila.appendChild(td);
  
              td = document.createElement('td');
              td.textContent = producto.producto;
              fila.appendChild(td);
  
              td = document.createElement('td');
              td.classList = "celda-cantidad";
  
              const btnDisminuir = document.createElement('button');
              btnDisminuir.classList = "btn-modificar-cantidad";
              if (producto.cantidad > 1){
                  btnDisminuir.onclick = () => carrito.modificarCantidad(producto, -1);
              }
              else {
                  btnDisminuir.disabled = true;
              }
              btnDisminuir.textContent = "-1";
              td.appendChild(btnDisminuir);
  
              const etiquetaCantidad = document.createElement('span');
              etiquetaCantidad.textContent = producto.cantidad;
              td.appendChild(etiquetaCantidad);
  
              const btnAumentar = document.createElement('button');
              btnAumentar.classList = "btn-modificar-cantidad";
              btnAumentar.onclick = () => carrito.modificarCantidad(producto, 1);
              btnAumentar.textContent = "+1";
              td.appendChild(btnAumentar);
  
              fila.appendChild(td);
  
              td = document.createElement('td');
              td.classList = "celda-valor";
              td.textContent = "$"+producto.valor;
              fila.appendChild(td);
  
              td = document.createElement('td');
              td.classList = "celda-valor";
              td.textContent = "$"+producto.cantidad * producto.valor;
              fila.appendChild(td);
              td = document.createElement('td');
  
              const btnBorrar = document.createElement('a');
              td.classList = "celda-accion";
              btnBorrar.textContent = "Eliminar";
              btnBorrar.onclick = () => carrito.borrar(producto);
              td.appendChild(btnBorrar);
              fila.appendChild(td);
  
              tabla.appendChild(fila);
          });
          contenidoCarrito.appendChild(tabla);
  
          const total = document.createElement('h3');
          total.textContent = "Total del carrito $" + carrito.calcularTotal();
          contenidoCarrito.appendChild(total);
      }
  else {
      const mensaje = document.createElement('p');
      mensaje.innerHTML = "No se han seleccionado productos";
      contenidoCarrito.appendChild(mensaje);
  }
  
  }
  
  carrito.agregar = (producto, valor, imagen) => {
      productoAgregado = carrito.productos.find(x => x.producto == producto);
      if (productoAgregado){
          productoAgregado.cantidad++;
      } else {
          carrito.productos.push({
              producto,
              valor,
              cantidad: 1,
              imagen
          });
      }
      sessionStorage.setItem('productos-carrito', JSON.stringify(carrito.productos));
  }
  
  carrito.borrar = (producto) => {
      carrito.productos = carrito.productos.filter(x => x != producto);
      sessionStorage.setItem('productos-carrito', JSON.stringify(carrito.productos));
      carrito.mostrarContenido();
  }
  
  carrito.modificarCantidad = (producto, cantidad) => {
      producto.cantidad += cantidad;
      sessionStorage.setItem('productos-carrito', JSON.stringify(carrito.productos));
      carrito.mostrarContenido();
  }
  
  carrito.calcularTotal = () => {
      let total = 0;
      carrito.productos.forEach(producto => total += producto.valor * producto.cantidad);
      return total;
  }