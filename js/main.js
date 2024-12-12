// Lista de productos (Array de objetos)
const productos = [
    { id: 1, nombre: "Camiseta", precio: 150000, descripcion: "Camiseta de poliéster, ideal para entrenamientos.", imagen: "../img/camiseta.jpg", categoria: "ropa" },
    { id: 2, nombre: "Pantalón", precio: 100000, descripcion: "Pantalón de algodón, cómodo y resistente.", imagen: "../img/pantalon.jpg", categoria: "ropa" },
    { id: 3, nombre: "Zapatillas", precio: 240000, descripcion: "Zapatillas deportivas con gran amortiguación.", imagen: "../img/zapatillas.jpg", categoria: "ropa" },
    { id: 4, nombre: "Gorra", precio: 50000, descripcion: "Gorra ajustable, ideal para el sol.", imagen: "../img/gorra.jpg", categoria: "accesorios" },
    { id: 5, nombre: "Medias", precio: 50000, descripcion: "Medias deportivas, confort y durabilidad.", imagen: "../img/medias.jpg", categoria: "ropa" },
    { id: 6, nombre: "Mochila", precio: 150000, descripcion: "Mochila grande, ideal para el gimnasio.", imagen: "../img/mochila.jpg", categoria: "accesorios" },
];

// Variables globales
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");
const cartCount = document.getElementById("cart-count");
const mensaje = document.getElementById("mensaje");

// Mostrar productos en el DOM
function mostrarProductos(lista = productos) {
    productList.innerHTML = ""; // Limpiar productos anteriores
    lista.forEach(({ id, nombre, precio, descripcion, imagen }) => {
        const productoHTML = document.createElement("div");
        productoHTML.className = "bg-white shadow p-4 rounded-lg";
        productoHTML.innerHTML = `
            <img src="${imagen}" alt="${nombre}" class="w-full h-48 object-cover rounded-lg">
            <h3 class="text-xl font-bold mt-2">${nombre}</h3>
            <p class="text-gray-700">${descripcion}</p>
            <p class="text-gray-700 font-bold mt-2">Precio: $${precio}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4 agregar-carrito" data-id="${id}">
                Agregar al Carrito
            </button>
        `;
        productList.appendChild(productoHTML);
    });
}

// Actualizar carrito de compras
function actualizarCarrito() {
    cartItems.innerHTML = ""; // Limpiar lista del carrito
    let totalPrecio = 0;

    // Mostrar productos en el carrito
    carrito.forEach(({ nombre, precio }) => {
        const itemHTML = document.createElement("div");
        itemHTML.className = "flex justify-between items-center border-b py-2";
        itemHTML.innerHTML = `
            <span>${nombre}</span>
            <span>$${precio}</span>
        `;
        cartItems.appendChild(itemHTML);
        totalPrecio += precio; // Sumar al total
    });

    total.textContent = `Total: $${totalPrecio}`; // Actualizar total
    cartCount.textContent = carrito.length; // Actualizar contador de carrito

    // Guardar carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find((item) => item.id === idProducto);
    producto 
        ? carrito.push(producto) && mostrarMensaje(`${producto.nombre} agregado al carrito.`, "success")
        : mostrarMensaje("Producto no encontrado.", "error");
    actualizarCarrito();
}

// Filtrar productos por categoría
document.getElementById("filter-category").addEventListener("change", (event) => {
    const categoriaSeleccionada = event.target.value;
    const productosFiltrados = categoriaSeleccionada === "all"
        ? productos
        : productos.filter(producto => producto.categoria === categoriaSeleccionada);
    mostrarProductos(productosFiltrados);
});

// Finalizar compra
document.getElementById("checkout").addEventListener("click", () => {
    carrito.length > 0
        ? (carrito = [], mostrarMensaje("Compra realizada con éxito", "success"))
        : mostrarMensaje("El carrito está vacío", "error");
    actualizarCarrito();
});

// Mostrar mensajes al usuario
function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo === "success" ? "text-green-500" : "text-red-500";
    setTimeout(() => (mensaje.textContent = ""), 3000);
}

// Escuchar clics en botones de agregar al carrito
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("agregar-carrito")) {
        const idProducto = parseInt(event.target.dataset.id);
        agregarAlCarrito(idProducto);
    }
});

// Mostrar productos al cargar la página
mostrarProductos();
actualizarCarrito();
