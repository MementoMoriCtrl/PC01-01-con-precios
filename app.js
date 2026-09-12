// --- 1. BARRA DE NOTIFICACIONES
const mensajesNotificacion = [
    "Pedidos personalizados con 48 horas de anticipación.",
    "¡Promo! 10% de descuento en tortas esta semana.",
    "Delivery gratis por compras mayores a S/ 50.",
    "Prueba nuestro nuevo Box Dulce de la semana."
];

function actualizarNotificacion() {
    const barra = document.querySelector("#barraNotificaciones p");
    if(barra) {
        const indice = Math.floor(Math.random() * mensajesNotificacion.length);
        barra.textContent = mensajesNotificacion[indice];
    }
}

// Ejecutar cada 4 segundos
setInterval(actualizarNotificacion, 4000);
actualizarNotificacion(); 


// --- PRECIOS DE LOS PRODUCTOS (en soles) ---
const preciosProductos = {
    "Torta de chocolate": 75.00,
    "Torta de vainilla": 70.00,
    "Cheesecake de frutos rojos": 85.00,
    "Cupcakes de chocolate": 32.00,
    "Cupcakes de vainilla": 30.00,
    "Box dulce especial": 55.00
};


// --- 2. LOGICA DEL FORMULARIO (Requisitos obligatorios) ---
function procesarPedido() {
    const nombre = document.getElementById("nombreCliente").value;
    const producto = document.getElementById("productoSeleccionado").value;
    const cantidad = Number(document.getElementById("cantidadProducto").value);
    const tipo = document.getElementById("tipoPedido").value;

    if (nombre === "" || producto === "" || !cantidad || tipo === "") {
        alert("Por favor, completa todos los campos del pedido para continuar.");
        return;
    }

    // Calculo del total segun el precio unitario y la cantidad
    const precioUnitario = preciosProductos[producto];
    const subtotal = precioUnitario * cantidad;

    let mensajeLogistica = "";

    if (tipo === "delivery") {
        if (subtotal > 50) {
            mensajeLogistica = "¡Felicidades! Tu compra supera los S/ 50, por lo que tu delivery es GRATIS. Nos contactaremos al 987790205 para coordinar la dirección.";
        } else {
            mensajeLogistica = "El costo de delivery se calculará según tu ubicación.";
        }
    } else if (tipo === "recojo") {
        mensajeLogistica = "Tu pedido estará listo para recojo en nuestra tienda. ¡Te esperamos!";
    }

    const mensajeFinal = `¡Hola, ${nombre}! 🍰

Tu pedido fue recibido exitosamente.

Resumen de tu compra:
• Producto: ${producto}
• Precio unitario: S/ ${precioUnitario.toFixed(2)}
• Cantidad: ${cantidad}
• Modalidad: ${tipo.toUpperCase()}

TOTAL A PAGAR: S/ ${subtotal.toFixed(2)}

${mensajeLogistica}

¡Gracias por elegir Dulce Esencia!`;

    alert(mensajeFinal);
}

