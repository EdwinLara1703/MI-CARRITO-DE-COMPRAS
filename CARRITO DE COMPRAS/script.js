const productos = [
  { id: 1, nombre: 'Playera TOMMY', precio: 800 },
  { id: 2, nombre: 'Pantalon AMERICAN', precio: 900 },
  { id: 3, nombre: 'Tenis J1', precio: 3200 },

];


let carrito = [];

// Función flecha que agrega un producto al carrito
const agregarAlCarrito = (idProducto) => {
  const producto = productos.find(p => p.id === idProducto);
  
  if (producto) {
    carrito.push(producto);
    console.log(`${producto.nombre} agregado al carrito.`);
    actualizarCarrito();
  } else {
    console.log('Producto no válido.');
  }
};

// Función que actualiza el carrito y lo muestra en la consola
const actualizarCarrito = () => {
  console.clear();
  console.log('Carrito de compras:');
  
  let total = 0;

  carrito.forEach(producto => {
    console.log(`${producto.nombre} - $${producto.precio}`);
    total += producto.precio;
  });

  console.log(`Total: $${total.toFixed(2)}`);
};

// Función que muestra los productos disponibles en un alert y permite seleccionarlos
const iniciarTienda = () => {
  let continuar = true;

  while (continuar) {
    let opciones = 'Seleccione una opción:\n\n';
    productos.forEach(producto => {
      opciones += `${producto.id}. ${producto.nombre} - Precio: $${producto.precio}\n`;
    });
    opciones += '\n4. Ver carrito total\n5. Salir';

    let seleccion = parseInt(prompt(opciones));

    if (seleccion >= 1 && seleccion <= 3) {
      agregarAlCarrito(seleccion);
    } else if (seleccion === 4) {
      mostrarCarritoTotal();
    } else if (seleccion === 5) {
      console.log('Saliendo de la tienda...');
      continuar = false;
    } else {
      alert('Opción no válida, intente de nuevo.');
    }
  }
};

// Función que muestra el contenido del carrito y el total en un alert
const mostrarCarritoTotal = () => {
  if (carrito.length === 0) {
    alert('El carrito está vacío.');
    return;
  }

  let mensajeCarrito = 'Carrito de compras:\n\n';
  let total = 0;

  carrito.forEach(producto => {
    mensajeCarrito += `${producto.nombre} - $${producto.precio}\n`;
    total += producto.precio;
  });

  mensajeCarrito += `\nTotal: $${total.toFixed(2)}`;
  alert(mensajeCarrito);
};
