// Lista de productos (Array de objetos)
const productos = [
    { id: 1, nombre: "Camiseta", precio: 150000, descripcion: "Camiseta de poliéster, ideal para entrenamientos.", imagen: "../img/camiseta.jpg", categoria: "ropa" },
    { id: 2, nombre: "Pantalón", precio: 100000, descripcion: "Pantalón de algodón, cómodo y resistente.", imagen: "../img/pantalon.jpg", categoria: "ropa" },
    { id: 3, nombre: "Zapatillas", precio: 240000, descripcion: "Zapatillas deportivas con gran amortiguación.", imagen: "../img/zapatillas.jpg", categoria: "ropa" },
    { id: 4, nombre: "Gorra", precio: 50000, descripcion: "Gorra ajustable, ideal para el sol.", imagen: "../img/gorra.jpg", categoria: "accesorios" },
    { id: 5, nombre: "Medias", precio: 50000, descripcion: "Medias deportivas, confort y durabilidad.", imagen: "../img/medias.jpg", categoria: "ropa" },
    { id: 6, nombre: "Mochila", precio: 150000, descripcion: "Mochila grande, ideal para el gimnasio.", imagen: "../img/mochila.jpg", categoria: "accesorios" },
];


// Carrito de compras
let carrito = [];

// Seleccionar el contenedor de productos
const productList = document.getElementById("product-list");

// Mostrar productos
function mostrarProductos() {
    productos.forEach((producto) => {
        const productoHTML = document.createElement("div");
        productoHTML.className = "bg-white shadow p-4 rounded-lg";
        productoHTML.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-48 object-cover rounded-lg">
            <h3 class="text-xl font-bold mt-2">${producto.nombre}</h3>
            <p class="text-gray-700">${producto.descripcion}</p>
            <p class="text-gray-700 font-bold mt-2">Precio: $${producto.precio}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4 agregar-carrito" data-id="${producto.id}">
                Agregar al Carrito
            </button>
        `;
        productList.appendChild(productoHTML);
    });
}

mostrarProductos();

// Escuchar eventos de botones
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("agregar-carrito")) {
        const idProducto = parseInt(event.target.dataset.id);
        agregarAlCarrito(idProducto);
    }
});

// Función para agregar productos al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find((item) => item.id === idProducto);

    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

// Actualizar visualización del carrito
function actualizarCarrito() {
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");

    // Limpiar el carrito visual
    cartItems.innerHTML = "";

    // Mostrar productos del carrito
    carrito.forEach((item, index) => {
        const itemHTML = document.createElement("div");
        itemHTML.className = "flex justify-between items-center border-b py-2";
        itemHTML.innerHTML = `
            <span>${item.nombre}</span>
            <span>$${item.precio}</span>
        `;
        cartItems.appendChild(itemHTML);
    });

    // Escuchar cambios en el filtro
document.getElementById("filter-category").addEventListener("change", (event) => {
    const categoriaSeleccionada = event.target.value;

    // Filtrar productos según la categoría seleccionada
    const productosFiltrados = categoriaSeleccionada === "all"
        ? productos
        : productos.filter(producto => producto.categoria === categoriaSeleccionada);

    // Actualizar la vista de productos
    mostrarProductosFiltrados(productosFiltrados);
});

// Mostrar productos filtrados
function mostrarProductosFiltrados(lista) {
    productList.innerHTML = ""; // Limpiar la vista de productos
    lista.forEach((producto) => {
        const productoHTML = document.createElement("div");
        productoHTML.className = "bg-white shadow p-4 rounded-lg";
        productoHTML.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-48 object-cover rounded-lg">
            <h3 class="text-xl font-bold mt-2">${producto.nombre}</h3>
            <p class="text-gray-700">${producto.descripcion}</p>
            <p class="text-gray-700 font-bold mt-2">Precio: $${producto.precio}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4 agregar-carrito" data-id="${producto.id}">
                Agregar al Carrito
            </button>
        `;
        productList.appendChild(productoHTML);
    });
}


    // Calcular total
    const totalPrecio = carrito.reduce((sum, item) => sum + item.precio, 0);
    total.textContent = `Total: $${totalPrecio}`;
}

// Botón de finalizar compra
document.getElementById("checkout").addEventListener("click", () => {
    if (carrito.length > 0) {
        alert("Compra realizada con éxito");
        carrito = [];
        actualizarCarrito();
    } else {
        alert("El carrito está vacío");
    }
});
