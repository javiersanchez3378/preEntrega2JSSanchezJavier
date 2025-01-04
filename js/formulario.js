/*document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contact-form');
    
    if (!formulario) {
        console.error("No se encontró el formulario.");
        return;
    }
  
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre) {
            mostrarToast("El campo 'Nombre' es obligatorio.", "error");
            return;
        }
        if (!email) {
            mostrarToast("El campo 'Email' es obligatorio.", "error");
            return;
        }
        if (!mensaje) {
            mostrarToast("El campo 'Mensaje' es obligatorio.", "error");
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            mostrarToast("Por favor, ingresa un email válido.", "error");
            return;
        }

        mostrarToast("Formulario enviado correctamente.", "success");
        formulario.reset();
    });
});

function mostrarToast(mensaje, tipo) {
    const estilo = tipo === "success"
        ? "linear-gradient(to right, #00b09b, #96c93d)"
        : "linear-gradient(to right, #ff5f6d, #ffc371)";
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: estilo },
    }).showToast();
} 

   /* console.log("Archivo JS cargado correctamente");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado");

    const formulario = document.getElementById('contact-form');
    if (!formulario) {
        console.error("No se encontró el formulario con ID 'contact-form'");
        return;
    }

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Formulario enviado");

        const nombre = document.getElementById('nombre')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const mensaje = document.getElementById('mensaje')?.value.trim();

        console.log("Datos capturados:", { nombre, email, mensaje });

        if (!nombre) {
            console.warn("El campo 'Nombre' está vacío");
            alert("El campo 'Nombre' es obligatorio");
            return;
        }

        if (!email) {
            console.warn("El campo 'Email' está vacío");
            alert("El campo 'Email' es obligatorio");
            return;
        }

        if (!mensaje) {
            console.warn("El campo 'Mensaje' está vacío");
            alert("El campo 'Mensaje' es obligatorio");
            return;
        }

        alert("Formulario enviado correctamente");
        formulario.reset();
    });
}); */

/*document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contact-form');
    
    if (!formulario) {
        console.error("No se encontró el formulario.");
        return;
    }
  
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre) {
            mostrarToast("El campo 'Nombre' es obligatorio.", "error");
            return;
        }
        if (!email) {
            mostrarToast("El campo 'Correo' es obligatorio.", "error");
            return;
        }
        if (!mensaje) {
            mostrarToast("El campo 'Mensaje' es obligatorio.", "error");
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            mostrarToast("Por favor, ingresa un correo válido.", "error");
            return;
        }

        mostrarToast("Formulario enviado correctamente.", "success");
        formulario.reset();
    });
});

function mostrarToast(mensaje, tipo) {
    const estilo = tipo === "success"
        ? "linear-gradient(to right, #00b09b, #96c93d)"
        : "linear-gradient(to right, #ff5f6d, #ffc371)";
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: estilo },
    }).showToast();
}
*/ 

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contact-form');
    
    if (!formulario) {
        console.error("No se encontró el formulario.");
        return;
    }
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensajeElement = document.getElementById('mensaje');
        
        if (!nombre || !email || !mensajeElement) {
            console.error("Faltan uno o más elementos del formulario.");
            return;
        }
        
        const nombreValue = nombre.value.trim();
        const emailValue = email.value.trim();
        const mensajeValue = mensajeElement.value.trim();
        
        if (!nombreValue) {
            mostrarToast("El campo 'Nombre' es obligatorio.", "error");
            return;
        }
        if (!emailValue) {
            mostrarToast("El campo 'Correo' es obligatorio.", "error");
            return;
        }
        if (!mensajeValue) {
            mostrarToast("El campo 'Mensaje' es obligatorio.", "error");
            return;
        }
        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            mostrarToast("Por favor, ingresa un correo válido.", "error");
            return;
        }

        mostrarToast("Formulario enviado correctamente.", "success");
        formulario.reset();
    });
});

function mostrarToast(mensaje, tipo) {
    const estilo = tipo === "success"
        ? "linear-gradient(to right, #00b09b, #96c93d)"
        : "linear-gradient(to right, #ff5f6d, #ffc371)";
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: estilo },
    }).showToast();
}



